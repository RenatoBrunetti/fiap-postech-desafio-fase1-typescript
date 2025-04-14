import { Request, Response, NextFunction, Application } from "express";

export default class ContentType {
  public default(req: Request, res: Response, next: NextFunction): void {
    res.type("json");
    next();
  }
}
