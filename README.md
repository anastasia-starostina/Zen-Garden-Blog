# React Recap Tasks

## Tasks

For these tasks, you'll put what you've learned this week together to create a blog app with components that display posts and comments and allow users to add new comments.

Work step by step, tackling each task and breaking down the logic as much as possible in a plan before you code. Remember that you can use `npm start` to run the development server to see your app in the browser (so you can render and check each component as you build).

## Task 1 - BlogPost

Create a component `BlogPost` (for this exercise, make it the default export in `src/components/BlogPost/index.js`) as below:

- Props:

  - `blog` which should be an object with the following shape:

    ```ts
    {
      title: string,
      author: string,
      datePosted: string,
      content: string,
      imageSrc: string,
      imageAlt: string,
    }
    ```

    Example:

    ```js
    {
      title: "My First Post",
      author: "Chris Meah",
      datePosted: "20/11/2019",
      content: `
        A structure used in most apps and games.
        It's a way to keep doing the same.
        While a condition is true,
        Or for one to twenty-two.
        If endless, for errors we blame
        ..........
        Loop `,
      imageSrc: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      imageAlt: "A couple of coders."
    }
    ```

- Renders:

  ![BlogPost](BlogPost.png)

## Task 2 - Comment

Create a component `Comment` (for this exercise, make it the default export in `src/components/Comment/index.js`) as below:

- Props:

  - `author` which should be a string (e.g. `"Ben Lee"`)
  - `content` which should be a string (e.g. `"Hello, great post"`)

- Renders:

  - Display the author and comment
  - Display the capitalised initials of the commenter's full name in a nice little circle. Some examples:

    - `Ben Lee` should appear as `BL` inside a circle
    - `Jane Ashley Green` should display as `JAG` inside a circle

  ![Comment](Comment.png)

---

## Task 3 - CommentList

Create a component `CommentList` (for this exercise, make it the default export in `src/components/CommentList/index.js`) as below:

- Props:

  - `comments` should be an array of objects. Each object in the array should should have the following shape:

    ```ts
    {
      id: string,
      author: string,
      content: string
    }
    ```

    An example of a `comments` array:

    ```js
    [
      {
        id: "kskBC5HZ8qgNQUiW6If6q",
        author: "Billy Bootcamper",
        content: "Hello, great post",
      },
      {
        id: "jFyGAKz1VsGputO1gV8xa",
        author: "Chris Meah",
        content: "Many thank yous",
      },
    ];
    ```

- Renders:
  - Render a `Comment` component for each item in the `comments` array (prop). Use the `id` of each comment as its React key.

## Task 4 - CommentForm

Create a component `CommentForm` (for this exercise, make it the default export in `src/components/CommentForm/index.js`) as follows:

- Props:

  - `onSubmit` which is a function which will be called (when the user clicks the button) to let `CommentForm`'s parent component know what the user entered.

- State:

  - You can have some state(s) for tracking the user's inputs (i.e. their name and comment).

- Behaviours:

  - On clicking the button, `onSubmit` should be called with the user's input (both their name and their comment). This a way to let the parent component know what the user has entered.
  - If the comment is empty, do not call `onSubmit`.
  - Provide a default name for the author (e.g. `"Anon Author"`).
  - After calling `onSubmit`, clear the input for the comment but not the input for the name

- Renders:

  - An input for the author's name (with an "Author" label)
  - An input for the comment itself (with a "Comment" label)
  - A button containing "Submit"

  ![CommentForm](CommentForm.png)

## Task 5 - App

Create a component `App` (for this exercise, make it the default export in `src/components/App/index.js`) as below:

- State:

  - `comments` which should be an array of comment objects. A comment object's shape is as described in task 3.

- Behaviours:

  - a function which can take in an author and comment (as input), creates a new comment object (with an `author`, `comment` and `id`) and adds the new comment object to the `comments` array (state).

- Renders:

  - A `BlogPost` component
    - You can use the `blog` object in `data/blogs.js` for the `blog ` prop. (In reality, the blog data might come from an API instead of a hard coded object. However, this is good enough for now.)
  - A `CommentList` component
    - You should use the `comments` state (from `CommentsSection` state) as the `comments` prop for the `CommentList`
  - A `CommentForm` component
    - You should pass down the function (described earlier in "behaviours", which takes in an `author` and `comment`) as the `onSubmit` prop for the `CommentForm`

## Result

If you have time, feel free to style the app as you please.

Example of the finished blog app:

![Final](Final.png)

## Bonus

[Click here](https://classroom.github.com/a/kkbLB2Oh) to keep practicing and exploring different immutable JavaScript array methods. Look up each method in the docs and see if you can solve the tasks.
