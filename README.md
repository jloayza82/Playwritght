# Playwritght

Descripción del Proyecto: 
El proyecto realiza la automatización de la página orange, donde se ingresa a la página y se crear empleado

Instrucciones de Instalación:
Para el correcto uso, hay que seguir las siguientes instrucciones :
*GlOBAL
npm install -g proyecto-playwright
*LOCAL
npm install -g proyecto-playwright
Para usarlo
*Global
Ejecutamos ##proyecto-playwrigh##
*Local
Añadir en package.json
"scripts": {
   "proyecto-playwright":  "./node_modules/.bin/proyecto-playwrigh"
},
Ejecutamos con
npm run proyecto-playwright

Instrucciones de Ejecución:
Ejecutar los archivos steps:
loginSteps.ts
empleadoSteps.ts

Descripción del Diseño:
Se utilizo patrón de diseño POM
El proyecto se estrutura por carpetas:
Feature : Se utuliza lenguaje gherkin
Steps :  Se implementa los archivos features
