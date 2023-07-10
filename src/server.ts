import { app } from './app'
import { env } from './env'

app
  .listen({
    port: env.PORT,
    host: env.NODE_ENV === 'production' ? '0.0.0.0' : '127.0.0.1',
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
