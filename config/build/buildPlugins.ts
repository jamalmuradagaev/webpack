import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, { Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { buildOpions } from "./types/types";

export function buildPlugins(options: buildOpions): Configuration['plugins'] {
    const isDev = options.mode === 'development';
    const isProd = options.mode === 'production';

    const plugins: Configuration['plugins'] = [new HtmlWebpackPlugin({ template: options.paths.html }),]

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin())
    }

    if (isProd) {
        plugins.push(new MiniCssExtractPlugin())
    }

    return plugins
}