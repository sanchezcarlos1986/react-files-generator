#!/usr/bin/env node

const fs = require('fs-extra')
const replace = require('replace-in-file')
const inquirer = require('inquirer')

const alert = '\x1b[31m'
const success = '\x1b[32m'
const warning = '\x1b[33m'

const changeDestinyFilename = (destiny, file, name) => {
  console.log('file:', file)
  const extension = file.split('.').slice(1).join('.')
  console.log('extension:', extension)
  const path = `${destiny}/${file}`
  try {
    if (fs.existsSync(path)) {
      fs.rename(path, `${destiny}/${name}.${extension}`)
    }
  } catch(err) {
    console.error(err)
  }
}

// Copy Files
function copyFile(source, destiny, type, name) {
  fs.copy(source, destiny)
    .then(() => console.log(success, `Your ${type.toLowerCase().slice(0, -1)} "${name}" has been created successfully.`))
    .then(() => { changeDestinyFilename(destiny, 'index.js', name) })
    .then(() => { changeDestinyFilename(destiny, 'index.test.js', name) })
    .then(() => { changeDestinyFilename(destiny, 'index.module.scss', name) })
    .then(() => {
      const options = {
        files: `${destiny}/*.*`,
        from: [/COMPONENT_NAME/g, /CLASSNAME/g],
        to: [name, name.toLowerCase()],
      }
      replace(options)
        .catch(err => console.error("Sorry, we could't replace the text", err))
    })
    .catch(err => console.error(alert, `Sorry, we've got the following error: ${err}`))
}

inquirer.prompt([
  {
    type: 'list',
    name: 'type',
    message: 'What do you want to create?',
    choices: ['Components', 'Services'],
  },
  {
    name: 'name',
    message: `Please type a name for it`
  }
])
  .then(answers => {
    // Capitalize first letter of new component name
    const answersName = answers.name.trim()
    const name = answers.type === 'Components'
      ? `${answersName.charAt(0).toUpperCase()}${answersName.slice(1).replace(/ /g, '_')}`
      : answersName.toLowerCase().replace(/ /g, '_')
    const source = `${__dirname}/../templates/${answers.type}`
    const destiny = `./src/${answers.type.toLowerCase()}/${name}`

    // Check if the component exists
    let componentExists = false

    fs.pathExists(destiny).then(exists => {
      componentExists = exists

      if (name && name !== '') {
        if (componentExists) {
          console.error(warning, `Sorry, but the ${answers.type.toLowerCase().slice(0, -1)} ${name} already exists.`)
        } else {
          copyFile(source, destiny, answers.type, name)
        }
      } else {
        console.error(alert, `It's not possible to create a nameless ${answers.type.toLowerCase().slice(0, -1)}.`)
      }

    })
  })
