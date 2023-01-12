 import gnosisModule from '@web3-onboard/gnosis'
import injectedModule from '@web3-onboard/injected-wallets'
import keepkeyModule from '@web3-onboard/keepkey'
import keystoneModule from '@web3-onboard/keystone'
import ledgerModule from '@web3-onboard/ledger'
import torusModule from '@web3-onboard/torus'
import trezorModule from '@web3-onboard/trezor'
import walletConnectModule from '@web3-onboard/walletconnect'
import coinbaseModule from '@web3-onboard/coinbase'
import dcentModule from '@web3-onboard/dcent'
import mewModule from '@web3-onboard/mew-wallet'
import sequenceModule from '@web3-onboard/sequence'
import tallyHoWalletModule from '@web3-onboard/tallyho'

import { init } from '@web3-onboard/react'

// Example key • Replace with your infura key
const walletLink = coinbaseModule()
const walletConnect = walletConnectModule()
const torus = torusModule()
const ledger = ledgerModule()
const keepkey = keepkeyModule()
const keystone = keystoneModule()
const gnosis = gnosisModule()
const dcent = dcentModule()
const mew = mewModule()
const talltHoWalletSdk = tallyHoWalletModule()


const sequence = sequenceModule({
    appName: 'MININGFARM'
})

const trezorOptions = {
    email: 'test@test.com',
    appUrl: 'https://www.blocknative.com'
}
const trezor = trezorModule(trezorOptions)

export default init({
    // An array of wallet modules that you would like to be presented to the user to select from when connecting a wallet.
    wallets: [
        injectedModule(),
        gnosis,
        walletLink,
        torus,
        ledger,
        trezor,
        walletConnect,
        keepkey,
        keystone,
        dcent,
        mew,
        talltHoWalletSdk,
        sequence
    ],
    // An array of Chains that your app supports
    chains: [
        {
            // hex encoded string, eg '0x1' for Ethereum Mainnet
            id: '0x1',
            // string indicating chain namespace. Defaults to 'evm' but will allow other chain namespaces in the future
            namespace: 'evm',
            // the native token symbol, eg ETH, BNB, MATIC
            token: 'ETH',
            // used for display, eg Ethereum Mainnet
            label: 'Ethereum Mainnet',
            // used for network requests
            rpcUrl: `https://mainnet.infura.io/v3/2b167082531c4cf5a07c605e8819aa90`
        },
        {
            id: '0x38',
            token: 'BNB',
            label: 'Binance Smart Chain',
            rpcUrl: `https://bsc-dataseed.binance.org/`
        },
        {
            id: '0x61',
            token: 'BNB',
            label: 'TestNet - Binance Smart Chain',
            rpcUrl: `https://data-seed-prebsc-1-s1.binance.org:8545/`
        }
    ],
    appMetadata: {
        // The name of your dApp
        name: 'MININGFARM',
        // SVG icon string, with height or width (whichever is larger) set to 100% or a valid image URL
        icon: '<svg></svg>',
        // Optional wide format logo (ie icon and text) to be displayed in the sidebar of connect modal. Defaults to icon if not provided
        logo: '<svg></svg>',
        // The description of your app
        description: 'Login',

        // url that points to more information about app
        explore: 'http://mydapp.io/about',
        // if your app only supports injected wallets and when no injected wallets detected, recommend the user to install some
        recommendedInjectedWallets: [
            {
                // display name
                name: 'MetaMask',
                // link to download wallet
                url: 'https://metamask.io'
            },
            { name: 'Coinbase', url: 'https://wallet.coinbase.com/' }
        ],
        // Optional - but allows for dapps to require users to agree to TOS and privacy policy before connecting a wallet
        agreement: {
            version: '1.0.0',
            termsUrl: 'https://www.blocknative.com/terms-conditions',
            privacyUrl: 'https://www.blocknative.com/privacy-policy'
        }
    },
    accountCenter: {
        desktop: {
            enabled: false
        },
        mobile: {
            enabled: false
        }
    }
})