import { FaLinkedin, FaGithub, FaTwitter, FaMedium } from 'react-icons/fa';
import profileData from '../utils/me';

const About = () => {
  return (
    <div id="about" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:w-1/2 flex justify-center lg:pr-20 lg:py-16 md:py-8 sm:py-4">
          <div className="w-full max-w-xs lg:max-w-sm h-80 lg:h-96 overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover object-center rounded-lg"
              src="/zion-headshot.jpg"
              alt="Zion Miller Headshot"
            />
          </div>
        </div>
        <div className="relative lg:w-1/2 lg:pl-12 mb-10">
          <main className="mt-24 px-4 sm:mt-28 sm:px-6 md:mt-32 lg:mt-36 lg:px-0">
            <div className="sm:text-center lg:text-left mb-20">
              <h2 className="my-12 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                About {profileData.name}:
              </h2>
              <p className="text-lg text-gray-700">
                {profileData.bio}
              </p>

              <div className="flex justify-center lg:justify-start mt-12 space-x-6">
                {profileData.socials?.linkedIn && (
                  <a
                    href={profileData.socials.linkedIn}
                    className="text-gray-600 hover:text-blue-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={24} />
                  </a>
                )}
                {profileData.socials?.github && (
                  <a
                    href={profileData.socials.github}
                    className="text-gray-600 hover:text-gray-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
                {profileData.socials?.twitter && (
                  <a
                    href={profileData.socials.twitter}
                    className="text-gray-600 hover:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter size={24} />
                  </a>
                )}
                {profileData.socials?.medium && (
                  <a
                    href={profileData.socials.medium}
                    className="text-gray-600 hover:text-black"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaMedium size={24} />
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
          </main>
        </div>
      </div>
    </div>
  );
};

export default About;
