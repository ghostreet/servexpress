const express = require("express")
const app = express()
const PORT = 8080


app.use(express.json())
app.use(express.urlencoded({extended: true}))


let articulos =[
    {id: 1, title: "Camara de video" },
    {id: 2, title: "Baterias" },
    {id: 3, title: "Tripodes" },
    {id: 4, title: "Parasoles" },
    {id: 5, title: "Flashes" },
    {id: 6, title: "Disparador remoto" },
    {id: 7, title: "Objetivo macro" },
    {id: 8, title: "Teleobjetivo" },
    {id: 9, title: "Protector de cuerpo de camara" },
    {id: 10, title: "Difusor" }
]

app.get("/articulos", (req, res)=>{
    const limit = req.query.limit;
        if (limit && !isNaN(limit)) {
        const limite = parseInt(limit, 10);
        const numArticulos = articulos.slice(0,limite);
        res.json(numArticulos)
    }else {
        res.json(articulos);
    } 
          
    })
   
app.get("/articulos/:id", (req, res) => {
    const artId = parseInt(req.params.id)
    const articulo = articulos.find((articulo)=> articulo.id === artId)
    if (articulo) {
        res.json(articulo)
    }else {
        res.status(404).json({message: "articulo no encontrado"})
    }

})

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

function obtArticulos(limite) {

    
}