import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import sass from 'rollup-plugin-sass';
import generatePackageJson from 'rollup-plugin-generate-package-json';
import kebabCase from 'lodash/kebabCase';

const filter = ['react', 'prop-types', 'd3', '@material/ui', 'styled-components', '@material-ui/core/Button'];

const cjs = 'index.cjs.js';
const esm = 'index.esm.js';
const umd = 'index.umd.js';

function createRollupOutput(module) {
    return {
        input: `src/${module}/index.js`,
        output: [
            {
                file: `dist/${module}/${esm}`,
                format: 'esm'
            },
            {
                file: `dist/${module}/${cjs}`,
                format: 'cjs'
            },
            {
                file: `dist/${module}/${umd}`,
                format: 'umd',
                name: kebabCase(module)
            }
        ],
        plugins: [
            babel(),
            resolve({
                // modulesOnly: true, // Default: false
                extensions: ['.mjs', '.js', '.jsx', '.json'],
            }),
            sass({
                // insert: true
            }),
            generatePackageJson({
                baseContents: {
                    name: kebabCase(module),
                    scripts: {},
                    description: '',
                    main: cjs,
                    module: esm,
                    dependencies: {},
                    private: true
                }
            }),
        ],
        external: filter
    };
}

export default [
    {
        input: 'src/index.js',
        output: [
            {
                file: 'dist/cjs/main.js',
                format: 'cjs'
            },
            {
                file: 'dist/esm/main.js',
                format: 'esm'
            },
            {
                file: 'dist/umd/main.js',
                format: 'umd',
                name: 'custom-react'
            }
        ],
        plugins: [
            babel(),
            resolve({
                // modulesOnly: true, // Default: false
                extensions: ['.mjs', '.js', '.jsx', '.json'],
            }),
            sass({
                // insert: true
            })
        ],
        external: filter
    },
    createRollupOutput('BaseButton'),
    createRollupOutput('PillButton'),
    createRollupOutput('ButtonGroup'),
    createRollupOutput('DataGraph'),
];
