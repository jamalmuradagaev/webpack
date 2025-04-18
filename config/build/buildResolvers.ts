import { Configuration } from "webpack";
import { buildOpions } from "./types/types";


export function buildResolvers(options: buildOpions): Configuration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': options.paths.src
        }
    }
}