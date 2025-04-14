import { Request, Response, NextFunction } from "express";

export default class Cors {
  public default(req: Request, res: Response, next: NextFunction): void {
    res.set("access-control-allow-origin", "*");
    res.set("access-control-allow-headers", "*");
    res.set("access-control-allow-methods", "*");
    next();
  }
}
