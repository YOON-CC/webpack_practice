// npx webpack --entry ./source/index.js --output-path ./public/index_bundle.js
// npx webpack --config webpack.config.prod.js  
const path = require('path')

module.exports = {
    mode:"production",
    entry:"./source/index.js",
    output:{
        path:path.resolve(__dirname, "public"),
        filename:'index_bundle.js'
    }
}