import express, { Application } from "express";

import Middlewares from "../middlewares";
import Routes from "../routes";

export default class App {
  public port: string;
  public app: Application;

  constructor(port: string) {
    this.port = port;
    this.app = express();
    this.setup();
  }

  private setup() {
    new Middlewares(this.app);
    new Routes(this.app);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`🚀 Server running at http://localhost:${this.port}`);
    });
  }
}
