import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPython,
} from "react-icons/fa"; // Using react-icons for skill icons
import { SiNextdotjs as FaNextjs } from "react-icons/si";

export const SkillsAndFrameworks = () => {
  return (
    <section className="skills-section mt-10 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        Skills and Frameworks
      </h2>
      {/* Skills and Frameworks Grid */}
      <div className="grid-cols-4 gap-4 flex items-center justify-center mt-10">
        {/* Icons with Tooltips */}
        <div className="relative group flex justify-center items-center p-2 border border-zinc-800 rounded-md">
          <FaNextjs className="text-black " size={40} />
          <span className="absolute bottom-full mb-2 hidden group-hover:block text-xs bg-black text-white px-2 py-1 rounded">
            Next.js
          </span>
        </div>

        <div className="relative group flex justify-center items-center p-2 border border-zinc-800 rounded-md">
          <FaReact className="text-black hover:text-blue-500" size={40} />
          <span className="absolute bottom-full mb-2 hidden group-hover:block text-xs bg-black text-white px-2 py-1 rounded">
            React
          </span>
        </div>
        <div className="relative group flex justify-center items-center p-2 border border-zinc-800 rounded-md">
          <FaHtml5 className="text-black hover:text-orange-500" size={40} />
          <span className="absolute bottom-full mb-2 hidden group-hover:block text-xs bg-black text-white px-2 py-1 rounded">
            HTML5
          </span>
        </div>
        <div className="relative group flex justify-center items-center p-2 border border-zinc-800 rounded-md">
          <FaCss3Alt className="text-black hover:text-blue-600" size={40} />
          <span className="absolute bottom-full mb-2 hidden group-hover:block text-xs bg-black text-white px-2 py-1 rounded">
            CSS3
          </span>
        </div>
        <div className="relative group flex justify-center items-center p-2 border border-zinc-800 rounded-md">
          <FaJs className="text-black hover:text-yellow-500" size={40} />
          <span className="absolute bottom-full mb-2 hidden group-hover:block text-xs bg-black text-white px-2 py-1 rounded">
            JavaScript
          </span>
        </div>
        <div className="relative group flex justify-center items-center p-2 border border-zinc-800 rounded-md">
          <FaNodeJs className="text-black hover:text-green-600" size={40} />
          <span className="absolute bottom-full mb-2 hidden group-hover:block text-xs bg-black text-white px-2 py-1 rounded">
            Node.js
          </span>
        </div>
        <div className="relative group flex justify-center items-center p-2 border border-zinc-800 rounded-md">
          <FaPython className="text-black hover:text-green-400" size={40} />
          <span className="absolute bottom-full mb-2 hidden group-hover:block text-xs bg-black text-white px-2 py-1 rounded">
            Python
          </span>
        </div>
      </div>
    </section>
  );
};

export default SkillsAndFrameworks;
