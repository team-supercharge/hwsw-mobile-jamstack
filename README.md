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

### Demo

#### Connect Product collection to CMS

### Tasks

start from branch: `31-product`

#### Integrate Product data from markdown files

1. Check the products format in `src/content/products`
2. Open [GraphiQL](http://localhost:8000/__graphiql) and explore the available fields
3. Construct a query which fetch `Product`s list (_hint: you only need to filter to `product-page` template key_)
4. Write and export the page query (_hint: you can check `posts.js`_)
5. Integrate the data and remove the dummy ones
6. Repeat from **3.** for the `Product`'s detail page
