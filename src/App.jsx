import React from 'react';
import Lanyard3D from './Lanyard3D';
import LightRays from './LightRays';
import ScrollReveal from './ScrollAnim1';

// Main App component
function App() {
  // Placeholder data for the portfolio
  const portfolioData = {
    name: 'Rupen',
    title: 'Software Developer',
    class: 'XYZ-123',
    branch: 'Computer Science',
    languages: ['JavaScript', 'Python', 'Java', 'React'],
    projects: [
      {
        title: 'Project Alpha',
        description: 'A brief description of Project Alpha, highlighting the technologies used (e.g., React, Node.js) and the problem it solves.',
      },
      {
        title: 'Project Beta',
        description: 'A brief description of Project Beta. Explain the key features and your role in the development process.',
      },
      {
        title: 'Project Gamma',
        description: 'A brief description of Project Gamma. Discuss the challenges you faced and how you overcame them.',
      },
    ],
  };

  return (
    <div className="relative min-h-screen w-full font-sans text-white bg-black overflow-x-hidden">
      {/* LightRays component for the background */}
      <LightRays />

      {/* Main portfolio content with a higher z-index */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <Section id="home">
          <div className="flex flex-col items-center justify-center h-full transform scale-125 -translate-y-12 transition-transform duration-500">
            <Lanyard3D />
            <h1 className="text-4xl font-bold mt-8 text-center">Heyo! My name is {portfolioData.name}.</h1>
          </div>
        </Section>

        <Section id="about">
          <div className="text-center text-lg space-y-4">
            <ScrollReveal>
              <h2 className="text-5xl font-bold mb-8 text-center">About Me</h2>
            </ScrollReveal>
            <p className="max-w-prose mx-auto">
              I'm a passionate developer from the **{portfolioData.branch}** branch. I'm currently in class **{portfolioData.class}**.
            </p>
            <p className="max-w-prose mx-auto">
              I have experience with languages and frameworks such as:
            </p>
            <ul className="flex flex-wrap justify-center gap-4 list-none p-0">
              {portfolioData.languages.map((lang, index) => (
                <li key={index} className="bg-gray-800 rounded-full px-4 py-1">{lang}</li>
              ))}
            </ul>
          </div>
        </Section>

        <Section id="projects">
          <ScrollReveal>
            <h2 className="text-5xl font-bold mb-8 text-center">My Projects</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-lg mx-auto">
            {portfolioData.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}

// Reusable Section component with Tailwind CSS
const Section = ({ id, children }) => {
  return (
    <section id={id} className="min-h-screen w-full max-w-7xl p-8 flex flex-col justify-center box-border">
      {children}
    </section>
  );
};

// Reusable ProjectCard component with Tailwind CSS
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-400">{project.description}</p>
    </div>
  );
};
//    <p className=''>This is the test of tailwind</p>
export default App;

