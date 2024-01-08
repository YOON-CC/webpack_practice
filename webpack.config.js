// npx webpack --entry ./source/index.js --output-path ./public/index_bundle.js
// npx webpack --config webpack.config.js  
const path = require('path')

module.exports = {
    mode:"development",
    entry:"./source/index.js",
    output:{
        path:path.resolve(__dirname, "public"),
        filename:'index_bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}