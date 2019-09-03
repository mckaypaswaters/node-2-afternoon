const express = require('express')
const app = express()
const SERVER_PORT = 3001
const messages_ctrl = require('./controllers/messages_controller')

// MIDDLEWARE
app.use(express.json())

// ENDPOINTS
app.get('/api/messages', messages_ctrl.read)
app.post('/api/messages', messages_ctrl.create)
app.put('/api/messages/:id', messages_ctrl.update)
app.delete('/api/messages/:id', messages_ctrl.delete)

app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`))