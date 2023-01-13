import '../styles/globals.css';

import { WagmiConfig, createClient, configureChains, defaultChains } from "wagmi";
import { ConnectKitProvider } from "connectkit";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { infuraProvider } from 'wagmi/providers/infura'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import { bsc, bscTestnet } from 'wagmi/chains'
import { publicProvider } from "wagmi/providers/public";
import Meta from '../components/Meta';

const infuraId = process.env.REACT_APP_INFURA_PROJECT_ID;
const alchemyURL = process.env.ALCHEMY_URL;

const { provider, webSocketProvider } = configureChains(
  [bsc, bscTestnet],
  [
    publicProvider(),
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://bsc-dataseed.binance.org/`,
      }),
    }),
    infuraProvider({ apiKey: infuraId }),
  ],
  { pollingInterval: 10_000 },
);


const client = createClient(
  {
    appName: "BEANMINE.app",
    autoConnect: true,
    connectors: [
      new MetaMaskConnector({
        chains: [bsc, bscTestnet],
      }),
      new WalletConnectConnector({
        chains: [bsc, bscTestnet],
        options: {
          qrcode: true,
        },
      })
    ],
    provider,
    webSocketProvider,
  },
);

const MyApp = ({ Component, pageProps }) => {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="midnight">
        <Meta title="BEANMINE.app | Mine your BNB, TODAY!" />
        <Component {...pageProps} />
      </ConnectKitProvider>
    </WagmiConfig>
  );
};

export default MyApp;
