import fastify from "fastify"
import {fastifyCors } from "@fastify/cors"

const server = fastify({
    logger: true
});

server.register(fastifyCors,{
    origin:"*",
});

server.get('/', async (req, res) => {
    return "Hello World"
});


try {
    server.listen({ port: 5000 })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
