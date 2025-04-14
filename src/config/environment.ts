export default class Environment {
  public port: string;

  constructor() {
    this.port = process.env.NODE_PORT || "4000";
  }
}
