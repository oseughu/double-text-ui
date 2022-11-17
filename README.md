# Double Text (Frontend)

This project was built to test my skills on linking a fully functional client side application with a server side application. The client side was built using [SvelteKit](https://kit.svelte.dev) and [Bootstrap](https://getbootstrap.com)

## Features

- Create and Delete Posts (only if the post was created by that particular user)
- Create and Delete Comments (only if the post or comment was created by that particular user)
- Create and delete Reply to comments (only if the post or reply was created by that particular user)
- Upvote or Downvote on posts (cannot have duplicates or both can't be done on the same post)
- Persistent sessions
- Secure (You need to be logged in before you can vote or add and delete posts and comments)

## Todo

- [ ] Edit comments

- [ ] Edit posts

- [ ] Edit replies

- [ ] Better realtime updates on votes and deletion

- [ ] Better conditional logic for the navbar
