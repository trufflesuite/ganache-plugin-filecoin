import base from "./webpack.common.config";
import webpack from "webpack";
import path from "path";
import merge from "webpack-merge";

const config: webpack.Configuration = merge({}, base, {
  target: "node12.13",
  output: {
    path: path.resolve(__dirname, "../", "dist", "node")
  },
  externals: [
    "ipfs",
    "ipfs-http-client",
    "ipfs-http-server",
    "ipld-dag-cbor",
    "@trufflesuite/bigint-buffer",
    "leveldown",
    "secp256k1",
    "keccak"
  ],
  module: {
    rules: [
      {
        // webpack load native modules
        test: /\.node$/,
        loader: "node-loader"
      }
    ]
  }
});

export default config;
