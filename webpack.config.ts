import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import {
  BuildEnv,
  BuildMode,
  BuildPath,
} from './config/build/types/config.types';

export default (env: BuildEnv) => {
  const paths: BuildPath = {
    build: path.resolve(__dirname, 'dist'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  const mode = env.mode || BuildMode.development;
  const PORT = env.port || 3000;
  const isDev = mode === BuildMode.development;

  return buildWebpackConfig({ mode, paths, isDev, port: PORT });
};
