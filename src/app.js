import  express  from "express";
import  cors  from "cors";
import estudianteRoutes from "./routes/estudiantes.routes.js";

const app = express();
app.use(cors({ origin: '*'}));
app.use(express.json());

app.use('/api', estudianteRoutes);


app.use((req, res, next)=>{
    console.log("Ruta no encontrada");
    res.status(404).json({ message: 'Ruta no encontrada'})
})

export default app;