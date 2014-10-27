/* exported Options */
window.Options = {
    server: {
        "trusted" : true,
        "websocket_ip" : "live.stellar.org",
        "websocket_port" : 9001,
        "websocket_ssl" : true
    },

    mixpanel: {
        "token": '',
        // Don't track events by default
        "track": false
    },

    INFLATION_DEST: 'gM3Rn2RjrwuFptFqdF2oFFakd9PPDsQCGi',

    APP_ID: '1411202179109031',
    DOMAIN_NAME: 'rvl.is',
    DEFAULT_FEDERATION_DOMAIN: 'rvl.is',
    API_SERVER: 'https://api.stellar.org',
    WALLET_SERVER: 'https://reveal-wallet.herokuapp.com',

    PERSISTENT_SESSION : false,
    DEFAULT_IDLE_LOGOUT_TIMEOUT : 30 * 60 * 1000, //15 minutes
    COOKIE_SECURE: true,

    REPORT_ERRORS : false,
    SENTRY_DSN : "https://5c08986e949742d2bb29e1ffac78e50a@app.getsentry.com/26645",

    // Number of transactions each page has in balance tab notifications
    TRANSACTIONS_PER_PAGE: 25,

    LOGOUT_WITH_REFRESH: true,
    MAX_WALLET_ATTEMPTS: 3,

    MAX_CONTACT_AGE: 24 * 60 * 60 * 1000, // One day in milliseconds.

    CAPTCHA_KEY: '6Ldj4PkSAAAAAL-kG23h3yRo0qSnO1BD3lr5zMEK',

    ANGULARTICS_WRITE_KEY: "U8cLXTFMPm",

    DEFAULT_AJAX_TIMEOUT: 10000, // 10 seconds

    SIFT_SCIENCE_ACCOUNT: '825bae1b99'
};
