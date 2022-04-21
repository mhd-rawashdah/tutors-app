import express from "express";
import config from "../config.js"
import api from "./api/index.js";
import logger from "morgan"
import { ErrorsHandlerMiddleware } from "./middleware/index.js";


class App {

  constructor(api) {
    this.app = express();
    this.port = config.port || 5000;
    this.env = config.name === "production" ? true : false;

    this.initializeMiddlewares();
    this.initializeApi();
    this.initializeErrorHandling();
  }

	listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }

  initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
		
		if (this.env) {
			this.app.use(logger('combined'))
		} else {
			this.app.use(logger('dev'));
		}
  }

  initializeApi() {
		this.app.use("/api/v1/", api);
	}

  initializeErrorHandling() {
		this.app.use(ErrorsHandlerMiddleware.notFound);
		this.app.use(ErrorsHandlerMiddleware.errorHandle);
	}
}


export default App;
