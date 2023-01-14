import React from "react";
import Head from "next/head";

const Meta = ({ title, keyword, desc }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="msapplication-TileColor" content="#ffc40d" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="description" content={desc} />
                <meta name="keyword" content={keyword} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

            </Head>
        </div>
    );
};

Meta.defaultProps = {
    keyword:
        "bitcoin, blockchain, crypto, crypto collectibles, crypto makretplace, cryptocurrency, digital items, market, nft, nft marketplace, nft next js, NFT react, non-fungible tokens, virtual asset, wallet,binance, bnb,bnb mine,mining bnb, crypto mine",
    desc: "Start earning passive income by buying Miners that reward you with BNB on BNB Smart Chain.",
};

export default Meta;
