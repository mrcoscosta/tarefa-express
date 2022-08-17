const express = require('express')
const app = express()



const port = process.env.PORT || 5000

const router = require('./expressrouter/rotas')
// ler o body
app.use(
    express.urlencoded({
        extended: true

    })
)

// arquivos estaticos
app.use(express.static('public'))

// rotas ou edepointes
app.use('/users', router)


app.listen(port, () => {
    console.log(`Rodando na porta 5000`)
})