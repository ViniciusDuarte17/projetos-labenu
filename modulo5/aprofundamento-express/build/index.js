"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_1 = require("./users");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//  imprime uma mensagem!
app.get("/ping", (req, res) => {
    res.send("Pong! 🏓");
});
// 4- Retorna todas tarefas Concluída
app.get("/tarefas/concluida", (req, res) => {
    try {
        const tarefas = users_1.afazeres;
        const tarefasConcluida = tarefas
            .filter((item) => {
            return item.completed === true;
        })
            .map((concluida) => {
            return concluida;
        });
        res.status(200).send(tarefasConcluida);
    }
    catch (error) {
        console.log("Erro");
    }
});
// 5- Cria tarefa
app.post("/tarefas/criar", (req, res) => {
    try {
        const tarefas = users_1.afazeres;
        const { userId, id, title, completed } = req.body;
        const newTarefas = {
            userId,
            id,
            title,
            completed,
        };
        tarefas.push(newTarefas);
        res.status(201).send("tarefa adicionada");
    }
    catch (error) {
        console.log("Erro");
    }
});
// 6- Edita tarefa espera um id
app.put("/tarefa/editar/:id", (req, res) => {
    try {
        const id = Number(req.params.id);
        users_1.afazeres
            .filter((item) => item.id === id)
            .map((tarefa) => {
            if (tarefa.completed === true) {
                tarefa.completed = false;
            }
            else {
                tarefa.completed = true;
            }
        });
        res.send("Tarefa alterada!");
    }
    catch (Error) {
        res.end(Error.message);
    }
});
// 7- Deleta afazer pelo o seu id
app.delete("/afazer/:id/deletar", (req, res) => {
    try {
        const idAfazeres = Number(req.params.id);
        const index = users_1.afazeres.findIndex((i) => i.id === idAfazeres);
        if (index > -1) {
            users_1.afazeres.splice(index, 1);
        }
        res.status(200).send("Tarefa deletada");
    }
    catch (Error) {
        res.end(Error.message);
    }
});
// 8 Retorna todos afazeres de um afazer espicifico
app.get("/afazer/:id/users", (req, res) => {
    try {
        const idAfazer = Number(req.params.id);
        const tarefas = users_1.afazeres;
        const tarefasConcluida = tarefas
            .filter((item) => {
            return item.id === idAfazer;
        })
            .map((fazerId) => {
            return fazerId;
        });
        if (!idAfazer)
            throw new Error("Id não foi passado, ou está de forma incorreta!");
        if (tarefasConcluida.length === 0)
            throw new Error("Tarefa não encontrada");
        res.status(200).send(tarefasConcluida);
    }
    catch (Error) {
        res.end(Error.message);
    }
});
app.listen(3003, () => {
    console.log("Servidor online");
});
