import exampleRoute from './server/routes/example';
import searchRoute from './server/routes/searchData';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],
    name: 'my_plugin_name',
    uiExports: {
      app: {
        title: 'My Plugin Name',
        description: 'test plugin',
        main: 'plugins/my_plugin_name/app',
      },
      hacks: [
        'plugins/my_plugin_name/hack'
      ],
      styleSheetPaths: require('path').resolve(__dirname, 'public/app.scss'),
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    init(server, options) { // eslint-disable-line no-unused-vars
      // Add server routes and initialize the plugin here
      exampleRoute(server);
	  searchRoute(server);
    }
  });
}
