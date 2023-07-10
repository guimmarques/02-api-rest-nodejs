import { app } from './app'
import { env } from './env'

app
  .listen({
    port: env.PORT,
    host: 'RENDER' in process.env ? '0.0.0.0' : '127.0.0.1',
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
