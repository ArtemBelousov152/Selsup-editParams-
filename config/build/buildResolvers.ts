import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import webpack from 'webpack';

export const buildResolvers = (): webpack.ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [
      new TsconfigPathsPlugin({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
    ],
  };
};
