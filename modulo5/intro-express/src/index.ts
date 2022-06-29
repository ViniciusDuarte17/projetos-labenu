import express from 'express';
import cors from 'cors';
import {Request, Response} from 'express'
import {dataUsers} from './data'
import {usuarios} from './data'

const app = express()
app.use(express.json())
app.use(cors())


app.get('/', (req: Request, res: Response) => {
    try{
        res.status(200).send("Hellor from express")
    }catch(error){
        res.status(400).end("Error ao encontrar url")
    }
}) // endpoint para dizer um hellor from express

app.get('/usuarios', (req: Request, res: Response) => {

    const listaDeUsuario = dataUsers
    const todosUsuario = listaDeUsuario.map( (usuarios) => {
        return usuarios
    })
    const usuarios = todosUsuario.flat(1)
    
    res.status(200).send(usuarios)

}) // endpoint para pegar todos os usuário

app.get('/posts', (req: Request, res: Response) => {
    try{
        const listaDePost = usuarios
        const todosPost = listaDePost.map((post) => {
            return post
        })
        const resulPost = todosPost.flat(1)
        res.status(200).send(resulPost)
    } catch(error){
        res.status(400).end("Error ao encontrar posts")
    }
})

app.get('/pessoa', (req: Request, res: Response) => {
    try{
        const listaDePost = dataUsers
        const pessoaId:number = Number(req.query.id)
        let pessoaEs: {} [] = []
        for(let pessoa of  listaDePost){
            if(pessoa.id === pessoaId){
                pessoaEs.push(pessoa.name)
            }
        }
        res.status(200).send(pessoaEs)
    }
    catch(error){
        res.status(400).end("Error ao encontrar pessoa")
    }
})


app.listen(3003, () => {
    console.log("Servidor online")
})