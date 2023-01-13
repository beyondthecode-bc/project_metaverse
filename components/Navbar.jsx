'use client';

import { ConnectKitButton } from "connectkit";
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { ethers } from 'ethers'
import { useMediaQuery } from 'react-responsive'
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  const [account, setAccount] = useState(null)


  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative mb-14`}
    >
      <div className="absolute w-[50%] inset-0" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        {/* <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          MININGFARM
        </h2> */}
        <img
          src="/logo.png"
          alt="wallet"
          className="w-[200px] sm:w-[400px] object-contain"

        />

        {isMobile
          ?

          <ConnectKitButton.Custom >
            {({ isConnected, isConnecting, show, truncatedAddress, ensName }) => {
              return (
                <button
                  type="button" className="flex rock-button items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] mt-2"
                  onClick={show}
                >
                  <img
                    src="/wallet.svg"
                    alt="wallet"
                    className="w-[14px] h-[14px] object-contain"
                  />
                  <span className="text-[12px] text-white font-bungee mt-0.5">
                    {isConnecting ? "Connecting..." : isConnected ? ensName ?? truncatedAddress : "Connect Wallet"}
                  </span>
                </button>
              );
            }}
          </ConnectKitButton.Custom>
          :
          <ConnectKitButton.Custom >
            {({ isConnected, isConnecting, show, truncatedAddress, ensName }) => {
              return (
                <button
                  type="button" className="flex rock-button items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] mt-4"
                  onClick={show}
                >
                  <img
                    src="/wallet.svg"
                    alt="wallet"
                    className="w-[20px] h-[30px] object-contain"
                  />
                  <span className="text-[19px] text-white font-bungee mt-1">
                    {isConnecting ? "Connecting..." : isConnected ? ensName ?? truncatedAddress : "Connect Wallet"}
                  </span>
                </button>
              );
            }}
          </ConnectKitButton.Custom>}
      </div>
    </motion.nav>)
};

export default Navbar;
