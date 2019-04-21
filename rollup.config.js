import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

module.exports = {
    input: 'src/index.js',
    output: {
        file: 'bundle.js',
        format: 'cjs'
    },
    plugins: [
        babel({
            babelrc: true,
            exclude: 'node_modules/**',
            // presets: [
            //     '@babel/preset-react',
            //
            //     // [
            //     //     'es2015',
            //     //     {
            //     //         modules: false
            //     //     }
            //     // ]
            // ],
            // plugins: [
            //     'external-helpers'
            // ]
        }),
        uglify
    ]
    // acornInjectPlugins: [
    //     jsx()
    // ]
};
