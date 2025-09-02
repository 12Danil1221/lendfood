
let mix = require('laravel-mix');

mix.js('resources/js/popup.js', 'public/js')
.postCss('resources/css/app.css', 'public/css', [
    require('tailwindcss'),
    require('autoprefixer'),
]);