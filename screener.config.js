var Steps = require('screener-runner/src/steps');

module.exports = {
    // full repository name for your project:
    projectRepo: 'billmeyer/myoptum-visual-e2e-example',

    // this example assumes Environment Variables listed below exist on your system:
    apiKey: process.env.SCREENER_API_KEY,

    resolution: '1024x768',
    baseBranch: 'master',
    // newSessionForEachState: true,
    browsers: [
        {
            browserName: 'chrome',
            version: '78.0'
        },
        // {
        //     browserName: 'firefox'
        // }
        // {
        //   browserName: 'safari',
        //   version: '11.1'
        // }
    ],

    sauce: {
        username: process.env.SAUCE_USERNAME,
        accessKey: process.env.SAUCE_ACCESS_KEY,
        maxConcurrent: 10, // optional available concurrency you have from Sauce Labs
        // extendedDebugging: true, // optional
        // tunnelIdentifier: 'qa-vdc-1', // optional
        launchSauceConnect: false // have screener-runner manage my sauce connect tunnels for me
    },

    // array of UI states to capture visual snapshots of.
    // each state consists of a url and a name.
    states: [
        {
            url: 'http://myoptum.com',
            name: 'MyOptum Home Page',
            steps: new Steps()
                .snapshot('Default UI State')
                .end()
        }
    ]
};