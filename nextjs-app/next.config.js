module.exports = {
    webpack(config) {
        // Existing rule for SVG files
        config.module.rules.push({
            test: /\.svg$/,
            type: 'asset/resource'
        });

        // New rule for PNG, JPEG, and GIF files
     // Comment out the rule for PNG, JPEG, and GIF files
// config.module.rules.push({
//   test: /\.(png|jpe?g|gif)$/,
//   use: ['file-loader']
// });
      
      


        return config;
    },
};
