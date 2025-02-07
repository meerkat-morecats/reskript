import {Configuration, RuleSetRule, RuleSetUseItem} from 'webpack';
import {BuildEntry} from './shared.js';

type NotOptinal<T> = Exclude<T, undefined>;

type Module = NotOptinal<Configuration['module']>;

type Resolve = NotOptinal<Configuration['resolve']>;

interface FinalizableModule extends Module {
    rules: NotOptinal<Module['rules']>;
}

interface FinalizableResolve extends Resolve {
    alias: Record<string, string | false | string[]>;
}

export interface FinalizableWebpackConfiguration extends Configuration {
    module: FinalizableModule;
    resolve: FinalizableResolve;
    output: NotOptinal<Configuration['output']>;
    plugins: NotOptinal<Configuration['plugins']>;
    optimization: NotOptinal<Configuration['optimization']>;
}


export type RuleFactory = (buildEntry: BuildEntry) => Promise<RuleSetRule>;

export type LoaderFactory = (buildEntry: BuildEntry) => Promise<RuleSetUseItem | null>;

export interface InternalRules {
    readonly script: RuleFactory;
    readonly less: RuleFactory;
    readonly css: RuleFactory;
    readonly image: RuleFactory;
    readonly svg: RuleFactory;
    readonly file: RuleFactory;
}

export type LoaderType =
    | 'babel'
    | 'style'
    | 'css'
    | 'cssModules'
    | 'postcss'
    | 'less'
    | 'lessSafe'
    | 'img'
    | 'worker'
    | 'styleResources'
    | 'classNames'
    | 'cssExtract'
    | 'svgo'
    | 'svgToComponent';

export interface BuildInternals {
    readonly rules: InternalRules;
    readonly loader: (name: LoaderType, buildEntry: BuildEntry) => Promise<RuleSetUseItem | null>;
    readonly loaders: (names: Array<LoaderType | false>, buildEntry: BuildEntry) => Promise<RuleSetUseItem[]>;
}

export type WebpackFinalize = (
    webpackConfig: FinalizableWebpackConfiguration,
    buildEntry: BuildEntry,
    internals: BuildInternals
) => FinalizableWebpackConfiguration | Promise<FinalizableWebpackConfiguration>;
