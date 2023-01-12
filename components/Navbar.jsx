'use client';

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { useConnectWallet, useWallets } from '@web3-onboard/react'
import { ethers } from 'ethers'
import { useMediaQuery } from 'react-responsive'
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet()
  const connectedWallets = useWallets()

  useEffect(() => {
    if (!connectedWallets.length) return

    const connectedWalletsLabelArray = connectedWallets.map(
      ({ label }) => label
    )
    window.localStorage.setItem(
      'connectedWallets',
      JSON.stringify(connectedWalletsLabelArray)
    )

    // Check for Magic Wallet user session
    if (connectedWalletsLabelArray.includes('Magic Wallet')) {
      const [magicWalletProvider] = connectedWallets.filter(
        provider => provider.label === 'Magic Wallet'
      )
      async function setMagicUser() {
        try {
          const { email } = await magicWalletProvider.instance.user.getMetadata()
          const magicUserEmail = localStorage.getItem('magicUserEmail')
          if (!magicUserEmail || magicUserEmail !== email)
            localStorage.setItem('magicUserEmail', email)
        } catch (err) {
          console.log(err)
          throw err
        }
      }
      setMagicUser()
    }
  }, [connectedWallets, wallet])

  useEffect(() => {
    const previouslyConnectedWallets = JSON.parse(
      window.localStorage.getItem('connectedWallets')
    )

    if (previouslyConnectedWallets?.length) {
      async function setWalletFromLocalStorage() {
        const walletConnected = await connect({
          autoSelect: previouslyConnectedWallets[0]
        })
        console.log('connected wallets: ', walletConnected)
      }
      setWalletFromLocalStorage()
    }
  }, [connect])

  // create an ethers provider
  let ethersProvider

  if (wallet) {
    ethersProvider = new ethers.providers.Web3Provider(wallet.provider, 'any')
  }

  const [account, setAccount] = useState(null)


  useEffect(() => {
    if (wallet?.provider) {
      const { name, avatar } = wallet?.accounts[0].ens ?? {}
      setAccount({
        address: wallet.accounts[0].address,
        balance: wallet.accounts[0].balance,
        ens: { name, avatar: avatar?.url }
      })
    }
  }, [wallet])

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
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
          <button onClick={() => (wallet ? disconnect(wallet) : connect())}
            type="button" className="flex rock-button items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] mt-2">
            <img
              src="/wallet.svg"
              alt="wallet"
              className="w-[14px] h-[14px] object-contain"
            />
            <span className="text-[10px] sm:text-[14px] text-white font-bungee mt-1">
              {connecting ? 'Connecting' : wallet ? account.address.substring(0, 4) + '...' + account.address.substring(38, 42) : 'Connect'}
            </span>
          </button>
          :

          <button onClick={() => (wallet ? disconnect(wallet) : connect())}
            type="button" className="flex rock-button items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] mt-7">
            <img
              src="/wallet.svg"
              alt="wallet"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="text-[14px] sm:text-[19px] text-white font-bungee p-1 mt-1">
              {connecting ? 'Connecting' : wallet ? account.address.substring(0, 4) + '...' + account.address.substring(38, 42) : 'Connect'}
            </span>
          </button>
        }

      </div>
    </motion.nav>)
};

export default Navbar;
