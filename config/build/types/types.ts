export interface buildPaths {
    entry: string
    html: string
    output: string
    src: string
}

export type buildMode = 'production' | 'development';

export interface buildOpions {
    port: number
    paths: buildPaths
    mode: buildMode
    analyzer?: boolean
}