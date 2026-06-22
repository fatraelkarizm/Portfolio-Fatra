import { FlipWords } from "./FlipWords"

const GitHubIcon = () => (
  <svg aria-hidden="true" className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
)

const DownloadIcon = () => (
  <svg aria-hidden="true" className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0 4-4m-4 4-4-4M4 20h16" />
  </svg>
)

const HeroText = () => {
     const words = ["Modern", "Scalable", "Efficient"];

     return (
          <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text"
          >
               {/* Desktop View */}
               <div className="flex-col hidden md:flex">
                    <h1 className="text-4xl font-medium hero-fade-in" style={{ animationDelay: '0.1s' }}
                    >Hello, I'm Fatra </h1>
                    <div className="flex flex-col items-start">

                         <p className="text-5xl font-medium text-neutral-300 hero-fade-in" style={{ animationDelay: '0.15s' }}
                         >A Software Engineer Building
                         </p>

                         <div className="hero-fade-in" style={{ animationDelay: '0.2s' }}>
                              <FlipWords words={words}
                                   className="font-semibold text-white text-8xl" />
                         </div>

                         <p className="text-4xl font-medium text-neutral-300 hero-fade-in" style={{ animationDelay: '0.25s' }}
                         >
                              Business Solutions
                         </p>

                         <p className="text-lg text-neutral-300 mt-4 max-w-2xl hero-fade-in" style={{ animationDelay: '0.3s' }}
                         >
                              I specialize in building scalable, intelligent, and user-centric applications using modern web technologies and AI integration.
                         </p>

                         {/* Desktop Buttons */}
                         <div
                              className="flex flex-row gap-4 mt-16 hero-fade-in"
                              style={{ animationDelay: '0.35s' }}
                         >
                              <a
                                   href="https://github.com/fatraelkarizm"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105"
                              >
                                   GitHub
                                   <GitHubIcon />
                              </a>

                              <a
                                   href="/assets/CV_Fatra_Al_Khawarizmi.pdf"
                                   download
                                   className="flex items-center px-6 py-3 bg-indigo text-white font-semibold rounded-lg shadow-lg hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105"
                              >
                                   Download CV
                                   <DownloadIcon />
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
                         <p className="text-3xl font-medium text-neutral-300 hero-fade-in" style={{ animationDelay: '0.15s' }}
                         >
                              Software Engineer Building
                         </p>

                         <div className="hero-fade-in" style={{ animationDelay: '0.2s' }}>
                              <FlipWords
                                   words={words}
                                   className="font-semibold text-white text-6xl" />
                         </div>
                         <p
                              className="text-3xl font-medium text-neutral-300 hero-fade-in"
                              style={{ animationDelay: '0.25s' }}
                         >
                              Business Solutions
                         </p>

                         <p className="text-base text-neutral-300 mt-4 max-w-sm hero-fade-in" style={{ animationDelay: '0.3s' }}
                         >
                              I specialize in building scalable, intelligent, and user-centric applications using modern web technologies and AI integration.
                         </p>

                         {/* Mobile Buttons */}
                         <div
                              className="flex flex-col gap-4 mt-8 w-full max-w-sm mx-auto sm:max-w-md hero-fade-in"
                              style={{ animationDelay: '0.35s' }}
                         >
                              <a
                                   href="https://github.com/fatraelkarizm"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105"
                              >
                                   <span className="mr-2 inline-flex"><GitHubIcon /></span>
                                   GitHub
                              </a>

                              <a
                                   href="/assets/CV_Fatra_Al_Khawarizmi.pdf"
                                   download
                                   className="flex items-center justify-center px-6 py-3 bg-indigo text-white font-semibold rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
                              >
                                   Download CV
                                   <DownloadIcon />
                              </a>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default HeroText