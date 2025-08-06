  import React from 'react';
  import LightRays from './lightray';
  import Lanyard from './lanyard';
  import ScrollVelocity from './textanim1';
  import './index.css';

  const techList = [
    { name: 'C', src: '/icons/c.png' },
    { name: 'C++', src: '/icons/cpp.png' },
    { name: 'C#', src: '/icons/csharp.png' },
    { name: 'Python', src: '/icons/python.png' },
    { name: 'Java', src: '/icons/java.png' },
    { name: 'Unity', src: '/icons/unity.png' },
    { name: 'Blender', src: '/icons/blender.png' },
  ];

  const App = () => {
    return (
      <div className="m-0 p-0 min-h-screen w-full bg-black relative flex flex-col">
        {/* Light rays background */}
        <div className="fixed top-0 left-0 w-full h-full z-0">
          <LightRays />
        </div>

        {/* Top Section */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center py-10 px-6">
          {/* Lanyard animation */}
          <div className="md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
            <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
          </div>

          {/* Info Section */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://github.com/RupenParthu" target="_blank" rel="noopener noreferrer">
                <img src="/icons/github.svg" alt="GitHub" className="w-8 h-8 hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/rupen-parthu/" target="_blank" rel="noopener noreferrer">
                <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition-transform" />
              </a>
            </div>
            <h1 className="text-white text-5xl font-bold">Rupen Parthu Palavara</h1>
            <h2 className="text-gray-400 text-2xl">The Jack of all Techs</h2>
          </div>
        </div>
        <div className="relative z-10 px-6 py-12 bg-black w-full border-t border-gray-800">
          <h2 className="text-white text-2xl font-semibold mb-6 text-center">Tech Stack</h2>
          {/* <ScrollVelocity
            texts={['TechStack']}
            className="custom-scroll-text"
            /> */}
          <div className="flex flex-wrap justify-center gap-6">
            {techList.map((tech) => (
              <div
                key={tech.name}
                className="w-24 h-24 rounded-full bg-black border border-gray-700 flex items-center justify-center hover:border-gray-500 transition-colors"
              >
                <img src={tech.src} alt={tech.name} title={tech.name} className="w-12 h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="relative z-10 px-6 py-12 bg-black w-full border-t border-gray-800">
          <h3 className="text-white text-2xl font-semibold mb-6 text-center">Projects</h3>
          <div className="flex flex-col gap-6 items-center">
            {/* Project 1 */}
            <a
              href="https://github.com/RupenParthu/FlappyBird"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black border border-gray-800 hover:bg-gray-900 p-8 rounded-xl shadow-lg transition-all duration-200 text-white w-full max-w-lg min-h-[200px]"
            >
              <h4 className="text-2xl font-bold mb-2">Flappy Bird Clone</h4>
              <p className="text-gray-300">A fun and addictive Flappy Bird clone made using Unity. Features smooth physics, pixel-perfect collisions, and endless scoring.</p>
            </a>

            {/* Project 2 */}
            <a
              href="https://github.com/RupenParthu/Pong1972"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black border border-gray-800 hover:bg-gray-900 p-8 rounded-xl shadow-lg transition-all duration-200 text-white w-full max-w-lg min-h-[200px]"
            >
              <h4 className="text-2xl font-bold mb-2">Pong 1978</h4>
              <p className="text-gray-300">A recreation of the original Pong from 1978 using Unity. Features classic two-player mode and also against computer.</p>
            </a>

            {/* Project 3 */}
            <a
              href="https://github.com/RupenParthu/Lyrics-Fetcher"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black border border-gray-800 hover:bg-gray-900 p-8 rounded-xl shadow-lg transition-all duration-200 text-white w-full max-w-lg min-h-[200px]"
            >
              <h4 className="text-2xl font-bold mb-2">Lyrics Fetcher</h4>
              <p className="text-gray-300">A sleek web app that fetches song lyrics from a public API. Type the song title or artist and get lyrics instantly with a beautiful UI.</p>
            </a>
          </div>
        </div>
        {/* Tech Stack Section */}
        
      </div>
    );
  };

  export default App;
