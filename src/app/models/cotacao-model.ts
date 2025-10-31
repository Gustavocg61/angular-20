import { Results } from "./cotacao-results";

export interface CotacaoModel {
    "results": Results[];
    "requestedAT": string;
    "took": string;
}
