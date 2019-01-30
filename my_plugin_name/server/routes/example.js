export default function (server) {

  server.route({
    path: '/api/my_plugin_name/example',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

}
	