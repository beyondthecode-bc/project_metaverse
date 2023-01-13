'use client';

import { motion } from 'framer-motion';
import Image from 'next/image'
import styles from '../styles';
import { slideIn, staggerContainer, fadeIn } from '../utils/motion';
import { useMediaQuery } from 'react-responsive'
import { GiMining } from "react-icons/gi";
import { Link } from 'react-scroll'
import ReactPlayer from 'react-player'

const Hero = ({ scrollToRef }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-5 sm:pr-16 pr-5`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"

        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto  flex flex-col justify-center items-center`}
      >
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="  w-full md:-mt-[20px] -mt-[12px] w-full "
        >
          <div className='flex flex-col sm:flex-row justify-between place-items-center sm:place-items-start gap-12 mb-20'>
            <div className='flex flex-col gap-4 max-w-[650px]'>
              <span className='text-white text-[20px] sm:text-[40px] flex flex-row'>
                <Image
                  src='/bnb.png'
                  alt="BNB - HERO"
                  className='mr-4 moving-text'
                  width={isMobile ? 34 : 65}
                  height={isMobile ? 15 : 30}
                />
                <span>BNB Mining Contract</span>
              </span>
              <span className='text-gray-400 text-[18px] sm:text-[25px] mt-7 '>
                We have crafted an unique mining contract that will allow you to earn BNB while you sleep.  <span className="font-extrabold text-white">No charts, no trading, no stress.</span>
              </span>
              <span className='text-gray-500 text-[18px] sm:text-[25px] mt-7 flex justify-center items-center sm:justify-start sm:items-start'>
                <Link to="buyMiners" smooth={true}>
                  <button
                    type="button" className="flex rock-button items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px] mt-7">
                    <GiMining size={30} />
                    <span className="text-[14px] sm:text-[19px] text-white font-bungee p-1 mt-1">
                      Buy Miners
                    </span>
                  </button>
                </Link>
              </span>
            </div>
            <div>
              <ReactPlayer
                className='react-player fixed-bottom ml-15'
                url='videos/trailer.mp4'
                width='100%'
                height='100%'

                loop
                controls={true} />
              {/* <Image
                src="/cover.png"
                alt="BEANMINE - HERO"
                className=" object-cover rounded-[40px]  z-10 relative"
                width={isMobile ? 500 : 550}
                height={isMobile ? 50 : 90}
                sizes="(max-width: 768px) 100vw,
              (max-width: 1400px) 50vw,
              100vw"
              /> */}
            </div>
          </div>
        </motion.div>
        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px] "
        />
      </motion.div>
    </section>)
};

export default Hero;
