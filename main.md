# Next.js
Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.(routing, server rendering, api routes, image optimisation, high in SEO, etc), instead of setting up whole stack manually you can just start building. (Officail documentation:- https://nextjs.org/docs)

# Folder structure
folder stucture similar to react (Next config)

# Routing
routing based on file system (not react router dom)
app and pages router

## pages router 
folder called pages
whateve file or folder is inside will become the route

## app router (reccomended after next.js13)
create a folder in app folder with route name
render the component in the page.jsx

## Components
components in the app folder are server componnets
- erver runned
- html sent to client
- dont have access to client broswer feature (onclick)

### Client Components
to use interativty like use state , onClick etc use client components
- create a new file and 'use client' at the top
- render on the client
- can render it on the server component
- server component will use client components for interactivity

but why server component?
faster Page load
less js sent
SEO keywords present

## Fetch
no need to create a function to fetch data
- directly inside a component by async and await 
- next will handle chaching, revalidation and loading UI
- to make a loading state you just need to make a loading.jsx file 
- and when loading that componenet will be rendered

## API
create a api folder
and every folder inside of it if intialised with a route.js will become an api route
then you can use the http method like get post etc.

```
api/
│
├── Bookmark/
│   ├── route.js/
|
├── User/
│   └── route.js
```

### advantages
next is build for optimisation so simple things like rendering an image is way better optimised 
it will automatically compress and lazy load images for you

### SEO Benefits
one of the main benefits is seo benifits
- because meta data can be defined clearly
- meta deta in the compnonet like title description and keywords.