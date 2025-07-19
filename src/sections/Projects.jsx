import { useState } from 'react';
import { ExternalLink, Github, X, BookOpen } from 'lucide-react';

import { listProjects } from '../constants/projects';

import { SectionWrapper } from '../hoc';
import { TechBadge } from '../components/TechBadge';


export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Website', 'UI/UX', 'Terminal', 'Mobile'];

  const filteredProjects = listProjects.filter((project) => {
    if (activeCategory === 'All') {
      return true;
    }
    return project.category === activeCategory;
  });

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollBarWidth}px`;
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <section id="projects" className="py-18 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-purple-600"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to
          detail, performance, and user experience.
        </p>

        <div className="flex justify-center items-center gap-4 mb-12 cursor-pointer px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-5 py-2 rounded-full text-sm font-bold
                transition-colors duration-300 cursor-pointer
                ${activeCategory === category
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-gray-700 text-secondary-foreground hover:bg-purple-600 hover:text-white'
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.length > 0 ? ( // Kondisi untuk menampilkan proyek atau pesan
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden cursor-pointer" onClick={() => openModal(project)}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-fit object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 cursor-default">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => {
                      // Menggunakan TechBadge komponen di sini
                      return <TechBadge key={index} tech={tag} />;
                    })}
                  </div>

                  <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      {project.demoUrl && project.demoUrl !== '#' && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-purple-600 transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground/80 hover:text-purple-600 transition-colors duration-300"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Pesan jika tidak ada proyek yang difilter
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-10">
              <p className='text-3xl font-bold mb-2'>
                Under <span className='text-purple-600'>Maintenance</span> ( •͈ ᴗ •͈ )
              </p>
              <p className="text-lg text-gray-400">
                The Developer is still <span className='text-purple-600 font-bold'>studying</span> it or maybe working on it.
              </p>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 hover:text-purple-600 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/fatraelkarizm"
          >
            Check My Github
            <Github size={24} />
          </a>
        </div>
      </div>

      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 flex items-center justify-center p-4"
          onClick={handleOverlayClick}
        >
          <div
            className="bg-card text-card-foreground rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors duration-300 z-10"
            >
              <X size={24} className='cursor-pointer text-purple-600' />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-auto object-cover rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.tags.map((tag, index) => {
                  // Menggunakan TechBadge komponen di sini juga untuk modal
                  return <TechBadge key={index} tech={tag} />;
                })}
              </div>
              <p className="text-muted-foreground mb-4">{selectedProject.description}</p>

              <div className="flex flex-wrap gap-4 mt-6">
                {selectedProject.demoUrl && selectedProject.demoUrl !== '#' && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300 flex-grow sm:flex-grow-0 justify-center"
                  >
                    <ExternalLink size={18} /> View Demo
                  </a>
                )}
                {selectedProject.githubUrl && selectedProject.githubUrl !== '#' && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300 flex-grow sm:flex-grow-0 justify-center"
                  >
                    <Github size={18} /> GitHub Repo
                  </a>
                )}
                {selectedProject.researchUrl && selectedProject.researchUrl !== '#' && (
                  <a
                    href={selectedProject.researchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#007ACC] text-white rounded-md hover:bg-[#006acc] transition-colors duration-300 flex-grow sm:flex-grow-0 justify-center"
                  >
                    <BookOpen size={18} /> Research
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SectionWrapper(Projects, "projects");
