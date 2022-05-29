const crypto = require('crypto');

var options = { year: 'numeric', month: 'numeric', day: 'numeric' };

module.exports =  cities = [
    {
    id: crypto.randomBytes(10).toString('hex'),
    name: 'Cuiaba',
    temperatures: [
      {
        date: new Date(2022,01,01).toLocaleDateString('pt-BR', options),
        min: 27,
        max: 42,
        now: 30
      },
      {
        date: new Date(2022,01,02).toLocaleDateString('pt-BR', options),
        min: 27,
        max: 42,
        now: 30
      },
      {
        date: new Date(2022,01,03).toLocaleDateString('pt-BR', options),
        min: 27,
        max: 42,
        now: 30
      },
      {
        date: new Date(2022,04,28).toLocaleDateString('pt-BR', options),
        min: 30,
        max: 45,
        now: 33
      },  
    ]
    },
    {
      id: crypto.randomBytes(10).toString('hex'),
      name: 'Goiania',
      temperatures: [
        {
          date: new Date(2022,01,01).toLocaleDateString('pt-BR', options),
          min: 27,
          max: 42,
          now: 30
        },
        {
          date: new Date(2022,01,02).toLocaleDateString('pt-BR', options),
          min: 27,
          max: 42,
          now: 30
        },
        {
          date: new Date(2022,01,03).toLocaleDateString('pt-BR', options),
          min: 27,
          max: 42,
          now: 30
        },
        {
          date: new Date(2022,04,28).toLocaleDateString('pt-BR', options),
          min: 30,
          max: 45,
          now: 33
        },

      ]   
      },
      {
        id: crypto.randomBytes(10).toString('hex'),
        name: 'Belo Horizonte',
        temperatures: [
          {
            date: new Date(2022,01,01).toLocaleDateString('pt-BR', options),
            min: 27,
            max: 42,
            now: 30
          },
          {
            date: new Date(2022,01,02).toLocaleDateString('pt-BR', options),
            min: 27,
            max: 42,
            now: 30
          },
          {
            date: new Date(2022,01,03).toLocaleDateString('pt-BR', options),
            min: 27,
            max: 42,
            now: 30
          },
          {
            date: new Date(2022,04,28).toLocaleDateString('pt-BR', options),
            min: 30,
            max: 45,
            now: 33
          },
      
        ]
        }
    ];



  