A CLI to create standard basic Components or Services for your React projects

## Available Scripts

Install this dependency in your proyect using `npm install react-files-generator`.

Then, in your project's package.json, add a script task with any name you want, and give it the command **generator**.

Now, you can run your task to start using the CLI.

e.g. 
`"scripts": {
    "mytask": "generator
  }
`

`npm run mytask`


Folders | Detail
--- | ---
**Component** | Create a folder with your choosen name (as well as the component's name). Inside you'll find an index.js, an index.test.js and a style.js file. This assume you're working with *styled components* library.
**Service** | Create a folder with an index.js and an index.test.js file.

This CLI will create the folders in the current path you're working, so I recommend to check the path before creating them.
