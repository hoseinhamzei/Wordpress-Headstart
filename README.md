
# Wordpress-Headstart
A minimalistic wordpress starter theme powered with bootsrtap 4, jquery and gulp with auto sass and babel compilation, developed for fast and easy wordpress theme development.

## Installation
- [download zip](https://github.com/hoseinhamzei/Wordpress-Headstart/archive/master.zip)
 - copy theme folder in wp-content/themes
 - activate the theme in the admin panel
## Usage
 - this starter theme uses gulp for js(babel) and sass transpilation
 - run `npm intall` command in the root of the theme to install gulp and other dependencies 
 - put images in images folder
 - put your own javascript files in src/js and javascript libraries in src/js/libs, all of thiese files will be concated into main.js
 - put your css and scss files in src/style and css libraries in src/style/libs, all of these files will be concated and minified into style.css and libs.css files
 - run `gulp build` in the root of the theme to build all styles and scripts in dist folder all files in this folder will be minified and compatible with all browsers
 - run `gulp start` in the root of the theme to auto build scripts and styles whenever you edit the regarding files
 - all basic wordpress files are included in this theme, you can start editing them and add more wordpress files

