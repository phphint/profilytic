const dotenv = require('dotenv');
const path = require('path');

// Load environment variables based on the current environment
const envPath = path.resolve(__dirname, `.env.${process.env.NODE_ENV}`);
dotenv.config({ path: envPath });

module.exports = {
    webpack(config) {
        // Existing rule for SVG files
        config.module.rules.push({
            test: /\.svg$/,
            type: 'asset/resource'
        });

        // Commented out rule for PNG, JPEG, and GIF files
        // config.module.rules.push({
        //   test: /\.(png|jpe?g|gif)$/,
        //   use: ['file-loader']
        // });

        return config;
    },
    env: {
        API_URL: process.env.API_URL,
        MESSAGE_BROKER_URI: process.env.MESSAGE_BROKER_URI,
        NEW_RELIC_LICENSE_KEY: process.env.NEW_RELIC_LICENSE_KEY,
        NEW_RELIC_APP_NAME: process.env.NEW_RELIC_APP_NAME,
        SENTRY_DSN: process.env.SENTRY_DSN,
        LETSENCRYPT_HOST: process.env.LETSENCRYPT_HOST,
        LETSENCRYPT_EMAIL: process.env.LETSENCRYPT_EMAIL,
        VIRTUAL_HOST: process.env.VIRTUAL_HOST,
        VIRTUAL_PORT: process.env.VIRTUAL_PORT,
    },
};
