import { FastifyInstance } from "fastify";
import example from "./example";
import product from "./product";
import category from "./category";

export default function (server: FastifyInstance) {
    server.register(example, { prefix: "/examples" });
    server.register(product, { prefix: "/products" });
    server.register(category, { prefix: "/categories" });
}