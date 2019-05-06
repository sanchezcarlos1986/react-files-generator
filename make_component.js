/**  
 * Name: react-component-generator
 * Brief: Crea un nuevo componente basado en templates
 * Author: Carlos Sánchez
*/

const fs = require('fs-extra')

const alert = '\x1b[31m'
const success = '\x1b[32m'
const warning = '\x1b[33m'

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

// Copy Files
function copyFile(source, destiny, name) {
  if (name) {
    fs.copy(source, destiny)
      .then(() => console.log(success, `Your component ${name} has been created successfully.`))
      .catch(err => console.error(alert, `Sorry, we've got the following error: ${err}`))
  } else {
    console.error(alert, "It's not possible to create a nameless component.")
  }
}

readline.question(`Please enter a name for your new component: `, (text) => {
  // Capitalize first letter of new component name
  const name = `${text.charAt(0).toUpperCase()}${text.slice(1)}`
  const source = './templates/'
  const destiny = `${__dirname}/src/components/${name}`

  let componentExists = false
  
  fs.pathExists(destiny).then(exists => {
    componentExists = exists

    if (componentExists) {
      console.error(warning, `Sorry, but the component ${name} already exists.`)
    } else {
      copyFile(source, destiny, name)
    }    
  })

  readline.close()
  })