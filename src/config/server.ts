import App from "./app";
import Environment from "./environment";

export default class Server {
  public app: App;
  public environment: Environment;

  constructor() {
    this.environment = new Environment();
    this.app = new App(this.environment.port);
    this.run();
  }

  private run() {
    this.app.listen();
  }
}
