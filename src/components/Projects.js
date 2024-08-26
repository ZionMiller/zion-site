import profileData from '../utils/me';
import { techIcons } from '../utils/techIcons';
import { FaGithub, FaYoutube } from 'react-icons/fa';

const Projects = () => {

  return (
    <div id="projects">
      <div className="container py-16 mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {Object.entries(profileData.projects).map(([key, project]) => (
            <div
              key={key}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transition-transform transform hover:scale-105 hover:bg-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  {project.techUsed && (
                    <div className="flex items-center space-x-2">
                      {project.techUsed.map((tech, index) => (
                        <div key={index} className="flex items-center">
                          {techIcons[tech] || <span>{tech}</span>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <hr className="my-4 border-gray-300" />
                <div className="mb-4 flex items-center space-x-4">
                  <p className="text-sm font-semibold mr-4">Project Links:</p>
                  <div className="flex space-x-4">
                    {project.links.github && typeof project.links.github === 'string' && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-gray-900"
                        aria-label="GitHub"
                      >
                        <FaGithub size={24} style={{ color: '#333' }} />
                      </a>
                    )}
                    {project.links.github && typeof project.links.github === 'object' && (
                      <>
                        {project.links.github.backend && (
                          <a
                            href={project.links.github.backend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-gray-900"
                            aria-label="GitHub Backend"
                          >
                            <FaGithub size={24} style={{ color: '#333' }} />
                          </a>
                        )}
                        {project.links.github.frontend && (
                          <a
                            href={project.links.github.frontend}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-gray-900"
                            aria-label="GitHub Frontend"
                          >
                            <FaGithub size={24} style={{ color: '#333' }} />
                          </a>
                        )}
                      </>
                    )}
                    {project.links.youtube && (
                      <a
                        href={project.links.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-gray-900"
                        aria-label="YouTube"
                      >
                        <FaYoutube size={24} style={{ color: '#FF0000' }} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-20">
          <a
            href={profileData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white text-xl py-2 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
          >
            View More on My GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
