window.WM = window.WM || {};
WM.ConsentSiteConfig = {
    cookiedomain: '.hbomax.com',
    domId: 'd6b779e9-793a-43c6-924b-792ec2ed0add', // This is a fallback, the main one is set in the pages
    src: 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js',
    vendor: {
        gtm: {
            src: '',
            ucStates: ["required"]
        },
        optimizely: {
            src: '',
            ucStates: ["vendor","perf-general"]
        },
        braze: {
            src: '',
            ucStates: ["vendor","ad-cookies"]
        }
    }
}