const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 1212

app.use(cors())


const footballPlayers = {
    'mikel Obi':{
        'name': 'Mikel John Obi',
        'age': 35,
        'position': 'CM/CDM',
        'goals': 50,
        'club': 'chelsea',
        'Nationality': 'Nigerian'
    },
    'messi':{
        'name': 'Lionel Andrés Messi',
        'age': 34,
        'position': 'CF/RW/ST',
        'goals': 50,
        'club': 'PSG',
        'Nationality': 'Argentine'
    },
    'ronaldo':{
        'name': 'Cristiano Ronaldo dos Santos Aveiro GOIH ComM',
        'age': 37,
        'position': 'ST/LW',
        'goals': 50,
        'club': 'Manchester Uniter',
        'Nationality': 'Portugal'
    },
    'unknown':{
        'name': 'unknown',
        'age': 'unknown',
        'position': 0,
        'goals': 0,
        'club': 'unknown',
        'Nationality': 'unknown'
        
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{ //name is a query parameter
    const player = request.params.name.toLowerCase() //request the parameters and attach to variable teaName
    if( footballPlayers[player] ){
        response.json(footballPlayers[player])
    }else{
        response.json(footballPlayers['unknown'])
    }
    // response.json(tea)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}, better go catch it!`)
})