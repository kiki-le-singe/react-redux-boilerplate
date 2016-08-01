import Router from 'koa-router'

import tools from './tools'

export default (app) => {
  const routerAPI = new Router({
    prefix: '/api'
  })

  tools(app, routerAPI)

  app
    .use(routerAPI.routes())
    .use(routerAPI.allowedMethods())
}
