import React from 'react'
import {motion} from 'motion/react';
const App=()=>{
  return(
    <div>
      <motion.div 
      animate={{
        x:1000,
        y:500
      }}
      className="box"
      >

      </motion.div>
      <motion.div 
      animate={{
        x:400,
      }}
      className='circle'
      >

      </motion.div>
    </div>
  )
};
export default App;