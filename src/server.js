"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = require("fastify");
var articles_1 = require("./router/articles");
var cors_1 = require("@fastify/cors");
require("dotenv/config");
var app = (0, fastify_1.default)();
app.register(cors_1.default);
app.register(articles_1.articlesRoutes, { prefix: 'articles' });
app.listen({ port: parseInt(process.env.PORT || 3000) }).then(function () { return console.log(`Server Running! ${process.env.PORT}`); });
