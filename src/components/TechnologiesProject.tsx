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
    <ul
      className="flex flex-wrap items-center gap-2"
      role="list"
      aria-label="Technologies used"
    >
      {technologies.map((tech) => (
        <li key={tech.name} className="shrink-0">
          <span className="text-principal/80 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs font-light whitespace-nowrap select-none">
            {tech.name}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TechnologiesProject;
