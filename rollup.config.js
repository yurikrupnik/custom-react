import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import sass from 'rollup-plugin-sass';

import pkg from './package.json';

export default {
    input: 'src/index.js',
    external: Object.keys(pkg.peerDependencies),
    output: [
        {
            dir: 'dist/es',
            format: 'es'
        },
        {
            dir: 'dist/umd',
            format: 'umd',
            name: pkg.name
        }
    ],
    extensions: ['.js', '.jsx'],
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        sass({
            output: 'styles.sass'
        }),
        resolve()
    ]
};
