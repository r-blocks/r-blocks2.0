module.exports = {
    webpack: {
        configure: {
            ignoreWarnings: [
                {
                    module: /blockly/,
                    message: /Failed to parse source map/,
                }
            ]
        }
    }
};