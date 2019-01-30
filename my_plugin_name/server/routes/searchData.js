export default function (server) {
  
  server.route({
    path: '/api/my_plugin_name/searchData',
    method: 'GET',
    handler(req, reply) {
      reply({ result: "Hello World" });
    }
  });

}
