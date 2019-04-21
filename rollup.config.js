// import jsx from 'acorn-jsx';

const jsx = require('acorn-jsx');

module.exports = {
    input: 'src/index.js',
    output: {
        file: 'bundle.js',
        // format: 'cjs'
    },
    acornInjectPlugins: [
        jsx()
    ]
};
