import { Router, Request, Response } from "express";

export default class Book {
  private router: Router;

  constructor(router: Router) {
    this.router = router;
    this.get();
    this.post();
  }

  private get() {
    // Get all books
    this.router.get("/books", (req: Request, res: Response) => {
      res.status(200).json({
        status: "success",
        message: "/books",
      });
    });

    // Get a book by id
    this.router.get("/book/:id", (req: Request, res: Response) => {
      res.status(200).json({
        status: "success",
        message: "/book/:id",
      });
    });

    // Get filtered books
  }

  private post() {
    // Add a new book
    this.router.post("/book", (req: Request, res: Response) => {});
  }
}
