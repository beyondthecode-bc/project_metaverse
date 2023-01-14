'use client';

import { motion } from 'framer-motion';
import React, { useEffect, useState } from "react";
import styles from '../styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';
import { planetVariants } from "../utils/motion";

const World = () => {

  const [copied, setCopied] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [copied]);

  return (
    <section className={`${styles.paddings} relative z-10`
    }>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >

        <TypingText title="| Referral Bonus" textStyles="text-center" />
        <TitleText
          title={(
            <>Invites your friends to earn and earn 12% of the BNB used to buy miners
            </>
          )}
          textStyles="text-center"
        />

        <motion.div
          variants={planetVariants("left")}
          className="flex-[1] w-full flex justify-start flex-col gradient-05 sm:p-5 p-4 rounded-lg border-[1px] border-[#6A6A6A] relative mt-5"
        >

          <div className="invest-input-holder flex items-center  justify-between flex-col sm:flex-row ">
            <div className='text-white text-[24px]'>
              YOUR LINK:
            </div>
            <div className='text-amber-400 text-[18px]'>
              HTTPS://BEANMACHINE.FINANCE?REF=0XC7C9E36...6B6850477572
            </div>
            <div className="flex place-items-end	 ml-7 p-2">
              <CopyToClipboard onCopy={() => setCopied(true)} text={'https://app.fifiprotocol.com/staking/ref='}>
                <button
                  type="button" className="flex orange-button items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
                >
                  <span className="text-[16px] text-white font-bungee pl-5 pr-5">
                    {copied ? (
                      <>
                        ✅ COPIED
                      </>
                    ) : (
                      <>
                        <img src="/images/copy-white.svg" width="20" alt="" />
                        <span className="w-16">COPY</span>
                      </>
                    )}
                  </span>
                </button>
              </CopyToClipboard>

            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 'tween', 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <img src="/map.png" alt="map" className="w-full h-full object-cover" />

          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="people-01.png" alt="people" className="w-full h-full" />
          </div>

          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="/people-02.png" alt="people" className="w-full h-full" />
          </div>

          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <img src="people-03.png" alt="people" className="w-full h-full" />
          </div>
        </motion.div>
      </motion.div>
    </section >)
};

export default World;
