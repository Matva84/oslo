const { environment } = require('@rails/webpacker');

environment.config.merge({
  resolve: {
    alias: {
      '@': 'app/javascript'
    }
  }
});

module.exports = environment;
