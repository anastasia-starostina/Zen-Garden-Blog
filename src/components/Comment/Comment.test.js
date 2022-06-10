import React from "react";
import { it, expect, beforeEach, describe } from "@jest/globals";
import { screen, render } from "@testing-library/react";
import Comment from "./index.js";

describe.each([
  {
    props: {
      author: "Some author",
      content: "Some content",
    },
    expected: {
      initials: "SA",
    },
  },
  {
    props: { author: "Some other author", content: "Highly intriguing" },
    expected: {
      initials: "SOA",
    },
  },
  {
    props: {
      author: "Yet another author",
      content: "Enlightening read",
    },
    expected: {
      initials: "YAA",
    },
  },
  {
    props: {
      author: "Bob Arnold",
      content: "Great post",
    },
    expected: {
      initials: "BA",
    },
  },
  {
    props: { author: "Curious Tiger", content: "Very interesting" },
    expected: {
      initials: "CT",
    },
  },
])("Comment component", ({ expected, props }) => {
  beforeEach(() => {
    render(<Comment author={props.author} content={props.content} />);
  });

  it(`should display author '${props.author}'`, () => {
    expect(
      screen.getByText(props.author, { exact: false })
    ).toBeInTheDocument();
  });

  it(`should display content '${props.content}'`, () => {
    expect(screen.getByText(props.content)).toBeInTheDocument();
  });

  it(`should display initials '${expected.initials}'`, () => {
    expect(screen.getByText(expected.initials)).toBeInTheDocument();
  });
});
