import { FlipWords } from "./FlipWords"
import { FaGithub } from 'react-icons/fa'
import { HiOutlineDocumentArrowDown } from 'react-icons/hi2'

const HeroText = () => {
     const words = ["Modern", "Scalable", "Efficient"];

     return (
          <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text"
          >
               {/* Desktop View */}
               <div className="flex-col hidden md:flex c-space">
                    <h1 className="text-4xl font-medium hero-fade-in" style={{ animationDelay: '0.1s' }}
                    >Hello, I'm Fatra </h1>
                    <div className="flex flex-col items-start">

                         <p className="text-5xl font-medium text-neutral-300 hero-fade-in" style={{ animationDelay: '0.15s' }}
                         >A Software Engineer Building
                         </p>

                         <div className="hero-fade-in" style={{ animationDelay: '0.2s' }}>
                              <FlipWords words={words}
                                   className="font-black text-white text-8xl" />
                         </div>

                         <p className="text-4xl font-medium text-neutral-300 hero-fade-in" style={{ animationDelay: '0.25s' }}
                         >
                              Business Solutions
                         </p>

                         <p className="text-lg text-neutral-400 mt-4 max-w-2xl hero-fade-in" style={{ animationDelay: '0.3s' }}
                         >
                              I specialize in building scalable, intelligent, and user-centric applications using modern web technologies and AI integration.
                         </p>

                         {/* Desktop Buttons */}
                         <div
                              className="flex flex-row gap-4 mt-16 hero-fade-in-up"
                              style={{ animationDelay: '0.35s' }}
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
                         </div>
                    </div>

               </div>


               {/* Mobile View */}
               <div className="flex flex-col space-y-6 md:hidden">
                    <p className="text-4xl font-medium hero-fade-in" style={{ animationDelay: '0.1s' }}
                    >
                         Hello, I'm Fatra
                    </p>

                    <div>
                         <p className="text-3xl font-black text-neutral-300 hero-fade-in" style={{ animationDelay: '0.15s' }}
                         >
                              Software Engineer Building
                         </p>

                         <div className="hero-fade-in" style={{ animationDelay: '0.2s' }}>
                              <FlipWords
                                   words={words}
                                   className="font-bold text-white text-6xl" />
                         </div>
                         <p
                              className="text-3xl font-black text-neutral-300 hero-fade-in"
                              style={{ animationDelay: '0.25s' }}
                         >
                              Business Solutions
                         </p>

                         <p className="text-base text-neutral-400 mt-4 max-w-sm hero-fade-in" style={{ animationDelay: '0.3s' }}
                         >
                              I specialize in building scalable, intelligent, and user-centric applications using modern web technologies and AI integration.
                         </p>

                         {/* Mobile Buttons */}
                         <div
                              className="flex flex-col gap-4 mt-8 w-full max-w-sm mx-auto sm:max-w-md hero-fade-in-up"
                              style={{ animationDelay: '0.35s' }}
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
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default HeroText