import {Express, Request, Response} from "express";
import quotes from "./lib/quotes.json";

export class Quotes {

    private app: Express;

    private headers:any = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type",
        "content-type": "application/json"
    };

    constructor(app: Express) {
        this.app = app;

        try {
            this.app.get("/api", (req: Request, res: Response): void => {
                let quote:string = quotes[Math.floor(Math.random() * quotes.length)];
                let resQuote:JSON = JSON.parse(`{"quote": "${quote}"}`);
                req.headers[this.headers]
                res.send(resQuote);
            })
        } catch (e) {
            console.log(e);
        }
    }

    public start(port: number): void {
        this.app.listen(port, () => console.log(`Quotes listening on port ${port}!`));
    }

}