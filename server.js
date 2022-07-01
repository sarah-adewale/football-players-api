const express = require('express')
const app = express()
const cors = require('cors')
const { json } = require('express')
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
        'image': 'https://i.ibb.co/yYZ3BNH/mo.png'
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
        'club': 'Manchester United',
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
        
    },
    'modric':{
        'name': 'Luka Modric',
        'age': 37,
        'position': 'ST/LW',
        'careerGoals': 815,
        'club': 'Manchester Uniter',
        'Nationality': 'Croatia',
        'image': 'https://i.ibb.co/Kx0F54p/ronaldo.png'
    },
    'kroos':{
        'name': 'Toni Kroos',
        'age': 37,
        'position': 'ST/LW',
        'careerGoals': 815,
        'club': 'Real Madrid',
        'Nationality': 'Portugal',
        'image': 'https://i.ibb.co/Kx0F54p/ronaldo.png'
    },
    'xavi':{
        'name': 'Xavi',
        'age': 37,
        'position': 'ST/LW',
        'careerGoals': 815,
        'club': 'FC Barcelona',
        'Nationality': 'Portugal',
        'image': 'https://i.ibb.co/Kx0F54p/ronaldo.png'
    },
    'paolo':{
        'name': 'Paolo Maldini',
        'age': 37,
        'position': 'ST/LW',
        'careerGoals': 815,
        'club': 'A.C. Milan',
        'Nationality': 'Portugal',
        'image': 'https://i.ibb.co/Kx0F54p/ronaldo.png'
    },
    'seedorf':{
        'name': 'Clarence Seedorf',
        'age': 37,
        'position': 'ST/LW',
        'careerGoals': 815,
        'club': 'Manchester Uniter',
        'Nationality': 'Netherland',
        'image': 'https://i.ibb.co/Kx0F54p/ronaldo.png'
    },
    'carvajal':{
        'name': 'Dani Carvajal',
        'age': 37,
        'position': 'ST/LW',
        'careerGoals': 815,
        'club': 'Manchester Uniter',
        'Nationality': 'Spain',
        'image': 'https://i.ibb.co/Kx0F54p/ronaldo.png'
    },
    'Gerard':{
        'name': 'Gerard Piqué Bernabeu',
        'age': 35,
        'position': 'ST/LW',
        'careerGoals': 815,
        'club': 'FC Barcelona',
        'Nationality': 'Portugal',
        'image': 'https://i.ibb.co/Kx0F54p/ronaldo.png'
    },
    'sergio':{
        'name': 'Sergio Ramos Garcia',
        'age': 36,
        'position': 'Defender',
        'careerGoals': 815,
        'club': 'Paris Saint-German F.C.',
        'Nationality': 'Camas Spain',
        'image': 'https://i.ibb.co/Kx0F54p/ronaldo.png'
    },
    'casemiro':{
        'name': 'Carlos Henrique José Francisco Venâncio Casimiro',
        'age': 30,
        'position': 'CF',
        'careerGoals': 815,
        'club': 'Real Madrid',
        'Nationality': 'Brazil',
        'image': 'https://i.ibb.co/Kx0F54p/ronaldo.png'
    },
    'iker casillas':{
        'name': 'Iker Casillas Fernández',
        'age': 41,
        'position': 'Goal Keeper',
        'careerGoals': 815,
        'club': 'Real Madrid',
        'Nationality': 'Móstoles, Spain',
        'image': 'https://i.ibb.co/Kx0F54p/ronaldo.png'
    },
    'andrés iniesta':{
        'name': 'Andrés Iniesta Luján',
        'age': 38,
        'position': 'Midfielder',
        'careerGoals': 815,
        'club': 'Vissel Kobe',
        'Nationality': 'Fuentealbilla, Spain',
        'image': 'https://i.ibb.co/Kx0F54p/ronaldo.png'
    },
    'mateo kovačić':{
        'name': 'Mateo Kovačić',
        'age': 28,
        'position': 'Midfielder',
        'careerGoals': 815,
        'club': 'Chelsea',
        'Nationality': 'Croatia',
        'image': 'https://i.ibb.co/Kx0F54p/ronaldo.png'
    },
    'gareth bale':{
        'name': 'Gareth Frank Bale MBE',
        'age': 32,
        'position': 'Midfielder',
        'careerGoals': 815,
        'club': 'Wales national team',
        'Nationality': 'Welsh',
        'image': 'https://i.ibb.co/Kx0F54p/ronaldo.png'
    },
    'marcelo':{
        'name': 'Marcelo Vieira da Silva Júnior',
        'age': 32,
        'position': 'Midfielder',
        'careerGoals': 815,
        'club': 'Real Madrid',
        'Nationality': 'Brazillian',
        'image': 'https://i.ibb.co/Kx0F54p/ronaldo.png'
    },
    'lucas vázquez':{
        'name': 'Lucas Vázquez Iglesias',
        'age': 31,
        'position': 'Midfielder',
        'careerGoals': 815,
        'club': 'Real Madrid',
        'Nationality': 'Spanish',
        'image': 'https://i.ibb.co/Kx0F54p/ronaldo.png'
    },
    'nacho':{
        'name': 'José Ignacio Fernández Iglesias',
        'age': 32,
        'position': 'Defender',
        'careerGoals': 815,
        'club': 'Real Madrid',
        'Nationality': 'Spain',
        'image': 'https://i.ibb.co/Kx0F54p/ronaldo.png'
    },
    'isco':{
        'name': 'Francisco Román Alarcón Suárez',
        'age': 30,
        'position': 'Midfielder',
        'careerGoals': 815,
        'club': 'Spain national football team',
        'Nationality': 'Benalmádena, Spain',
        'image': 'https://i.ibb.co/Kx0F54p/ronaldo.png'
    },
    'raphaël varane':{
        'name': 'Raphaël Xavier Varane',
        'age': 29,
        'position': 'Defender',
        'careerGoals': 815,
        'club': 'Manchester United',
        'Nationality': 'France',
        'image': 'https://i.ibb.co/Kx0F54p/ronaldo.png'
    },
     'dani alves':{
        'name': 'Daniel Alves da Silva',
        'age': 39,
        'position': 'Defender/RB',
        'careerGoals': 815,
        'club': 'F.C. Barcelona',
        'Nationality': 'Brazil',
        'image': 'https://i.ibb.co/Kx0F54p/ronaldo.png'
    },
    'sergio busquets':{
        'name': 'Daniel Alves da Silva',
        'age': 39,
        'position': 'Defender/RB',
        'careerGoals': 815,
        'club': 'F.C. Barcelona',
        'Nationality': 'Brazil',
        'image': 'https://i.ibb.co/Kx0F54p/ronaldo.png'
    },
    'sergio busquets':{
        'name': 'Daniel Alves da Silva',
        'age': 39,
        'position': 'Defender/RB',
        'careerGoals': 815,
        'club': 'F.C. Barcelona',
        'Nationality': 'Brazil',
        'image': 'https://i.ibb.co/Kx0F54p/ronaldo.png'
    }

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json(footballPlayers)
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