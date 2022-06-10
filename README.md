# Task Plan

## Task 1 - Blog Post

Create a component `BlogPost` to which has the job of displaying a blog post. Blog posts are represented by the following data:

```JavaScript
{
  title: "My First Post",
  author: "Chris Meah",
  datePosted: "20/11/2019",
  text: `
    A structure used in most apps and games.
    It's a way to keep doing the same.
    While a condition is true,
    Or for one to twenty-two.
    If endless, for errors we blame
    ..........
    Loop `,
  image:
    "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  alt: "A couple of coders."
}
```

![BlogPost](BlogPost.png)

## Task 2 - Comment

Create a component `Comment` which displays a comment. Comments are made of the following properties:

```JavaScript
{
  author: "Ben Lee",
  text: "Hello, great post"
}
```

Your task is to display the author and comment, and also an author Avatar, which is the first letters of an commentors name capitalised in a nice little circle.

![Comment](Comment.png)

## Task 3 - CommentList

Create a component `CommentList` which should take in a list of comments, and show a `Comment` for each item in the list.

```JavaScript
[{ author: "Ben Lee", text: "Hello, great post" },{ author: "Chris Meah", text: "Many thank yous" }]
```

The comments should be stored in state at the top level of your application.

## Task 4 - CommentForm

Create a component `CommentForm` which should allow a user to input their name and comment, and then add this comment to the list. Behaviour should include:

- on pressing the button, a comment should be added to the list
- if the comment is empty, do not add it
- provide a default username
- after a comment is added, clear the comment field but not the username

![CommentForm](CommentForm.png)

## Task 5 - CommentsSection

Create a component `CommentsSection` which contains the `CommentsList` and the `CommentForm` components.

## Result

![Final](Final.png)
