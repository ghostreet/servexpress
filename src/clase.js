const express = require("express")
const app = express()

const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

let tasks =[
    {id: 1, title: "completar deafios" },
    {id: 2, title: "revisar los desafios" },
    {id: 3, title: "completar los hands on lab" }
]

app.get("/tasks", (req, res)=>{
    res.json(tasks)
})

app.get("/tasks/:id", (req, res)=>{
    const taskId = parseInt(req.params.id)
    const task = tasks.find((task)=> task.id === taskId)

    if(task){
        res.json(tasks)
    }else{
        res.status(400).json({message: "tarea no encontrada"})
    }
    res.json(tasks)
})

app.post("/tasks", (req, res)=>{
    const { title } = req.body
    const newTask = {id: tasks.length + 1, title: title || "nueva tarea"}
    tasks.push(newTask)
    res.status(201).json(newTask)
})

app.put("/tasks/:id", (req, res)=>{
    const taskId = parseInt(req.params.id)
    const task = task.find((task)=> task.id === taskId)
    if(task){
        const {title} = req.body
        task.title= title
        res.json(task)
    }else{
        resizeTo.status(404).json({message: "tarea no econtrada"})
    }
    res.status(201).json(newTask)
})

app.delete("/tasks/:id", (req, res)=>{
    const taskId = parseInt(re.params.id)
    tasks = tasks.filter((task)=> task.id !== taskId)
    res.json({
        message: "tarea elimnada correctamente"
    })
})




app.listen(PORT, ()=> {
    console.log('Servidor escuchando en el puerto ${PORT}')
})