
'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { GiMining, GiTwoCoins } from 'react-icons/gi'
const MiningCard = () => {
    return (
        <motion.div
            variants={planetVariants('left')}
            className="flex-[1] lg:max-w-[800px] flex justify-start flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] mr-5 relative"
        >
            <div className="feedback-gradient" />
            <div className="flex items-center justify-between flex-wrap gap-5">

                <h4 className="sm:text-[28px] text-[22px] sm:leading-[40.32px] leading-[36.32px] text-white flex flex-row">
                    <img
                        src="/wallet.svg"
                        alt="wallet"
                        className="w-[36px] h-[36px] mr-2"
                    />
                    Miners
                </h4>
                <p className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white flex flex-row">
                    0
                </p>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-5 mt-4">

                <h4 className="sm:text-[28px] text-[22px] sm:leading-[40.32px] leading-[36.32px] text-white flex flex-row">
                    <GiMining className="mr-2" />
                    Mining Speed
                </h4>
                <p className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white flex flex-row">
                    0 BNB/24h
                </p>
            </div>
            <div className="flex items-center justify-between flex-wrap gap-5 mt-4">

                <h4 className="sm:text-[28px] text-[22px] sm:leading-[40.32px] leading-[36.32px] text-white flex flex-row">
                    <GiTwoCoins className="mr-2" />
                    My Rewards
                </h4>
                <p className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white flex flex-row">
                    0 BNB
                </p>
            </div>
            <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
                “With the development of today's technology, metaverse is very
                useful for today's work, or can be called web 3.0. by using
                metaverse you can use it as anything”
            </p>
        </motion.div>
    )
};

export default MiningCard;
