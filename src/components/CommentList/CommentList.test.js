import { it, expect, beforeEach, describe } from "@jest/globals";
import { screen, render } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import CommentList from "./index.js";
import Comment from "../Comment/index.js";

const props = {
  comments: [
    {
      id: "C_eSSKbq2lWfs-TaylQI2",
      author: "Earl Grand",
      content: "Great post",
    },
    {
      id: "hXo9MDNljcMQSkDiWMAZA",
      author: "Tony Cyzcwierich",
      content: "Cereal",
    },
  ],
};

describe("CommentList component", () => {
  beforeEach(() => {
    render(<CommentList comments={props.comments} />);
  });

  it.each(props.comments)(
    "should render each comment's author and content",
    (comment) => {
      expect(screen.getByText(comment.content)).toBeInTheDocument();
      expect(screen.getByText(comment.author)).toBeInTheDocument();
    }
  );
});

describe("CommentList implementation details", () => {
  const testRenderer = TestRenderer.create(
    <CommentList comments={props.comments} />
  );
  const testInstance = testRenderer.root;

  it("should render exactly one Comment component per comment", () => {
    expect(testInstance.findAllByType(Comment)).toHaveLength(
      props.comments.length
    );
  });

  it("should use the comment id as the key", () => {
    let nodes = testInstance.findAllByType(Comment);

    /**
     * Find the first common ancestor. This is only to handle scenarios where
     * the Comment component isn't the root node of the JSX expression returned from the `Array.prototype.map`
     * callback.
     */
    while (nodes[0] !== nodes[1]) {
      nodes = nodes.map((node) => node.parent);
    }

    const nearestCommonAncestor = nodes[0];
    const children = nearestCommonAncestor._fiber.stateNode.props.children;
    const actualKeys = children.flatMap((node) => node.key);
    const expectedKeys = props.comments.map((comment) => comment.id);

    /**
     * Actual implementation may contain keys from other siblings (unlikely but not impossible). So using `arrayContaining`
     * instead of a direct comparison. Probably good enough for now.
     *
     * Potentially can make this assertion stricter/tighter by finding the array within
     * `children` (or `children` itself) and asserting whether the keys are strictly equal to
     * to `expectedKeys`.
     */
    expect(actualKeys).toStrictEqual(expect.arrayContaining(expectedKeys));
  });
});
