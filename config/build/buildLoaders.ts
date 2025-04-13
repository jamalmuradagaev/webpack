import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { buildOpions } from "./types/types";


export function buildLoaders(options: buildOpions): ModuleOptions['rules'] {
    const isProd = options.mode === 'production';

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            {
                loader: "css-loader",
                options: {
                    modules: {
                        localIdentName: isProd ? '[hash:base64:8]' : '[path][name]__[local]',
                    }
                },
            },
            "sass-loader",
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        scssLoader,
        tsLoader
    ]
}