import { SkillIcon } from "./SkillIcon";
import { SectionTitle } from "@/components/ui/SectionTitle";

const skillsRow1 = [
  { name: "React", icon: "devicon-react-original", color: "text-cyan-400" },
  { name: "Next.js", icon: "devicon-nextjs-plain", color: "text-white" },
  {
    name: "Tailwind",
    icon: "devicon-tailwindcss-plain",
    color: "text-sky-400",
  },
  {
    name: "PostgreSQL",
    icon: "devicon-postgresql-plain",
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain",
    color: "text-yellow-400",
  },
  { name: "HTML5", icon: "devicon-html5-plain", color: "text-orange-500" },
  { name: "PHP", icon: "devicon-php-plain", color: "text-blue-500" },
  {
    name: "Bootstrap",
    icon: "devicon-bootstrap-plain",
    color: "text-purple-500",
  },
];

const skillsRow2 = [
  {
    name: "TypeScript",
    icon: "devicon-typescript-plain",
    color: "text-blue-600",
  },
  {
    name: "Supabase",
    icon: "devicon-supabase-plain",
    color: "text-emerald-500",
  },
  { name: "Redis", icon: "devicon-redis-plain", color: "text-red-500" },
  { name: "Node.js", icon: "devicon-nodejs-plain", color: "text-green-500" },
  { name: "Git", icon: "devicon-git-plain", color: "text-orange-600" },
  { name: "MySQL", icon: "devicon-mysql-original", color: "text-blue-400" },
];

export const MySkills = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="flex flex-col items-center text-center mb-16">
        <SectionTitle title="Core Technologies" />
        <p className="text-slate-400 mt-1 max-w-2xl leading-relaxed">
          The tools and technologies I use to bring ideas to life.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="pause-on-hover flex overflow-hidden">
          <div className="animate-marquee-right flex">
            {[...skillsRow1, ...skillsRow1, ...skillsRow1].map((skill, i) => (
              <SkillIcon key={`row1-${i}`} {...skill} />
            ))}
          </div>
        </div>

        <div className="pause-on-hover flex overflow-hidden">
          <div className="animate-marquee-left flex">
            {[...skillsRow2, ...skillsRow2, ...skillsRow2].map((skill, i) => (
              <SkillIcon key={`row2-${i}`} {...skill} />
            ))}
          </div>
        </div>
      </div>
      {/* <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none z-10"></div> */}
    </section>
  );
};
