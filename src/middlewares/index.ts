import { Application } from "express";

import BodyParser from "./body-parser";
import ContentType from "./content-type";
import Cors from "./cors";

export default class Middlewares {
  public app: Application;
  private bodyParser: BodyParser;
  private contentType: ContentType;
  private cors: Cors;

  constructor(app: Application) {
    this.app = app;
    this.bodyParser = new BodyParser();
    this.contentType = new ContentType();
    this.cors = new Cors();
    this.middlewares();
  }

  private middlewares() {
    this.app.use(this.bodyParser.default);
    this.app.use(this.contentType.default);
    this.app.use(this.cors.default);
  }
}
