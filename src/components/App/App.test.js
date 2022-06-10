import { it, expect, describe } from "@jest/globals";
import TestRenderer from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import App from "./index.js";
import BlogPost from "../BlogPost/index.js";
import CommentList from "../CommentList/index.js";
import CommentForm from "../CommentForm/index.js";
import { blog } from "../../data/blogs.js";
import { render, screen } from "@testing-library/react";

describe("Adding new comments", () => {
  let authorInput;
  let commentInput;
  let submitButton;

  const comments = [
    {
      author: "Abe",
      content: `Amazing ${Math.random().toString(16).slice(2)}!`,
    },
    {
      author: "Barbara",
      content: `Nice ${Math.random().toString(16).slice(2)}!`,
    },
  ];

  beforeEach(async () => {
    render(<App />);

    authorInput = screen.getByLabelText(/Author/i);
    commentInput = screen.getByLabelText(/Comment/i);
    submitButton = screen.getByText(/Submit/i);

    for (const comment of comments) {
      await userEvent.clear(authorInput);
      await userEvent.type(authorInput, comment.author);
      await userEvent.clear(commentInput);
      await userEvent.type(commentInput, comment.content);
      await userEvent.click(submitButton);
    }
  });

  it("should display all comments and authors", () => {
    comments.forEach((comment) => {
      expect(screen.getByText(comment.content)).toBeInTheDocument();
      expect(screen.getByText(comment.author)).toBeInTheDocument();
    });
  });
});

/**
 * Shouldn't normally test implementation details.
 *
 * Wanted to ensure instructions were followed, but not sure
 * how much value these tests add. Can maybe remove in future.
 */
describe("Implementation details", () => {
  const testRenderer = TestRenderer.create(<App />);
  const testInstance = testRenderer.root;

  it("should render exactly one BlogPost", () => {
    expect(testInstance.findAllByType(BlogPost)).toHaveLength(1);
  });

  it("should pass 'blog' prop to BlogPost", () => {
    const blogPost = testInstance.findByType(BlogPost);
    const props = blogPost._fiber.memoizedProps;
    expect(props.blog).toStrictEqual(blog);
  });

  it("should render exactly one CommentList", () => {
    expect(testInstance.findAllByType(CommentList)).toHaveLength(1);
  });

  it("should pass 'comments' prop to CommentList", () => {
    const commentList = testInstance.findByType(CommentList);
    const props = commentList._fiber.memoizedProps;
    expect(props.comments).toStrictEqual(expect.any(Array));

    props.comments.forEach((comment) => {
      expect(comment).toStrictEqual({
        id: expect.any(String),
        author: expect.any(String),
        content: expect.any(String),
      });
    });
  });

  it("should render exactly one CommentForm", () => {
    expect(testInstance.findAllByType(CommentForm)).toHaveLength(1);
  });

  it("should pass 'onSubmit' prop to CommentForm", () => {
    const commentForm = testInstance.findByType(CommentForm);
    const props = commentForm._fiber.memoizedProps;
    expect(props.onSubmit).toStrictEqual(expect.any(Function));
  });
});
