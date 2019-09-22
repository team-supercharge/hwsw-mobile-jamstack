# JSConfBP JAMStack Workshop

During the workshop we're going to build a basic company e-commerce store where you and your fellow coworkers can buy cool SWAGs.

## Requirements

- Git
- Github account
- Editor of your choice
- Node.js (minimum v8)
- npm or yarn

To make communication and file sharing seamless we're using a Slack workspace. [You can join the workspace here.](https://join.slack.com/t/jsconfbp-jamstack/shared_invite/enQtNzY1OTIyNjIxMTI2LTg4Y2FlNTEzMDFhOTE2Yzg1ZjlhMmM2YWZiMWYxNjNjM2VkMjNlOTIyZTkzOWJkOTEwOWJkNWQyMTc0ZmRiMWQ)

If you have a question or you're stucked with something, feel free to ask our mentors or post it to Slack's **#help** channel.

## Part 1

### Tasks

start from branch: `41-cart`

#### Dispatch actions

1. Check action types `src/store/types`
2. find all alert() in the project and dispatch actions instead

Here is an example for the INCREMENT_QUANTITY action payload

```js
payload: {
    slug: '',
    name: '',
    price: 0,
}
```
