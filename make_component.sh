# Name: react-component-generator
# Brief: Crea un nuevo componente basado en templates
# Author: Carlos Sánchez

echo "Please enter a name for your new component"
read var

if [ ! -z "$var" ]
then
  mkdir -p src/components/$var
  sed -e "s/COMPONENT_NAME/$var/g" templates/index.js > src/components/$var/index.js
  sed -e "s/COMPONENT_NAME/$var/g" templates/index.test.js > src/components/$var/index.test.js
  sed -e "s/COMPONENT_NAME/$var/g" templates/style.js > src/components/$var/style.js
  echo 'Your component "'$var'" was created successfully.'
else
  echo "It's not possible to create a nameless component."
fi