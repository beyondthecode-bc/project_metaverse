'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';

import styles from '../styles';
import { footerVariants } from '../utils/motion';
import { Link } from 'react-scroll'
import { GiMining } from "react-icons/gi";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          EARN SOME BNB, TODAY!
        </h4>
        <span className='text-gray-500 text-[18px] sm:text-[25px] flex justify-center items-center sm:justify-start sm:items-start'>
          <Link to="buyMiners" smooth={true}>
            <button
              type="button" className="flex rock-button items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
              <GiMining size={30} />
              <span className="text-[14px] sm:text-[19px] text-white font-bungee p-1 mt-1">
                Buy Miners
              </span>
            </button>
          </Link>
        </span>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-white">
            BEANMINE.APP
          </h4>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2023 - All rights reserved.
          </p>

          <div className="flex gap-4">
            {socials.map((social) => (
              <img
                key={social.name}
                src={social.url}
                alt={social.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
