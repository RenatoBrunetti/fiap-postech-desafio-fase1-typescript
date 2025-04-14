import { Router, Request, Response } from "express";

export default class Health {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
    this.health();
  }

  private health() {
    this.router.get("/health", (req: Request, res: Response) => {
      console.log("/health");
      res.status(200).json({
        status: "success",
        message: "/health",
      });
    });
  }
}
