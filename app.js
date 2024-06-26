import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from './routes/reservationRoute.js';


const app = express();
dotenv.config({ path: './config/config.env' });

app.use(
  cors(
    {
     origin: [process.env.FRONTEND_URL],
     methods: ["POST","GET","PUT","DELETE"],
     credentials: true

      }
  )
);



app.use(express.json());// json krta hn form data k lia
app.use(express.urlencoded({ extended: true })); // urlencoded krta hn file frontend recieve krnak lia

app.use('/api/v1/reservation', reservationRouter);
app.get("/", (req, res, next) => {
  return res.status(200).json({
    success: true,
    message: "HELLO WORLD"
  })
})


dbConnection();


app.use(errorMiddleware)

export default app;
