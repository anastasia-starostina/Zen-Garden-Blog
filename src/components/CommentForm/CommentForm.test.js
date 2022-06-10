import { it, expect, beforeEach, describe, jest } from "@jest/globals";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommentForm from "./index.js";

describe.each([
  {
    props: {
      onSubmit: jest.fn(),
    },
    author: "Joe",
    comment: "I learned something new!",
  },
  {
    props: {
      onSubmit: jest.fn(),
    },
    author: "Jose",
    comment: "I didn't know that",
  },
])("CommentForm component", ({ props, author, comment }) => {
  let authorInput;
  let commentInput;
  let submitButton;

  beforeEach(() => {
    props.onSubmit.mockClear();
    render(<CommentForm onSubmit={props.onSubmit} />);
    authorInput = screen.getByLabelText(/Author/i);
    commentInput = screen.getByLabelText(/Comment/i);
    submitButton = screen.getByText(/Submit/i);
  });

  it("should render an input for the author with an 'Author' label", () => {
    expect(authorInput).toBeInTheDocument();
  });

  it("should provide a default value in author input", () => {
    expect(authorInput).not.toHaveValue("");
  });

  it("should render an input for the comment with a 'Comment' label", () => {
    expect(commentInput).toBeInTheDocument();
  });

  it("should render a submit button", () => {
    expect(submitButton).toBeInTheDocument();
  });

  it("should call 'onSubmit' when the button is clicked and the comment input is not empty", async () => {
    await userEvent.clear(authorInput);
    expect(authorInput).not.toHaveValue(author);
    await userEvent.type(authorInput, author);
    expect(authorInput).toHaveValue(author);

    expect(commentInput).not.toHaveValue(comment);
    await userEvent.type(commentInput, comment);
    expect(commentInput).toHaveValue(comment);

    expect(props.onSubmit).not.toHaveBeenCalled();
    await userEvent.click(submitButton);
    expect(props.onSubmit).toHaveBeenCalledTimes(1);
  });

  it("should not call 'onSubmit' when the button is clicked and the comment input is empty", async () => {
    await userEvent.clear(authorInput);
    await userEvent.type(authorInput, author);
    expect(authorInput).toHaveValue(author);

    await userEvent.clear(commentInput);
    expect(commentInput).toHaveValue("");

    expect(props.onSubmit).not.toHaveBeenCalled();
    await userEvent.click(submitButton);
    expect(props.onSubmit).not.toHaveBeenCalled();
  });
});
