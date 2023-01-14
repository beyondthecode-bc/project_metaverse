'use client';

import * as React from "react";
import { motion } from 'framer-motion';

import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Feedback = () => {

  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    < section className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className="flex-[0.5] lg:max-w-[500px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
        >
          <div className="feedback-gradient" />
          <h4 className="font-bold sm:text-[24px] text-[18px] sm:leading-[40.32px] leading-[36.32px] text-white pb-4 flex flex-row">
            <Image
              src='/bnb.png'
              alt="BNB - HERO"
              className='mr-4 moving-text'
              width={isMobile ? 34 : 40}
              height={isMobile ? 15 : 30}
            />
            BUY SOME BNB WITH FIAT
          </h4>
          <div >
            <iframe
              width={isMobile ? 300 : 400}
              height="690"
              frameBorder="0"
              allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *"
              src="https://flooz.trade/embed/trade?swapDisabled=true&swapLockToToken=false&onRampDisabled=false&onRampAsDefault=false&onRampDefaultAmount=200&network=bsc&lightMode=false&primaryColor=%23d2cd32&roundedCorners=0&padding=20&refId=gWfwZe"
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className="relative flex-1 flex justify-center items-center"
        >
          <img
            src="/planet-09.png"
            alt="planet-09"
            className="moving-image w-full lg:h-[690px] h-auto min-h-[210px] object-cover rounded-[40px]"
          />
        </motion.div>
      </motion.div>
    </section>)
};

export default Feedback;
