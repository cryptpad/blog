const less = require('less');
const path = require('path');
var fs = require( 'fs' );

module.exports = (function(eleventyConfig) {

    // Compile LESS into CSS
    const inputFile = path.join(__dirname, '/_includes/LESS/main.less')
    const outputFile = path.join(__dirname, '/public/style.css')

    fs.readFile( inputFile ,function(error,data){
        data = data.toString();

        less.render(data, {
            paths: [ inputFile ]
        },function (e, css) {
            fs.writeFile( outputFile, css.css, function(err){
                if( err ){
                    console.log(err );
                }
                console.log('LESS compiled');
            });
        });
    });

    // Copy /images to /public
    eleventyConfig.addPassthroughCopy('images');
});