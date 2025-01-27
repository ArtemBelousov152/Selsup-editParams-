export enum BuildMode {
  production = 'production',
  development = 'development',
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildPath {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPath;
  isDev: boolean;
  port: number;
}
