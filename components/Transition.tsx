"use client"
import React from 'react'
import {animate, motion} from 'framer-motion'

const TransitionVariants = {
    initial:{
        y:"100%",
        height:'100%'
    },
    animate: {
      y:"0%",
      height:'0%'
    },
    exit: {
      y: ["0%", "100%"],
      height: ["0%", "100%"]
    }
}

const Transition = () => {
  return (
    <div>
       <motion.div className='fixed right-0 h-screen w-screen bottom-full z-[30] bg-[#d5af86]'
       variants={TransitionVariants}
       initial="initial"
       exit="exit"
       animate="animate"
       transition={{delay:0.2, durationn: 0.6, ease: "easeInOut"}}
       />
       <motion.div className='fixed right-0 h-screen w-screen bottom-full z-[20] bg-[#8ccfb6]'
       variants={TransitionVariants}
       initial="initial"
       exit="exit"
       animate="animate"
       transition={{delay:0.4, durationn: 0.6, ease: "easeInOut"}}
       />
       <motion.div className='fixed right-0 h-screen w-screen bottom-full z-[10] bg-[#dbc2db]'
       variants={TransitionVariants}
       initial="initial"
       exit="exit"
       animate="animate"
       transition={{delay:0.6, durationn: 0.6, ease: "easeInOut"}}
       />
    </div>
  )
}

export default Transition;

