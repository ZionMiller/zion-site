import { FaLinkedin, FaGithub, FaTwitter, FaMedium } from 'react-icons/fa';
import profileData from '../utils/me';
// import { techIcons } from '../utils/techIcons';

// TODO: Handle tech icons with tool tip for each logo to reveal what they are for non tech

const About = () => {
  return (
    <div id="about" className='mx-auto sm:px-8 md:px-10 lg:px-20'>
        <div className="max-w-8xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:w-1/2 flex flex-col items-center md:mt-5 sm:mt-10">
            <div className="w-full max-w-md lg:max-w-lg lg:h-full overflow-hidden rounded-lg mb-6">
              <img
                className="w-full h-full object-cover object-center rounded-lg"
                src="/goldenboy.jpg"
                alt="Zion Miller Headshot"
              />
            </div>
            <div className="flex justify-center space-x-6 mt-4">
              {profileData.socials?.linkedIn && (
                <a
                  href={profileData.socials.linkedIn}
                  className="text-gray-600 hover:text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={28} />
                </a>
              )}
              {profileData.socials?.github && (
                <a
                  href={profileData.socials.github}
                  className="text-gray-600 hover:text-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={28} />
                </a>
              )}
              {profileData.socials?.twitter && (
                <a
                  href={profileData.socials.twitter}
                  className="text-gray-600 hover:text-blue-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={28} />
                </a>
              )}
              {profileData.socials?.medium && (
                <a
                  href={profileData.socials.medium}
                  className="text-gray-600 hover:text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaMedium size={28} />
                </a>
              )}
              {profileData.socials?.leetcode && (
                <a
                  href={profileData.socials.leetcode}
                  className="text-gray-600 hover:text-orange-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LeetCode
                </a>
              )}
            </div>
          </div>
          <div className="relative lg:w-1/2 mb-4 mt-2">
            <main className="mt-2 px-4 sm:mt-4 sm:px-6 md:mt-32 lg:mt-10 lg:px-0">
              <div className="sm:text-center lg:text-left">
                <h2 className="my-4 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                  About {profileData.name}
                </h2>
                <p className="text-lg text-gray-700">
                  {profileData.bio.split('\n').map((paragraph, index) => (
                    <span key={index}>
                      {paragraph}
                      <br />
                    </span>
                  ))}
                </p>
                <div className="mt-12">
                  <h3 className="text-xl font-semibold mb-4">Top Skills:</h3>
                  <div className="flex flex-wrap gap-4 mb-8">
                    {profileData.topSkills.map((skill, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center text-white bg-blue-500 rounded-full p-4 font-bold w-20 h-20"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[...profileData.languagesAndFrameworks,
                    ...profileData.cloudDatabasesAndManagement,
                    ...profileData.devOpsAIAndMisc].map((tech, index) => (
                      <div key={index} className="flex items-center px-3 py-1 bg-gray-200 text-gray-800 rounded">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      );
};

      export default About;
