import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaSwift } from 'react-icons/fa'; // Using react-icons for skill icons

export const SkillsAndFrameworks = () => {
  return (
    <section className="skills-section mt-10 max-w-7xl mx-auto">

      {/* Skills and Frameworks Grid */}
      <div className="grid-cols-4 gap-4 flex items-center justify-center">
        {/* Icons */}
        <div className="flex justify-center items-center p-2 border border-zinc-800 rounded-md hover:scale-110 transition-all">
          <FaReact className="text-blue-500" size={40} />
        </div>
        <div className="flex justify-center items-center p-2 border border-zinc-800 rounded-md hover:scale-110 transition-all">
          <FaHtml5 className="text-orange-500" size={40} />
        </div>
        <div className="flex justify-center items-center p-2 border border-zinc-800 rounded-md hover:scale-110 transition-all">
          <FaCss3Alt className="text-blue-600" size={40} />
        </div>
        <div className="flex justify-center items-center p-2 border border-zinc-800 rounded-md hover:scale-110 transition-all">
          <FaJs className="text-yellow-500" size={40} />
        </div>
        <div className="flex justify-center items-center p-2 border border-zinc-800 rounded-md hover:scale-110 transition-all">
          <FaNodeJs className="text-green-600" size={40} />
        </div>
        <div className="flex justify-center items-center p-2 border border-zinc-800 rounded-md hover:scale-110 transition-all">
          <FaPython className="text-green-400" size={40} />
        </div>
      </div>
    </section>
  );
};

export default SkillsAndFrameworks;
