const util = require('util');
const exec = util.promisify(require('child_process').exec);
// const pkg = require('./package.json');

exec('npm version --json')
    .then(() => {
        // console.log('res', res.stdout);

        // console.log('pkg.name', pkg.name);

        // console.log('typeof res.stdout', typeof res.stdout);

        // console.log('JSON.parse(res.stdout)', JSON.parse(res.stdout)[pkg.name]);


        // const version = JSON.parse(res);
        // console.log('version', version);

        // if (version === pkg.version) {
        //     process.exit(0);
        // } else {
        //     process.exit(1);
        //     // exec(' npm version patch -m "Upgrade to %s for reasons"')
        //     //     .then(res => {
        //     //
        //     //     });
        // }
        // console.log('version', version);
    });
