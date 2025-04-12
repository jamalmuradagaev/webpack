import webpack from 'webpack'
import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildOpions } from './types/types';

export function buildWebpack(options: buildOpions): webpack.Configuration {
    const isDev = options.mode === 'development';

    return {
        mode: options.mode ?? 'development',
        entry: options.paths.entry,
        output: {
            path: options.paths.output,
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options)
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        devtool: isDev && 'inline-source-map',
        devServer: isDev && buildDevServer(options)
    }
}