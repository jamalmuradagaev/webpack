import webpack from 'webpack'
import { buildWebpack } from './config/build/buildWebpack';
import { buildMode, buildPaths } from './config/build/types/types';
import path from 'path';

interface EnvVariables {
  mode: buildMode;
  port: number;
}

export default (env: EnvVariables) => {
  const paths: buildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths
  });

  return config
}