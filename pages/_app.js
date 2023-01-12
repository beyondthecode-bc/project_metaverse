import '../styles/globals.css';

 import { Web3OnboardProvider } from '@web3-onboard/react';
import web3Onboard from '../connector/web3-onboard';
import Meta from '../components/Meta';

const MyApp = ({ Component, pageProps }) => {
 
  return (
    <Web3OnboardProvider web3Onboard={web3Onboard}>
      <Meta title="BEANMINE.app | Mine your BNB, TODAY!" />
      <Component {...pageProps} />
    </Web3OnboardProvider>
  );
};

export default MyApp;
