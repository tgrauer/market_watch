const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.browserSync('market_watch.test');

mix.sass('resources/sass/app.scss', 'public/css')
mix.js('resources/js/app.js', 'public/js')
	.js('resources/js/analystratings.js', 'public/js/analystratings.js')
	.js('resources/js/company_dividends.js', 'public/js/company_dividends.js')
	.js('node_modules/popper.js/dist/popper.js', 'public/js').sourceMaps()
	.js('resources/js/company.js', 'public/js/company.js');
