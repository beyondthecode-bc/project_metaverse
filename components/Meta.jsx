import React from "react";
import Head from "next/head";

const Meta = ({ title, keyword, desc }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.png" />
                <meta name="description" content={desc} />
                <meta name="keyword" content={keyword} />
            </Head>
        </div>
    );
};

Meta.defaultProps = {
    title: "MININGFARM | Earn passive income",
    keyword:
        "bitcoin, blockchain, crypto, crypto collectibles, crypto makretplace, cryptocurrency, digital items, market, nft, nft marketplace, nft next js, NFT react, non-fungible tokens, virtual asset, wallet",
    desc: "Start earning passive income by buying Miners to dig for BNB on BNB Smart Chain.",
};

export default Meta;
