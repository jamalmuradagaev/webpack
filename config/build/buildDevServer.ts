import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { buildOpions } from "./types/types";

export function buildDevServer(options: buildOpions): DevServerConfiguration {
    return {
        port: options.port ?? 3000,
        open: true,
        historyApiFallback: true
    }
}