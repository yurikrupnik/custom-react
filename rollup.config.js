import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

const NODE_ENV = process.env.NODE_ENV || 'development';
// const outputFile = NODE_ENV === 'production' ? './lib/prod.js' : './lib/dev.js';
export default {
    input: '',
    output: [
        {
            file: 'dist/bundle-b1.js',
            format: 'cjs'
        },
        {
            file: 'dist/bundle-b2.js',
            format: 'esm'
        }
    ],
    plugins: [
        // replace({
        //     "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
        // }),
        babel({
            // exclude: "node_modules/**"
        }),
        // resolve(),
        commonjs()
    ],
};
