#!/usr/bin/env node

const fs = require('fs-extra')
const replace = require('replace-in-file')
const inquirer = require('inquirer')

const alert = '\x1b[31m'
const success = '\x1b[32m'
const warning = '\x1b[33m'

console.log('RUTA ACTUAL: ', process.cwd())

// Copy Files
function copyFile(source, destiny, type, name) {
  fs.copy(source, destiny)
    .then(() => console.log(success, `Your ${type.toLowerCase().slice(0, -1)} "${name}" has been created successfully.`))
    .then(() => {
      const options = {
        files: `${destiny}/*.js`,
        from: /COMPONENT_NAME/g,
        to: name,
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
    const destiny = `${process.cwd()}/${name}`

    // Preguntamos su el componente existe
    let componentExists = false

    fs.pathExists(destiny).then(exists => {
      componentExists = exists

      if (name && name !== '') {
        if (componentExists) {
          console.error(warning, `Sorry, but the ${answers.type} ${name} already exists.`)
        } else {
          copyFile(source, destiny, answers.type, name)
        }
      } else {
        console.error(alert, `It's not possible to create a nameless ${answers.type.toLowerCase().slice(0, -1)}.`)
      }

    })
  })
