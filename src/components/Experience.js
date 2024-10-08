import profileData from '../utils/me';

const Experience = () => {
  return (
    <div id="experience">
      <div className='bg-gray-200'>
        <div className="container mx-auto px-4 mt-10">
          <br></br>
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <p className='flex flex-wrap items-center justify-center text-2xl mb-8'>
            Please
            <a href={`mailto:${profileData.email}`} className='ml-2 mr-2 text-blue-500'>
              contact me
            </a>
            for a more detailed copy of my resume
          </p>
          <div className="relative">
            <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 bg-gray-300 w-1 h-full"></div>
            <div>
              {Object.entries(profileData.experience).map(([key, exp], index) => (
                <div
                  key={key}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`absolute ${index === 0 ? 'bg-blue-500' : 'bg-gray-300'} h-1 ${index % 2 === 0 ? 'right-1/2' : 'left-1/2'} w-1/5 ${index === 0 ? 'lg:block hidden' : 'hidden lg:block'}`}
                  ></div>
                  <div
                    className={`absolute ${index === 0 ? 'bg-blue-500' : 'bg-black'} w-4 h-4 rounded-full ${index % 2 === 0 ? 'left-1/2 -translate-x-1/2' : 'right-1/2 translate-x-1/2'} hidden lg:block`}
                  ></div>
                  <div
                    className={`bg-white p-6 border ${index === 0 ? 'border-2 border-blue-500' : 'border-gray-300'} rounded-lg shadow-md w-64 h-40 flex flex-col justify-center ${index % 2 === 0 ? 'ml-20' : 'mr-20'}`}
                  >
                    <h3 className="text-lg font-semibold mb-2">{exp.role} at {exp.company}</h3>
                    <p className="text-sm text-gray-600 mb-1">{exp.location}</p>
                    <p className="text-sm text-gray-600">{exp.timeFrame}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default Experience;
