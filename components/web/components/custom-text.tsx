'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from "@/lib/motion";

export const TypingText = ({ title, textStyles }: { title: string, textStyles: string }) => (
  <motion.p
    variants={textContainer}
    className={`text-lg font-bold text-slate-500 ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2("down", "tween", 0.3, 1)} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }: { title: string, textStyles: string }) => (
  <motion.h2
    variants={textVariant2('down', 'tween', 0.3, 1)}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
