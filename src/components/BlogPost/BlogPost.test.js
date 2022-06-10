import { it, expect, beforeEach, describe } from "@jest/globals";
import { screen, render } from "@testing-library/react";
import BlogPost from "./index.js";

describe.each([
  {
    title: "Some title",
    author: "Some author",
    datePosted: "Some date",
    content: "Some content",
    imageSrc: "Some image source",
    imageAlt: "Some alt text",
  },
  {
    title: "Best day ever!",
    author: "Henry James",
    datePosted: "1 June 2029",
    content: "We ate ice cream.",
    imageSrc: "Invalid url",
    imageAlt: "Ice cream",
  },
])("BlogPost component", (blog) => {
  beforeEach(() => {
    render(<BlogPost blog={blog} />);
  });

  it("should display 'title'", () => {
    expect(screen.getByText(blog.title)).toBeInTheDocument();
  });

  it("should display 'author'", () => {
    expect(screen.getByText(blog.author, { exact: false })).toBeInTheDocument();
  });

  it("should display 'datePosted'", () => {
    expect(screen.getByText(blog.datePosted)).toBeInTheDocument();
  });

  it("should display 'content'", () => {
    expect(screen.getByText(blog.content)).toBeInTheDocument();
  });

  it("should display an image with correct src and alt text", () => {
    const image = screen.getByAltText(blog.imageAlt);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", blog.imageSrc);
  });

  it("should display the alt text as a caption", () => {
    expect(screen.getByText(blog.imageAlt)).toBeInTheDocument();
  });
});
