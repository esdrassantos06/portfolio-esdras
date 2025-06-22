"use client";

interface Technology {
  name: string;
}

interface TechnologiesProjectProps {
  technologies: Technology[];
}

const TechnologiesProject: React.FC<TechnologiesProjectProps> = ({
  technologies,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {technologies.map((tech, i) => (
        <div
          key={i}
          className="flex items-center justify-center rounded-md border-1 border-gray-200/20 bg-[#262626] p-2 text-center text-sm font-light transition-all duration-300 select-none hover:bg-gray-200/20"
        >
          {tech.name}
        </div>
      ))}
    </div>
  );
};

export default TechnologiesProject;
