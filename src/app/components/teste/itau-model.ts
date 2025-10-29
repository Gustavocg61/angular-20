import { Results } from "./itau-results";

export interface ItauModel{
    "results": Results[];
    "requestedAT": string;
    "took": string;
}
