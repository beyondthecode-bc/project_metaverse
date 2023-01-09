'use client';

import { motion } from 'framer-motion';
import { useConnectWallet } from '@web3-onboard/react'
import { ethers } from 'ethers'

import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {

  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  // create an ethers provider
  let ethersProvider

  if (wallet) {
    ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any')
  }

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          MININGFARM
        </h2>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[24px] h-[24px] object-contain"
            onClick={() => (wallet ? disconnect(wallet) : connect())}

          />
          <span className="font-normal text-[16px] text-white">
            {connecting ? 'Connecting' : wallet ? 'Disconnect' : 'Connect'}
          </span>
        </button>

      </div>
    </motion.nav>)
};

export default Navbar;
