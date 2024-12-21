import educationData from "@/data/educationData";
export const Education = () => {
  return (
    <section className="px-4 md:px-8 lg:px-16 max-w-5xl mx-auto">
      <div className="text-left font-bold text-3xl sm:text-4xl mt-10">
        Education.
      </div>
      <div className="mt-6 relative">
        {/* Timeline Line */}
        <div className="absolute left-2.5 sm:left-8 top-7 bottom-0 border-l-2 border-gray-300"></div>

        {/* Timeline Items */}
        <ul className="space-y-12">
          {educationData.map((item, index) => (
            <li key={index} className="relative flex items-start">
              {/* Circle */}
              <div className="absolute left-2 sm:left-8 w-4 h-4 top-7 bg-white border-2 border-gray-500 rounded-full transform -translate-x-1/2"></div>
              {/* Content */}
              <div className="ml-10 sm:ml-20 bg-white p-6 rounded-lg shadow-md break-words overflow-hidden max-w-full">
                <h2 className="font-bold text-lg sm:text-xl">
                  {item.title}
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800 break-words"
                  >
                    {item.link.text}
                  </a>
                </h2>
                <p className="text-sm sm:text-base mt-2 text-gray-700">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
