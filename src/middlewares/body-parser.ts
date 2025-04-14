import { NextHandleFunction } from "connect";
import { json } from "express";

export default class BodyParser {
  public default: NextHandleFunction;

  constructor() {
    this.default = json();
  }
}
