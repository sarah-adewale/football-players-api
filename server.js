const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 1212

app.use(cors())


const footballPlayers = {
    'Michel Obi':{
        'name': 'Mikel John Obi',
        'age': 35,
        'position': 'CM/CDM',
        'club': 'chelsea',
        'Nationality': 'zimbabwean'
    },
    'Messi':{
        'name': 'Lionel Andrés Messi',
        'age': 34,
        'position': 'CF/RW/ST',
        'club': 'PSG',
        'Nationality': 'Argentine'
    },
    'Ronaldo':{
        'name': 'Cristiano Ronaldo dos Santos Aveiro GOIH ComM',
        'age': 37,
        'position': 'ST/LW',
        'club': 'Manchester Uniter'
    },
    'unknown':{
        'name': 'unknown',
        'age': 'unknown',
        'position': 0,
        'club': 'unknown'
        
    }
}




app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const player = request.params.name.toLowerCase()
    if( footballPlayers[player] ){
        response.json(footballPlayers[player]) 
    }else{
        response.json(footballPlayers['unknown'])
    }
    console.log(json(footballPlayers))
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}, better go catch it!`)
})