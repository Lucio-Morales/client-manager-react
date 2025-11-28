import { Briefcase } from 'lucide-react';
import WorkCard from './WorkCard';

const WorkExperience = () => {
  const ALTURA_TITULO = 'h-20';
  const sombraDura = '4px 5px 0px 0px rgba(0, 0, 0, 0.90)';
  return (
    <section className="flex-1 p-4">
      <div className={`flex items-center ${ALTURA_TITULO}`}>
        <h2 className="text-2xl font-semibold -mb-2 tracking-wide">Work experience</h2>
      </div>

      <div className="border-2 bg-white" style={{ boxShadow: sombraDura }}>
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </section>
  );
};

export default WorkExperience;
