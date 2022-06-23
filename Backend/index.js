import db from "./config/db.js";
import express from "express";
import cors from "cors";
import cliente from "./models/cliente.js";
import pedido from "./models/pedido.js";
import produto from "./models/produto.js";
import consumo from "./models/consumo.js";
import clienteRouter from "./routes/clienteRouter.js"
import produtoRouter from "./routes/produtoRouter.js"


const app = express();

try {
    db.authenticate().then(()=>{
        cliente.sync()
        pedido.sync()
        produto.sync()
        consumo.sync()
        console.log('Banco de Dados Conectado.');
    });
    
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());

app.use(express.json())

app.use('/cliente', clienteRouter)
app.use('/produto', produtoRouter)





app.listen(5000, ()=> console.log(`Servidor rodando na 5000`))