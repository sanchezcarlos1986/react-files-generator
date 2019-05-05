# component='NewComponent'

echo "Enter Component name"
read var

if [ ! -z "$var" ]
then
  mkdir -p src/components/$var
  sed -e "s/COMPONENT_NAME/$var/g" templates/index.js > src/components/$var/index.js
  sed -e "s/COMPONENT_NAME/$var/g" templates/index.test.js > src/components/$var/index.test.js
  sed -e "s/COMPONENT_NAME/$var/g" templates/style.js > src/components/$var/style.js
  echo 'El componente "'$var'" fue creado correctamente.'
else
  echo 'No puedes crear un componente sin nombre'
fi