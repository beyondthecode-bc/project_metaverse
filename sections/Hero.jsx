'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="absolute w-full h-[300px] hero-gradient  rounded-[40px] z-[0] -top-[10px]" />

        <img
          src="/cover.png"
          alt="hero_cover"
          className="w-full sm:h-[1000px] h-[650px] object-cover rounded-[40px]  z-10 relative"
        />

      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
