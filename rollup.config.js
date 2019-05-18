import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

const NODE_ENV = process.env.NODE_ENV || 'development';
// const outputFile = NODE_ENV === 'production' ? './lib/prod.js' : './lib/dev.js';
export default {
    input: 'src/BaseButton/BaseButton.jsx',
    output: [
        {
            file: 'dist/BaseButton.cjs.js',
            format: 'cjs'
        },
        {
            file: 'dist/BaseButton.esm.js',
            format: 'esm'
        }
    ],
    plugins: [
        // replace({
        //     "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
        // }),
        babel({
            // modules: false
            // exclude: "node_modules/**"
        }),
        resolve(),
        commonjs()
    ],
};
