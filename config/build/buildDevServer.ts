import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOpions } from "./types/types";

export function buildDevServer(options: BuildOpions): DevServerConfiguration {
    return {
        port: options.port ?? 3000,
        open: true,
        historyApiFallback: true
    }
}