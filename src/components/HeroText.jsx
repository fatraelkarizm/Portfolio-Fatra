import { FlipWords } from "./FlipWords"
import { motion } from "motion/react"
import { FaGithub } from 'react-icons/fa'
import { HiOutlineDocumentArrowDown } from 'react-icons/hi2'

const HeroText = () => {
     const words = ["Modern", "Scalable", "Efficient"];
     const variants = {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
     }

     const buttonVariants = {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
     }

     return (
          <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text"
          >
               {/* Desktop View */}
               <div className="flex-col hidden md:flex c-space">
                    <motion.h1 className="text-4xl font-medium"
                         variants={variants}
                         initial="hidden"
                         animate="visible"
                         transition={{ delay: 1 }}

                    >Hello, I'm Fatra </motion.h1>
                    <div className="flex flex-col items-start">

                         <motion.p className="text-5xl font-medium text-neutral-300"
                              variants={variants}
                              initial="hidden"
                              animate="visible"
                              transition={{ delay: 1.2 }}
                         >A Software Engineer Building
                         </motion.p>

                         <motion.div
                              variants={variants}
                              initial="hidden"
                              animate="visible"
                              transition={{ delay: 1.5 }}
                         >
                              <FlipWords words={words}
                                   className="font-black text-white text-8xl" />
                         </motion.div>

                         <motion.p className="text-4xl font-medium 
                         text-neutral-300"
                              variants={variants}
                              initial="hidden"
                              animate="visible"
                              transition={{ delay: 1.8 }}
                         >
                              Business Solutions
                         </motion.p>

                         <motion.p className="text-lg text-neutral-400 mt-4 max-w-2xl"
                              variants={variants}
                              initial="hidden"
                              animate="visible"
                              transition={{ delay: 2.0 }}
                         >
                              I specialize in building scalable, intelligent, and user-centric applications using modern web technologies and AI integration.
                         </motion.p>

                         {/* Desktop Buttons */}
                         <motion.div
                              className="flex flex-row gap-4 mt-16"
                              variants={buttonVariants}
                              initial="hidden"
                              animate="visible"
                              transition={{ delay: 2.1 }}
                         >
                              <a
                                   href="https://github.com/fatraelkarizm"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105"
                              >
                                   GitHub
                                   <FaGithub className="ml-2 h-5 w-5" />
                              </a>

                              <a
                                   href="/assets/CV_Fatra_Al_Khawarizmi.pdf"
                                   download
                                   className="flex items-center px-6 py-3 bg-indigo text-white font-semibold rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105"
                              >
                                   Download CV
                                   <HiOutlineDocumentArrowDown className="ml-2 h-5 w-5" />
                              </a>
                         </motion.div>
                    </div>

               </div>


               {/* Mobile View */}
               <div className="flex flex-col space-y-6 md:hidden">
                    <motion.p className="text-4xl font-medium"
                         variants={variants}
                         animate="visible"
                         initial="hidden"
                         transition={{ delay: 1 }}
                    >
                         Hello, I'm Fatra
                    </motion.p>

                    <div>
                         <motion.p className="text-3xl font-black text-neutral-300"
                              variants={variants}
                              animate="visible"
                              initial="hidden"
                              transition={{ delay: 1.2 }}
                         >
                              Software Engineer Building
                         </motion.p>

                         <motion.div
                              variants={variants}
                              animate="visible"
                              initial="hidden"
                              transition={{ delay: 1.5 }}>
                              <FlipWords
                                   words={words}
                                   className="font-bold text-white text-6xl" />
                         </motion.div>
                         <motion.p
                              className="text-3xl font-black text-neutral-300"
                              variants={variants}
                              animate="visible"
                              initial="hidden"
                              transition={{ delay: 1.8 }}
                         >
                              Business Solutions
                         </motion.p>

                         <motion.p className="text-base text-neutral-400 mt-4 max-w-sm"
                              variants={variants}
                              initial="hidden"
                              animate="visible"
                              transition={{ delay: 2.0 }}
                         >
                              I specialize in building scalable, intelligent, and user-centric applications using modern web technologies and AI integration.
                         </motion.p>

                         {/* Mobile Buttons */}
                         <motion.div
                              className="flex flex-col gap-4 mt-8 w-full max-w-sm mx-auto sm:max-w-md "
                              variants={buttonVariants}
                              initial="hidden"
                              animate="visible"
                              transition={{ delay: 2.1 }}
                         >
                              <a
                                   href="https://github.com/fatraelkarizm"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105"
                              >
                                   <FaGithub className="mr-2 text-xl" />
                                   GitHub
                              </a>

                              <a
                                   href="/assets/CV_Fatra_Al_Khawarizmi.pdf"
                                   download
                                   className="flex items-center justify-center px-6 py-3 bg-indigo text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
                              >
                                   Download CV
                                   <HiOutlineDocumentArrowDown className="ml-2 h-5 w-5" />
                              </a>
                         </motion.div>
                    </div>
               </div>
          </div>
     )
}

export default HeroText