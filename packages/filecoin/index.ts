/*!
 * @ganache/filecoin
 *
 * @author Tim Coulter
 * @license MIT
 */

import type { Flavor } from "@ganache/flavor";
import { Connector } from "./src/connector";
import { ready } from "./src/ready";
import { FilecoinOptionsConfig } from "@ganache/filecoin-options";
import { CliOptionsConfig, ServerOptionsConfig } from "./src/defaults";

export {
  FilecoinProvider as Provider,
  StorageDealStatus
} from "./src/connector";

type FilecoinFlavor = Flavor<
  "filecoin",
  Connector,
  {
    provider: FilecoinOptionsConfig;
    server: ServerOptionsConfig;
    cli: CliOptionsConfig;
  }
>;
const FilecoinFlavor: FilecoinFlavor = {
  flavor: "filecoin",
  connect: (options: any, executor: any) => new Connector(options, executor),
  options: {
    provider: FilecoinOptionsConfig,
    server: ServerOptionsConfig,
    cli: CliOptionsConfig
  },
  ready
} as any;

export default FilecoinFlavor;
