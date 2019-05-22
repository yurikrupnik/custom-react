import commonjs from 'rollup-plugin-commonjs';
// import fs from 'fs';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
// import css from 'rollup-plugin-css-only';
import sass from 'rollup-plugin-sass';
import pkg from './package.json';

// const NODE_ENV = process.env.NODE_ENV || 'development';
// const outputFile = NODE_ENV === 'production' ? './lib/prod.js' : './lib/dev.js';

// const template = {
//     input: 'src/index.js',
//     output: [
//         {
//             file: 'dist/main.cjs.js',
//             format: 'cjs'
//         },
//         {
//             file: 'dist/main.esm.js',
//             format: 'esm'
//         },
//         {
//             file: 'dist/main.umd.js',
//             format: 'umd',
//             name: 'custom-react'
//         }
//     ],
//     plugins: [
//         babel(),
//         resolve({
//             modulesOnly: true, // Default: false
//             extensions: ['.mjs', '.js', '.jsx', '.json'],
//         })
//     ]
// }

// fs.readdir('src', (err, files) => {
//     files.forEach(file => {
//         console.log(file);
//     });
// });

const filter = ['react', 'prop-types', 'd3', '@material/ui', 'styled-components', '@material-ui/core/Button'];

// export default [
//     {
//         input: 'src/index.js',
//         output: [
//             {
//                 file: 'dist/main.cjs.js',
//                 format: 'cjs'
//             },
//             {
//                 file: 'dist/main.esm.js',
//                 format: 'esm'
//             },
//             {
//                 file: 'dist/main.umd.js',
//                 format: 'umd',
//                 name: 'custom-react'
//             }
//         ],
//         plugins: [
//             babel(),
//             resolve({
//                 modulesOnly: true, // Default: false
//                 extensions: ['.mjs', '.js', '.jsx', '.json'],
//             }),
//             sass({
//                 // insert: true
//             })
//         ],
//         external: filter
//     },
//     {
//         input: 'src/BaseButton/index.js',
//         output: [
//             {
//                 file: 'dist/BaseButton.cjs.js',
//                 format: 'cjs'
//             },
//             {
//                 file: 'dist/BaseButton.esm.js',
//                 format: 'esm'
//             },
//             {
//                 file: 'dist/BaseButton.umd.js',
//                 format: 'umd',
//                 name: 'BaseButton'
//             }
//         ],
//         plugins: [
//             babel(),
//             resolve({
//                 modulesOnly: true, // Default: false
//                 extensions: ['.mjs', '.js', '.jsx', '.json'],
//             }),
//             sass({
//                 // insert: true
//             })
//         ],
//         external: filter
//     },
//     {
//         input: 'src/PillButton/index.js',
//         output: [
//             {
//                 file: 'dist/PillButton.cjs.js',
//                 format: 'cjs'
//             },
//             {
//                 file: 'dist/PillButton.esm.js',
//                 format: 'esm'
//             },
//             {
//                 file: 'dist/PillButton.umd.js',
//                 format: 'umd',
//                 name: 'PillButton'
//             }
//         ],
//         plugins: [
//             babel(),
//             resolve({
//                 modulesOnly: true, // Default: false
//                 extensions: ['.mjs', '.js', '.jsx', '.json', '.css', '.sass'],
//             }),
//             sass({
//                 // insert: true
//             })
//         ],
//         external: filter
//     },
//     {
//         input: 'src/ButtonGroup/index.js',
//         output: [
//             {
//                 file: 'dist/ButtonGroup.cjs.js',
//                 format: 'cjs'
//             },
//             {
//                 file: 'dist/ButtonGroup.esm.js',
//                 format: 'esm'
//             },
//             {
//                 file: 'dist/ButtonGroup.umd.js',
//                 format: 'umd',
//                 name: 'ButtonGroup'
//             }
//         ],
//         plugins: [
//             babel(),
//             resolve({
//                 modulesOnly: true, // Default: false
//                 extensions: ['.mjs', '.js', '.jsx', '.json'],
//             }),
//             sass({
//                 // insert: true
//             })
//         ],
//         external: filter
//     },
//     {
//         input: 'src/DataGraph/index.js',
//         output: [
//             {
//                 file: 'dist/DataGraph.cjs.js',
//                 format: 'cjs'
//             },
//             {
//                 file: 'dist/DataGraph.esm.js',
//                 format: 'esm'
//             },
//             {
//                 file: 'dist/DataGraph.umd.js',
//                 format: 'umd',
//                 name: 'DataGraph'
//             }
//         ],
//         plugins: [
//             babel(),
//             resolve({
//                 modulesOnly: true, // Default: false
//                 extensions: ['.mjs', '.js', '.jsx', '.json'],
//             }),
//             sass({
//                 // insert: true
//             })
//         ],
//         external: filter
//     }
// ];


export default {
    input: 'src/index.js',
    output: [
        {
            file: 'dist/main.cjs.js',
            format: 'cjs'
        },
        {
            file: 'dist/main.esm.js',
            format: 'esm'
        },
        { // if i care about browser load via script
            file: 'dist/main.umd.js',
            format: 'umd',
            name: 'custom-react'
        }
    ],
    plugins: [
        babel(),
        resolve({
            modulesOnly: true, // Default: false
            extensions: ['.mjs', '.js', '.jsx', '.json'],
        }),
        sass({
            // insert: true
        })
    ],
    external: Object.keys(pkg.peerDependencies)
};
