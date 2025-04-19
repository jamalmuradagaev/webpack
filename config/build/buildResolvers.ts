import { Configuration } from "webpack";
import { BuildOpions } from "./types/types";


export function buildResolvers(options: BuildOpions): Configuration['resolve'] {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': options.paths.src
        }
    }
}