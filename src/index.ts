import fastify from 'fastify';
import fastifyStatic from 'fastify-static';
import path from 'path';

const PORT = parseInt(process.env.PORT || '3000', 10);

function main() {
  const server = fastify({
    logger: true,
  });

  server.register(fastifyStatic, {
    root: path.join(__dirname, '..', 'public'),
    prefix: '/',
  });

  server.listen(PORT, '0.0.0.0', (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.log(`Server listening at ${address} ...`);
  });
}

main();
