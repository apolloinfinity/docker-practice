import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import helmet from 'helmet';

class App {
    public app: express.Application;
    public env: string;
    public port: string | number;

    constructor() {
        this.app = express();
        this.env = NODE_ENV || 'development'; // create .env file

        // 
    }

    // Logger function

    public getServer(){
        return this.app;
    }

    // Database connection

    private initializeMiddlewares() {
        this.app.use(morgan(LOG_FORMAT, {stream})); // froms a config file
        this.app.use(cors({origin: origin})); // might need credentials?
        this.app.use(helmet());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
    }

    // initialize routes

    // initialize error handling

}

export default App;