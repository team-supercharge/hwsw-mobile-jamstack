# HWSWMobile 2019 JAMStack Workshop

During the workshop we're going to build a basic company e-commerce store where you and your fellow coworkers can buy cool SWAGs.

## Requirements

- Git
- Github account
- Editor of your choice
- Node.js (minimum v8)
- npm or yarn

If you have a question or you're stucked with something, feel free to ask our mentors.

### Tasks

#### Integrate Product data from markdown files

1. Check the products format in `src/content/products`
2. Open [GraphiQL](http://localhost:8000/__graphiql) and explore the available fields
3. Construct a query which fetch `Product`s list (_hint: you only need to filter to `product-page` template key_)
4. Write and export the page query (_hint: you can check `posts.js`_)
5. Integrate the data and remove the dummy ones
6. Repeat from **3.** for the `Product`'s detail page
