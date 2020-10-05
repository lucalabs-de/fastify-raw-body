import { FastifyPluginCallback } from "fastify"

declare module "fastify-raw-body" {
  const fp: FastifyPluginCallback
  export default fp
}
