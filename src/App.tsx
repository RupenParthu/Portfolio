// src/components/MinimalPortfolioGrid.jsx

import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi'; // For the small external link arrow

// --- DATA ---
const summary = {
    name: 'Rupen Parthu Palavara', // Replace with your name
    tagline: 'Crafting interfaces. Building polished software and web experiences. Experimenting with magical details in user interfaces. Webmaster at Linear.', // Replace with your role/focus
    pastWork: "In the past I've developed the Vercel design system, website, and dashboard.", // Replace with your past experience
};

// Organized into three columns: Building (Skills/Focus), Projects, and Writing/Articles
const contentColumns = {
    building: [
        {
            title: 'Craft',
            description: 'Implementing interfaces and interactions.',
            link: '#craft', // Link to a deeper skills section or dedicated page
        },
    ],
    projects: [
        {
            title: '⌘K',
            description: 'Composable command menu React component.',
            link: 'https://github.com/pacocoursey/cmdk', // Replace with your project link
        },
        {
            title: 'Writer',
            description: 'Plain text editor with a focus on performance.',
            link: 'https://github.com/pacocoursey/writer', // Replace with your project link
        },
        {
            title: 'Next Themes',
            description: 'Simple, universal next-themes.',
            link: 'https://github.com/pacocoursey/next-themes', // Replace with your project link
        },
    ],
    writing: [
        {
            title: 'React Hook Getter Pattern',
            description: 'Simple, efficient React state hook in 50 lines.',
            link: '#writing-1', // Replace with your article link
        },
        {
            title: 'Redesign 2021',
            description: 'Return to simplicity.',
            link: '#writing-2', // Replace with your article link
        },
        {
            title: 'All writing',
            description: '',
            link: '#all-writing', // Link to a dedicated blog/articles page
        },
    ],
};

// --- COMPONENT ---
function MinimalPortfolioGrid() {
    // Style applied to all grid items (Projects/Writing)
    const linkClasses = "group flex items-baseline space-x-1 hover:text-gray-400 transition-colors duration-200";

    return (
        // Same dark background and centered structure
        <div className="min-h-screen bg-black text-white flex justify-center p-12 lg:p-20 font-sans">
            
            {/* Main container with max width */}
            <div className="max-w-4xl w-full">

                {/* --- 1. Header/Summary Section --- */}
                <section className="space-y-10 mb-20 pt-16">
                    {/* Name - Large and bold, consistent with the image */}
                    <h1 className="text-3xl font-bold">
                        {summary.name}
                    </h1>

                    {/* Tagline/Focus - Italicized for emphasis */}
                    <p className="text-xl leading-relaxed max-w-2xl">
                        <span className="italic">{summary.tagline}</span>
                    </p>

                    {/* Past Work */}
                    <p className="text-lg text-gray-300 max-w-xl">
                        {summary.pastWork}
                    </p>
                </section>

                {/* --- 2. The Three-Column Grid Section --- */}
                <section className="mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10 text-left">
                        
                        {/* Column 1: Building/Skills */}
                        <div>
                            <h2 className="text-sm font-light uppercase text-gray-400 mb-6">Building</h2>
                            {contentColumns.building.map((item, index) => (
                                <div key={index} className="space-y-1 mb-6">
                                    <a href={item.link} className={linkClasses}>
                                        <h3 className="text-xl font-bold">{item.title}</h3>
                                        <FiArrowUpRight className="text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                    <p className="text-sm text-gray-400 max-w-[90%]">{item.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Column 2: Projects */}
                        <div>
                            <h2 className="text-sm font-light uppercase text-gray-400 mb-6">Projects</h2>
                            {contentColumns.projects.map((item, index) => (
                                <div key={index} className="space-y-1 mb-6">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className={linkClasses}>
                                        <h3 className="text-xl font-bold">{item.title}</h3>
                                        <FiArrowUpRight className="text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                    <p className="text-sm text-gray-400 max-w-[90%]">{item.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Column 3: Writing/Articles */}
                        <div>
                            <h2 className="text-sm font-light uppercase text-gray-400 mb-6">Writing</h2>
                            {contentColumns.writing.map((item, index) => (
                                <div key={index} className="space-y-1 mb-6">
                                    <a href={item.link} target={item.description ? '_self' : '_blank'} rel="noopener noreferrer" className={linkClasses}>
                                        <h3 className="text-xl font-bold">{item.title}</h3>
                                        <FiArrowUpRight className="text-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                    {item.description && (
                                        <p className="text-sm text-gray-400 max-w-[90%]">{item.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
            </div>
        </div>
    );
}

export default MinimalPortfolioGrid;