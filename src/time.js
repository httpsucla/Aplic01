var DB = {
    time : [
        {
            id: 1,
            nome: "Santos",
            cidade: "Santos",
            estado: "Sao Paulo",
            serie:  "A",
            titulo : [
                {
                    nivel:"Estadual" ,
                    qtde: "3"
                },
                {
                    nivel:"Nacional" ,
                    qtde: "5"
                },
                {
                    nivel:"Internacional" ,
                    qtde: "1"
                },
            ],
            folhaPag: 100000,
        },
        {
            id: 2,
            nome: "Coritiba",
            cidade: "Curitiba",
            estado: "Parana",
            serie:  "B",
            titulo : [
                {
                    nivel:"Estadual" ,
                    qtde: "5"
                },
                {
                    nivel:"Nacional" ,
                    qtde: "2"
                },
                {
                    nivel:"Internacional" ,
                    qtde: "0"
                },
            ],
            folhaPag: 50000,
        },
        {
            id: 2,
            nome: "Fluminence",
            cidade: "Rio de Janeiro",
            estado: "Rio de Janeiro",
            serie:  "A",
            titulo : [
                {
                    nivel:"Estadual" ,
                    qtde: "4"
                },
                {
                    nivel:"Nacional" ,
                    qtde: "1"
                },
                {
                    nivel:"Internacional" ,
                    qtde: "1"
                },
            ],
            folhaPag: 75000,
        },
    ],
};

module.exports = DB;