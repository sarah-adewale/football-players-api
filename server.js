const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 1212

app.use(cors())


const footballPlayers = {
    'karim benzema':{
        'name': 'Karim Mostafa Benzema',
        'age': 34,
        'position': 'CM/CDM',
        'careerGoals': 414,
        'club': 'real madrid',
        'Nationality': 'French',
        'image': 'https://i.ibb.co/VmCZrmn/karim-benzema.png'
    },
     'mo salah':{
        'name': 'Mohamed Salah',
        'age': 30,
        'position': 'Forward',
        'careerGoals': 156,
        'club': 'liverpool',
        'Nationality': 'Egypt',
        'image': 'https://i.ibb.co/jb9JMhR/1-C434-F5-A-B8-AB-4911-BFCE-AD9-FE2-F264-E4-2.png'
    },
    'messi':{
        'name': 'Lionel Andrés Messi',
        'age': 34,
        'position': 'CF/RW/ST',
        'careerGoals': 768,
        'club': 'PSG',
        'Nationality': 'Argentine',
        'image': 'https://i.ibb.co/27Rscb1/New-Project-1.png'
    },
    'ronaldo':{
        'name': 'Cristiano Ronaldo dos Santos Aveiro GOIH ComM',
        'age': 37,
        'position': 'ST/LW',
        'careerGoals': 815,
        'club': 'Manchester Uniter',
        'Nationality': 'Portugal',
        'image': 'https://i.ibb.co/Kx0F54p/ronaldo.png'
    },
    'unknown':{
        'name': 'unknown',
        'age': 'unknown',
        'position': 0,
        'careerGoals': 0,
        'club': 'unknown',
        'Nationality': 'unknown',
        'image': 'https://i.ibb.co/27Rscb1/New-Project-1.png'
        
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