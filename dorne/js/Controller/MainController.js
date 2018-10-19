app.controller('controllerProducts', ['$scope', function($scope) {
    scope.cities = [
        {
        name: "Modena"  ,
        puntuacio:,
        llocs: [
            {
                namePlace: "Osteria Francescana",
                type: 'R'
            },
            {
                namePlace: "L'Erba de Re",
                type: 'R'
            },
            {
                namePlace: "Strada Facendo",
                type: 'R'
            },
            {
                namePlace: "Torre della Ghirlandina",
                type: 'M'
            },
            {
                namePlace: "Modena Cathedral",
                type: 'M'
            },
            {
                namePlace: "Museo Casa Enzo Ferrari",
                type: 'M'
            },
            {
                namePlace: "Galleria Estense",
                type: 'M'
            },
        ]


    },
        {
            name: "Napols",
            puntuacio:,
            llocs: [
                {
                    namePlace: "National Archeologic Museum",
                    type: 'M'
                },
                {
                    namePlace: "Bourbon Tunnel",
                    type: 'M'
                },
                {
                    namePlace: "Santi Filippo e Giacomo",
                    type: 'M'
                },
                {
                    namePlace: "Museo Galileo Napols",
                    type: 'M'
                },
                {
                    namePlace: "Mount Vesuvius",
                    type: 'N'
                },
                {
                    namePlace: "Royal Palace of Naples",
                    type: 'M'
                },
                {
                    namePlace: "Castell dell' Ovo",
                    type: 'M'
                },
                {
                    namePlace: "Piazza del Plebiscito",
                    type: 'M'
                },
                {
                    namePlace: "Capella Sansevero",
                    type: 'M'
                },
                {
                    namePlace: "Naples Cathedral",
                    type: 'M'
                },
                {
                    namePlace: "San Francesco di Paola",
                    type: 'M'
                },
                {
                    namePlace: "Pompei",
                    type: 'N'
                },
                {
                    namePlace: "II Comandante",
                    type: 'R'
                },
                {
                    namePlace: "Palazzo Petrucci",
                    type: 'R'
                },
                {
                    namePlace: "Vertias",
                    type: 'R'
                }
            ]
        },

        {
            name: "Pisa",
            puntuacio:,
            llocs: [
                {
                    namePlace: "Leaning Tower of Pisa",
                    type: 'R'
                },
                {
                    namePlace: "Piazza dei Miracoli",
                    type: 'R'
                },
                {
                    namePlace: "Pisa Cathedral",
                    type: 'R'
                },
                {
                    namePlace: "Camposanto Monumentale",
                    type: 'R'
                },
                {
                    namePlace: "Pisa Baptistery",
                    type: 'R'
                }
            ]
        },

        {
            name: "Cinque Terre",
            puntuacio:,
            llocs: [
                {
                    namePlace: "Monterosso al Mare",
                    type: 'N'
                },
                {
                    namePlace: "Vernazza",
                    type: 'N'
                },
                {
                    namePlace: "Corniglia",
                    type: 'N'
                },
                {
                    namePlace: "Manarola",
                    type: 'N'
                },
                {
                    namePlace: " Riomaggiore",
                    type: 'N'
                }
            ]
        },


        {
            name: "Lago Como",
            puntuacio:,
            llocs: [
                {
                    namePlace: "Villa Carlotta",
                    type: 'M'
                },
                {
                    namePlace: "Villa del Balbianello",
                    type: 'M'
                },
                {
                    namePlace: "Isola Comacina",
                    type: 'N'
                },
                {
                    namePlace: "Manarola",
                    type: 'M'
                },
                {
                    namePlace: "Castello di Vezio",
                    type: 'M'
                }
            ]
        },
        {
            name: "Sicilia",
            puntuacio:,
            llocs: [
                {
                    namePlace: "Taormina",
                    type: 'N'
                },
                {
                    namePlace: "Taormina",
                    type: 'N'
                },
                {
                    namePlace: "Palermo",
                    type: 'N'
                },
                {
                    namePlace: "Syracuse",
                    type: 'N'
                },
                {
                    namePlace: "Catania",
                    type: 'N'
                }
            ]
        },

        {
            name: "Siena",
            puntuacio:,
            llocs: [
                {
                    namePlace: "Piazza del Campo",
                    type: 'N'
                },
                {
                    namePlace: "Siena Cathedral",
                    type: 'M'
                },
                {
                    namePlace: "Palazzo Pubblico",
                    type: 'M'
                },
                {
                    namePlace: "Torre del Mangia ",
                    type: 'N'
                }
            ]
        },

        {
            name: "Alberobello",
            puntuacio:,
            llocs: [
                {
                    namePlace: "Trullo Sovrano",
                    type: 'N'
                },
                {
                    namePlace: "District Monti",
                    type: 'M'
                },
                {
                    namePlace: "District Aia Piccola",
                    type: 'M'
                },
                {
                    namePlace: "Parrocchia Sant'Antonio",
                    type: 'N'
                }
            ]
        },


        {
            name: "Capri",
            puntuacio:,
            llocs: [
                {
                    namePlace: "Blue Grotto",
                    type: 'N'
                },
                {
                    namePlace: "Monte Solaro",
                    type: 'N'
                },
                {
                    namePlace: "Villa San Michel",
                    type: 'N'
                },
                {
                    namePlace: "Villa Jovis",
                    type: 'M'
                }
            ]
        },

        {
            name: "Costa Amalfitana",
            puntuacio:,
            llocs: [
                {
                    namePlace: "Villa Rufolo",
                    type: 'M'
                },
                {
                    namePlace: "Grotta dello Smeraldo",
                    type: 'N'
                },
                {
                    namePlace: "Amalfi Cathedral",
                    type: 'M'
                },
                {
                    namePlace: "Sirenus",
                    type: 'N'
                }
            ]
        },

        {
            name: "Cerdeña",
            puntuacio:,
            llocs: [
                {
                    namePlace: "Cagliari",
                    type: 'N'
                },
                {
                    namePlace: "Alghero",
                    type: 'N'
                },
                {
                    namePlace: "Olbia",
                    type: 'M'
                },
                {
                    namePlace: "Porto Cervo",
                    type: 'N'
                },
                {
                    namePlace: "San Gimignano",
                    type: 'N'
                }
            ]
        },
        {
            name: "Turin",
            puntuacio:,
            llocs: [
                {
                    namePlace: "Mole Antonelliana",
                    type: 'M'
                },
                {
                    namePlace: "Royal Palace of Turin",
                    type: 'N'
                },
                {
                    namePlace: "Palazzo Madama e Casaforte",
                    type: 'M'
                },
                {
                    namePlace: "Turin Cathedral",
                    type: 'M'
                },
                {
                    namePlace: "Basilica de Superga",
                    type: 'M'
                },
                {
                    namePlace: "Parco de Valentino",
                    type: 'M'
                },
                {
                    namePlace: "Palazzo de Venaria",
                    type: 'M'
                },
                {
                    namePlace: "Palazzo Carignano",
                    type: 'M'
                },
                {
                    namePlace: "Allianz Arena",
                    type: 'F'
                },
                {
                    namePlace: "Piazza Castello",
                    type: 'M'
                },
                {
                    namePlace: "Museo Egizio",
                    type: 'M'
                },
                {
                    namePlace: "Mirabilandia",
                    type: 'F'
                }
            ]
        },
        {
            name: "Genova",
            puntuacio:,
            llocs: [
                {
                    namePlace: "Aquarium of Genova",
                    type: 'F'
                },
                {
                    namePlace: "Via Giuseppe Garibaldi",
                    type: 'M'
                },
                {
                    namePlace: "Piazza de Ferrari",
                    type: 'M'
                },
                {
                    namePlace: "Le Strade Nuove dei Rolli",
                    type: 'M'
                },
                {
                    namePlace: "Palazzo Rosso",
                    type: 'M'
                },
                {
                    namePlace: "Palazzo reale",
                    type: 'M'
                },
                {
                    namePlace: "Genoa Cathedral",
                    type: 'M'
                }
            ]
        },
        {
            name: "Bologna",
            puntuacio:,
            llocs: [
                {
                    namePlace: "Piazza Maggiore",
                    type: 'M'
                },
                {
                    namePlace: "Sant Petronio Basilica",
                    type: 'M'
                },
                {
                    namePlace: "Fountain of Neptune",
                    type: 'M'
                },
                {
                    namePlace: "Santo Stefano",
                    type: 'M'
                },
                {
                    namePlace: "Palazzo d'Accursio",
                    type: 'M'
                },
                {
                    namePlace: "I Portici",
                    type: 'R'
                }
            ]
        },

        {
            name: "Milan",
            puntuacio: ,
            llocs: [
                {
                    namePlace: "Lake Garda",
                    type: 'M'
                },
                {
                    namePlace: "Arena di Verona",
                    type: 'M'
                },
                {
                    namePlace: "Piazza delle Erbe",
                    type: 'M'
                },
                {
                    namePlace: "Parco Natura Viva",
                    type: 'F'
                },
                {
                    namePlace: "Sforza Castle",
                    type: 'M'
                },
                {
                    namePlace:"Pinacoteca di Brera",
                    type: 'M'
                },
                {
                    namePlace: "Galleria Vittorio Emanuele II",
                    type: 'M'
                },
                {
                    namePlace: "Teatro alla Scala",
                    type: 'M'
                },
                {
                    namePlace: "Santa Maria delle Grazie",
                    type: 'M'
                },
                {
                    namePlace: "Pinacoteca di Brera",
                    type: 'M'
                },
                {
                    namePlace: "San Siro Stadium",
                    type: 'F'
                },
                {
                    namePlace: "Porta Sempione",
                    type: 'M'
                },
                {
                    namePlace: "Piazza Mercanti",
                    type: 'M'
                },
                {
                    namePlace: "Enrico Bartolini al Mudec",
                    type: 'R'
                },
                {
                    namePlace: "II Lueogo di Aimo e Nadia",
                    type: 'R'
                },
                {
                    namePlace: "Seta by Antonio Guida",
                    type: 'R'
                },
                {
                    namePlace: "Essenza",
                    type: 'R'
                },
                {
                    namePlace: "Vun",
                    type: 'R'
                },
                {
                    namePlace: "Safaripark",
                    type: 'F'
                },
                {
                    namePlace: "Constraste",
                    type: 'R'
                }
            ]
        },
        {
            name: "Rome",
            puntuacio:,
            llocs: [
                {
                    namePlace:"Galleria Borghese",
                    type: 'M'
                },
                {
                    namePlace: "Gardalan",
                    type: 'F'
                },
                {
                    namePlace: "Castelvecchio",
                    type: 'M'
                },
                {
                    namePlace:"Castel Sant'Angelo",
                    type: 'M'
                },
                {
                    namePlace: "Capitoline Museums",
                    type: 'M'
                },
                {
                    namePlace: "Palazzo Altemps",
                    type: 'M'
                },
                {
                    namePlace: "Welcome to Rome",
                    type: 'M'
                },
                {
                    namePlace: "National Roman Museum",
                    type: 'M'
                },
                {
                    namePlace: "Parque dei Mostri",
                    type: 'F'
                },
                {
                    namePlace: "Galleria Borghese",
                    type: 'M'
                },
                {
                    namePlace: "Castel Sant'Angelo",
                    type: 'M'
                },
                {
                    namePlace: "Capitoline Museums",
                    type: 'M'
                },
                {
                    namePlace: "Palazzo Altemps",
                    type: 'M'
                },
                {
                    namePlace: "National Roman Museum",
                    type: 'M'
                },
                {
                    namePlace: "La Pergola",
                    type: 'R'
                },
                {
                    namePlace: "La Terrazza",
                    type: 'R'
                },
                {
                    namePlace: "Tordomatto",
                    type: 'R'
                },
                {
                    namePlace: "II Pagliaccio",
                    type: 'R'
                }
            ]
        },

        {
            name: "Venice",
            puntuacio:,
            llocs: [
                {
                    namePlace: "Piazza San Marco",
                    type: 'M'
                },
                {
                    namePlace: "Sain Mark's Basilica",
                    type: 'M'
                },
                {
                    namePlace: "Doge's Palace",
                    type: 'M'
                },
                {
                    namePlace: "Burano",
                    type: 'N'
                },
                {
                    namePlace: "Grand Canal",
                    type: 'N'
                },
                {
                    namePlace: "Peggy Guggenheim Collection",
                    type: 'M'
                },
                {
                    namePlace: "Parque Paneveggio Pale di San Martino",
                    type: 'F'
                },
                {
                    namePlace: "Dopolavoro",
                    type: 'R'
                },
                {
                    namePlace: "Met",
                    type: 'R'
                },
                {
                    namePlace: "Oro Restaurant",
                    type: 'R'
                }
            ]
        },


        {
            name: "Florencia",
            puntuacio:,
            llocs: [
                {
                    namePlace: "Uffizi Gallery",
                    type: 'M'
                },
                {
                    namePlace: "Galleria dell'Accademia",
                    type: 'M'
                },
                {
                    namePlace: "Palazzo Pitti",
                    type: 'M'
                },
                {
                    namePlace: "Bargello",
                    type: 'M'
                },
                {
                    namePlace: "San Marco",
                    type: 'M'
                },
                {
                    namePlace: "Palazzo Vecchio",
                    type: 'M'
                },
                {
                    namePlace: "Museo dell'Opera deL Duomo",
                    type: 'M'
                },
                {
                    namePlace: "La Specola  Florence",
                    type: 'M'
                },
                {
                    namePlace: "Enoteca Pichiorri",
                    type: 'R'
                },
                {
                    namePlace: "Borgo San Jacopo",
                    type: 'R'
                },
                {
                    namePlace: "Ora D'Aria",
                    type: 'R'
                }
            ]
        }

    ]



}