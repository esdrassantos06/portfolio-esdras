export interface Tech {
  name: string;
  src: string;
  background: string;
}

export type StackGroupKey = "frontend" | "backend" | "platform";

export interface StackGroup {
  key: StackGroupKey;
  items: Tech[];
}

export const STACK: StackGroup[] = [
  {
    key: "frontend",
    items: [
      {
        name: "TypeScript",
        src: "/technologies/ts.svg",
        background: "bg-[#1F2D3D]",
      },
      {
        name: "Next.js",
        src: "/technologies/next.svg",
        background: "bg-[#313131]",
      },
      {
        name: "React",
        src: "/technologies/react.svg",
        background: "bg-[#284147]",
      },
      {
        name: "Tailwind CSS",
        src: "/technologies/tailwind.svg",
        background: "bg-[#183644]",
      },
    ],
  },
  {
    key: "backend",
    items: [
      {
        name: "Node.js",
        src: "/technologies/node.svg",
        background: "bg-[#20625C]",
      },
      {
        name: "NestJS",
        src: "/technologies/nestjs.svg",
        background: "bg-[#5A2130]",
      },
      {
        name: "Python",
        src: "/technologies/python.svg",
        background: "bg-[#3A3410]",
      },
      {
        name: "PostgreSQL",
        src: "/technologies/postgres.svg",
        background: "bg-[#024795]",
      },
      {
        name: "Redis",
        src: "/technologies/redis.svg",
        background: "bg-[#7A1414]",
      },
    ],
  },
  {
    key: "platform",
    items: [
      {
        name: "React Native",
        src: "/technologies/react.svg",
        background: "bg-[#20232A]",
      },
      {
        name: "Docker",
        src: "/technologies/docker.svg",
        background: "bg-[#1F2937]",
      },
      {
        name: "AWS",
        src: "/technologies/aws.svg",
        background: "bg-[#232F3E]",
      },
    ],
  },
];
