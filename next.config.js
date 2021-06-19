module.exports = {
    future: {
        webpack5: true
    },
    images: {
        domains: ["links.papareact.com", "image.tmdb.org"]
    },
    webpack: function (config, options) {
        console.log(options.webpack.version);
        config.experiments = {};
        return config;
    }
}
