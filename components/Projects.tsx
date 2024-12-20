// pages/projects.js
import React from "react";
import Link from "next/link";
import projects from "@/data/projectsData"; // Import the project data

export default function Projects() {
  return (
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <h1 className="text-5xl font-bold text-center text-white mb-4">
          My Projects
        </h1>
        <p className="font-bold text-center text-blue-500 text-2xl mb-12">
          Some of My Distinguished Works
        </p>

        {/* Cards Grid */}
        <Link href="/projects">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              {/* Card Image */}
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h2 className="text-lg font-bold text-gray-600 mb-2 truncate">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm h-16 overflow-hidden">
                  {project.description.length > 100
                    ? `${project.description.slice(0, 100)}...`
                    : project.description}
                </p>
              </div>

              {/* Card Footer */}
              
            </div>
          ))}
        </div>
        </Link>
      </div>
 
  );
}
