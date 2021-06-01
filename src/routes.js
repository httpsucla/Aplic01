const express = require("express");
const routes = express.Router();
const DB = require("./time");

//Listar todos os times
routes.get("/time", (req, res) => {
	res.status(200).json(DB.time);
});

//Buscar de time por nome
routes.get("/time/:nome", (req, res) => {
    
    if (isNaN(req.params.nome)) {
        res.sendStatus(400);
    } else {
        const nome = req.params.nome;
        const time = DB.time.find((t) => t.nome = nome);

        if (time != undefined) {
            res.status(200).json(time);
        } else {
            res.status(404).json({ msg: "Time nao existe."});
        }
    }
});

//Adicionar novo time
routes.post("/newTime", (req, res) => {
	const {
	    nome,
		cidade,
		estado,
		serie,
		titulo,
		folhaPag,
	} = req.body;
	if (nome && cidade && estado && titulo & folhaPag != undefined) {
		const id = DB.time.length + 1;
		DB.characters.push({
			id,
			nome,
			cidade,
			estado,
			serie,
			titulo,
			folhaPag,
		});
		res.status(200).json({ msg: "Time adicionado." });
	} else {
		res.status(400).json({ msg: "Dados obrigatórios incompletos." });
	}
});

//Deletar time
routes.delete("/time/:id", (req, res) => {
	if (isNaN(req.params.id)) {
		res.sendStatus(400);
	} else {
		const id = parseInt(req.params.id);
		const index = DB.time.findIndex((c) => c.id == id);
		if (index == -1) {
			res.status(404).json({ msg: "Time não existe." });
		} else {
			DB.time.splice(index, 1);
			res.status(200).json({ msg: "Time excluído." });
		}
	}
});

//Editar time pelo id
routes.put("/time/:id", (req, res) => {
	if (isNaN(req.params.id)) {
		res.sendStatus(400);
	} else {
		const id = parseInt(req.params.id);
		const time = DB.time.find((c) => c.id == id);
		if (time != undefined) {
			const {
				nome,
				cidade,
				estado,
				serie,
				titulo, //titulo: { nivel, qtde },
                folhaPag,
			} = req.body;

			if (nome != undefined) time.nome = nome;
			if (cidade != undefined) time.cidade = cidade;
			if (estado != undefined) time.estado = estado;
            if(serie != undefined) time.serie = Serie;
			if (titulo.nivel != undefined) time.titulo.nivel = titulo.nivel;
			if (titulo.qtde != undefined) time.titulo.qtde = titulo.qtde;
			if (folhaPag != undefined) time.folhaPag = titulo.folhaPag;
			res.status(200).json(time);
		} else {
			res.status(404).json({ msg: "Time não existe." });
		}
	}
});

module.exports = routes;