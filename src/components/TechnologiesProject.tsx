"use client";

interface Technology {
  name: string;
}

interface TechnologiesProjectProps {
  technologies: Technology[];
}

const TechnologiesProject: React.FC<TechnologiesProjectProps> = ({ technologies }) => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 gap-4">
      {technologies.map((tech, i) => (
        <div
          key={i}
          className="flex font-light rounded-md border-gray-200/20 transition-all duration-300 select-none text-sm border-1 hover:bg-gray-200/20 items-center justify-center bg-[#262626] px-2 py-2"
        >
          {tech.name}
        </div>
      ))}
    </div>
  );
};

export default TechnologiesProject;
