'use client';

import { motion } from 'framer-motion';
import Image from 'next/image'
import styles from '../styles';
import { slideIn, staggerContainer } from '../utils/motion';
import { useMediaQuery } from 'react-responsive'
import { GiMining } from "react-icons/gi";
import { Link } from 'react-scroll'

const Hero = ({ scrollToRef }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })


  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-5 sm:pr-16 pr-5`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"

        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto`}
      >

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px] w-full"
        >
          <div className='flex flex-col sm:flex-row justify-between place-items-center sm:place-items-start'>
            <div className='flex flex-col gap-4 max-w-[650px]'>
              <span className='text-white text-[26px] sm:text-[40px] '>
                BNB Mining Contract
              </span>
              <span className='text-gray-500 text-[18px] sm:text-[25px] '>
                We have crafted an unique mining contract that will allow you to earn BNB while you sleep. No charts, no trading, no stress.
              </span>
              <span className='text-gray-500 text-[18px] sm:text-[25px] '>
                <Link to="buyMiners" smooth={true}>
                  <button
                    type="button" className="flex rock-button items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] mt-7">
                    <GiMining size={30} />
                    <span className="text-[14px] sm:text-[19px] text-white font-bungee p-1 mt-1">
                      Buy Miners
                    </span>
                  </button>  </Link>
              </span>
            </div>
            <div>
              <Image
                src="/cover.png"
                alt="BEANMINE - HERO"
                className=" object-cover rounded-[40px]  z-10 relative"
                width={isMobile ? 500 : 550}
                height={isMobile ? 50 : 90}
                sizes="(max-width: 768px) 100vw,
              (max-width: 1400px) 50vw,
              100vw"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>)
};

export default Hero;
