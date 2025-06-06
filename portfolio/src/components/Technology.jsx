import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandCpp } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiPostman, SiMongodb } from "react-icons/si";
import { DiMysql, DiDocker, DiPython } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const MLTechBox = ({ name, bgColor }) => (
  <motion.div
    variants={iconVariants(3)}
    initial="initial"
    animate="animate"
    className="rounded-2xl border-4 border-neutral-800 p-4 w-[100px] h-[100px] flex items-center justify-center"
    style={{ backgroundColor: bgColor }}
  >
    <span className="text-white font-bold text-sm text-center">{name}</span>
  </motion.div>
);

const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* Dev & Web Tech */}
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiPython className="text-7xl" style={{ color: "#3776AB" }} />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandCpp className="text-7xl" style={{ color: "#00599C" }} />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoJavascript className="text-7xl" style={{ color: "#f7df1e" }} />
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-7xl font-bold" />
        </motion.div>
        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl" />
        </motion.div>
        <motion.div variants={iconVariants(4.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div variants={iconVariants(1.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiMysql className="text-7xl text-orange-400" />
        </motion.div>
        <motion.div variants={iconVariants(5.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTailwindcss className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <BsGithub className="text-7xl" />
        </motion.div>

        {/* Machine Learning Tech Styled Like Icons */}
        <MLTechBox name="NumPy" bgColor="#013243" />
        <MLTechBox name="Pandas" bgColor="#150458" />
        <MLTechBox name="Matplotlib" bgColor="#11557c" />
        <MLTechBox name="Seaborn" bgColor="#6f36ad" />
        <MLTechBox name="Scikit-Learn" bgColor="#f7931e" />
      </motion.div>
    </div>
  );
};

export default Technology;
