
'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { GiMining, GiTwoCoins, GiMiner } from 'react-icons/gi'
const MiningCard = () => {
    return (
        <motion.div
            variants={planetVariants('left')}
            className="flex-[1] lg:max-w-[700px] flex justify-start flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] mr-5 relative"
        >
            <div className='bg-neutral-900/30 rounded-lg p-10'>
                <div className="relative flex items-center">
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className="flex-shrink mx-4 sm:text-[30px] text-[24px] text-gray-400">Statistics</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                </div>
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
                <div className="flex justify-between flex-wrap gap-5 mt-4">

                    <h4 className="sm:text-[28px] text-[22px] sm:leading-[40.32px] leading-[36.32px] text-white flex flex-row">
                        <GiTwoCoins className="mr-2" />
                        My Rewards
                    </h4>
                    <p className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white flex flex-row">
                        0 BNB
                    </p>
                </div>
                <div className="relative flex py-5 items-center mt-4">
                    <span className='sm:text-[22px] text-[16px] sm:leading-[40.32px] leading-[36.32px] text-white mr-4 font-bold'>MIN: 0.01 BNB</span>
                    <div className="flex-grow border-t border-gray-400"></div>
                    <span className='sm:text-[22px] text-[16px] sm:leading-[40.32px] leading-[36.32px] text-white ml-4 font-bold'>MAX: 200 BNB</span>

                </div>

                <div className="invest-input-holder flex items-center justify-between flex-wrap">
                    <div>
                        <input type="number" className="invest-input" step="0.01" min="0.01" placeholder='0.01' required />
                    </div>
                    {/*                  <div className='flex items-center justify-end flex-wrap'>
                        <span>
                            <svg width="25" height="25" className=" icon-minus icon-control" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.3">
                                    <circle cx="12.5" cy="12.5" r="9.375" stroke="#E7FAFF" stroke-width="2"></circle>
                                    <path d="M15.625 12.5L9.375 12.5" stroke="#E7FAFF" stroke-width="2" stroke-linecap="square"></path>
                                </g>
                            </svg>
                        </span>
                        <span>
                            <svg width="25" height="25" className=" icon-plus icon-control" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.5" cy="12.5" r="9.375" stroke="#E7FAFF" stroke-width="2">
                                </circle>
                                <path d="M12.5 15.625L12.5 9.375" stroke="#E7FAFF" stroke-width="2" stroke-linecap="square"></path>
                                <path d="M15.625 12.5L9.375 12.5" stroke="#E7FAFF" stroke-width="2" stroke-linecap="square"></path>
                            </svg>
                        </span>

                    </div> */}
                </div>
                <span className='sm:text-[18px] text-[14px] sm:leading-[40.32px] leading-[36.32px] font-bold text-white mt-4'>ENTER BNB AMOUNT & CLICK HIRE BELOW</span>
                <div>
                    <button
                        type="button" className="flex items-center icon-control place-content-center	 h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] w-full">
                        <GiMiner color='white' size={26} />
                        <span className="font-normal text-[19px] text-white font-bold	">
                            Buy Miners
                        </span>
                    </button>
                </div>
                <div className='flex flex-col sm:flex-row mt-4 gap-4'>
                    <button
                        type="button" className="flex items-center icon-control place-content-center	 h-fit py-4 px-6 bg-[#A9D0F5] rounded-[32px] gap-[12px] w-full">
                        <GiMiner color='#333333' size={26} />
                        <span className="text-[19px] font-bold text-[#A9D0F5]" style={{ color: '#333333' }}>
                            Compound Miners
                        </span>
                    </button>
                    <button
                        type="button" className="flex items-center icon-control place-content-center	 h-fit py-4 px-6 bg-[#A9D0F5] rounded-[32px] gap-[12px] w-full">
                        <GiMiner color='white' size={26} style={{ color: '#333333' }} />
                        <span className=" text-[19px]  font-bold	" style={{ color: '#333333' }}>
                            Collect Rewards
                        </span>
                    </button>
                </div>

            </div>
        </motion.div>
    )
};

export default MiningCard;
