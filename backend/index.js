const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.get('/api', (res, req) => {
    req.send({
        message: 'Hello from server!'
    })
})
app.listen(PORT, () => console.log(`Server was started on port ${PORT}`));