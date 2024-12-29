import React from 'react'
import { motion } from "framer-motion";



    const container = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren:2,
          },
        },
      };
      
      const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      };
      
      const Motion = () =>  {
        return (
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item}>Item 1</motion.div>
            <motion.div variants={item}>Item 2</motion.div>
            <motion.div variants={item}>Item 3</motion.div>
          </motion.div>
        );
      }
  
export default Motion;
