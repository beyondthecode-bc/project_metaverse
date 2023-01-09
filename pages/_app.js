import Head from 'next/head';
import Meta from '../components/Meta';

import '../styles/globals.css';

import { initWeb3Onboard } from '../connector/web3-onboard'
import { Web3OnboardProvider } from '@web3-onboard/react'

const MyApp = ({ Component, pageProps }) => {


  return (
    <>
      <Web3OnboardProvider web3Onboard={initWeb3Onboard}>
        <Meta title="MININGFARM.club" />
        <Component {...pageProps} />
      </Web3OnboardProvider>
    </>
  )
};

export default MyApp;
