import {Express, Request, Response} from "express";
import quotes from "./lib/quotes.json";

export class Quotes {

    private app: Express;

    constructor(app: Express) {
        this.app = app;

        this.app.get("/api", (req: Request, res: Response): void => {
            res.send(quotes);
        })
    }

    public start(port: number): void {
        this.app.listen(port, () => console.log(`Quotes listening on port ${port}!`));
    }

}