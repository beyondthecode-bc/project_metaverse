'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import Image from 'next/image'


import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Us" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Are you looking to invest in a passive income opportunity that also allows you to be a part of the exciting World of Cryptocurrency? <span className="font-extrabold text-white">Look no further!</span><br /><br />
        Our new project allows investors to buy miners that mine and earn either  <span className="font-extrabold text-white">ETH</span> on the Ethereum Blockchain or
        <span className="font-extrabold text-white"> BNB</span> on the Binance Smart Chain.<br />
        Our state-of-the-art Web3 Technology makes it easy for investors to get started and start earning passive income.
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
