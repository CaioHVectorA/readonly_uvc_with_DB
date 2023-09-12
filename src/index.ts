import express from 'express'
import cors from 'cors'
import Middleware from './config/middleware'
const app = express()
Middleware(app)
app.listen(3000, () => console.log('running! 🚀🚀🚀'))