import App from "./app";
import Environment from "./environment";

export default class Config {
  public environment: Environment;
  public app: App;

  constructor() {
    this.environment = new Environment();
    this.app = new App(this.environment.port);
  }
}
