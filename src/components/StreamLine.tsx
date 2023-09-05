"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";
const StreamLine: FC<{
  title: string;
  image: string;
  text: string;
  coloredText: string;
}> = ({ title, image, text, coloredText }) => {
  return (
    <div className="w-full mx-8  md:w-4/5 relative mb-48  max-w-7xl">
      <motion.div
        animate={{ borderColor: "#FF9E1B" }}
        className="flex flex-col gap-10 border-2  justify-center px-16 md:pl-32 md:pr-40 text-left py-20 pb-32"
      >
        <motion.h3
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-4xl font-extralight"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ delay: 0.5 }}
          className="text-base md:text-xl font-light leading-[3rem]"
        >
          {text}
        </motion.p>
        <motion.span
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ delay: 0.5 }}
          className="text-my_yellow text-base md:text-xl font-semibold border-b-[1px] max-w-fit p-[.5px]"
        >
          {coloredText}
        </motion.span>
      </motion.div>
      <Image
        className="absolute -bottom-24 left-[30%] md:bottom-auto md:left-auto md:-right-[100px] md:top-1/4  rounded-md"
        src={image}
        alt={"image"}
        width={200}
        height={200}
      />
      <Image
        src={"/icon-quote.svg"}
        alt={"quotes"}
        width={60}
        height={60}
        className="absolute -left-[30px] top-[15%] bg-white py-4"
      />
    </div>
  );
};

export default StreamLine;
