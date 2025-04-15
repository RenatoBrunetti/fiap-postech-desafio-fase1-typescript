import express, { Application, Router } from "express";
import { join } from "path";

import System from "./system";
import Book from "./book";

export default class Routes {
  public app: Application;
  private router: Router;

  constructor(app: Application) {
    this.router = Router();
    this.app = app;
    this.app.use(express.static(join(process.cwd(), "public")));
    this.app.use("/api", this.router);
    this.routes();
  }

  private routes() {
    new System(this.router);
    new Book(this.router);
  }
}
