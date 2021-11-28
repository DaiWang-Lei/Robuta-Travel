const CracoLess = require('craco-less');
const CracoAntDesignPlugin = require('craco-antd');
const mockServer = require('./mock/server');
const CracoAlias = require("craco-alias");

module.exports = {
    babel: {
        plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
    },
    plugins: [
        {
            plugin: CracoLess,
            options: {
                lessLoaderOptions: {
                    lessOptions: { javascriptEnabled: true },
                },
                modifyLessRule: function() {
                    return {
                        test: /\.module\.less$/,
                        exclude: /node_modules/,
                        use: [
                            { loader: 'style-loader' },
                            {
                                loader: 'css-loader',
                                options: {
                                    modules: {
                                        localIdentName: '[local]_[hash:base64:6]',
                                    },
                                },
                            },
                            { loader: 'less-loader' },
                        ],
                    };
                },
            },
        },
        {
            plugin: CracoAntDesignPlugin,
            options: {
                babelPluginImportOptions: {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: true,
                }
            },
        },
        {
            plugin: CracoAlias,
            options: {
                source: "tsconfig",
                // baseUrl SHOULD be specified
                // plugin does not take it from tsconfig
                baseUrl: "./src",
                // tsConfigPath should point to the file where "baseUrl" and "paths" are specified
                tsConfigPath: "./tsconfig.extend.json"
            },
        }
    ],
    webpack: {},
    devServer: (devServerConfig, { proxy }) => {
        devServerConfig.proxy = {
            ...proxy,
            '/api': {
                // 访问 localhost:9000/api/* 相当于访问 localhost:9000/api/*
                target: 'localhost:9000',
                changeOrigin: true,
            },
        }
        devServerConfig.before = (app) => {
            mockServer(app);
        }
        return devServerConfig;
    },
}
