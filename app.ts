import express, { Express, Request, Response } from 'express';
import * as bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { Expression } from 'typescript'
import AppRoutes from './routes/userRoutes';

class App{
    public app: Express
    public port: Number;
    appRoutes = new AppRoutes();

    constructor(port:Number){
        this.app = express();
        this.port = port;
        this.initializeMiddlewares();
        this.initializeRouters();
        // this.initializeRouters(this.appRoutes.routes)
        // console.log(typeof(this.appRoutes.routes),this.appRoutes.routes )
    }
    private initializeMiddlewares(){
        this.app.use(bodyParser.json());
    }
    private initializeRouters(){
    
            this.app.use('/',this.appRoutes.routes)

    }
    public listen(){
        this.app.listen(this.port,()=>{
            console.log(`App listening on the port: ${this.port}`);
        })
    }
    public connectToDatabase(){
        mongoose.connect(

            'mongodb+srv://zorain:mnbv098765@cluster0.qqg6t.mongodb.net/sample_airbnb?retryWrites=true&w=majority', {
            // useNewUrlParser: true,
            //    useFindAndModify: false,
            // useUnifiedTopology: true
          }
          );
          const db = mongoose.connection;
          db.on("error", console.error.bind(console, "connection error: "));
          db.once("open", function () {
            console.log("Connected successfully");
          });
    }
}

export default App;