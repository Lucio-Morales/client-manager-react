import { X, Instagram, Youtube } from 'lucide-react';

const TrainerInfo = () => {
  const ALTURA_TITULO = 'h-20';
  const sombraDura = '4px 5px 0px 0px rgba(0, 0, 0, 0.90)';

  return (
    <section className="flex-2 p-4">
      <div className={`flex items-center ${ALTURA_TITULO}`}>
        <h1 className="text-4xl font-bold m-0 tracking-wide">Trainer info</h1>
      </div>

      <div className="flex border-2 p-4 bg-[#f7c436] gap-4" style={{ boxShadow: sombraDura }}>
        <div className="w-1/3 flex-shrink-0">
          <img src="/profile-me.png" alt="Trainer" className="border-2 w-full h-full object-cover" />
        </div>

        <div className="flex-1 flex flex-col gap-4">
          <header className="flex">
            <div className="w-2/3">
              <h3 className="text-2xl font-bold">Lucio Morales</h3>
              <span className="text-sm text-zinc-900 font-medium">luciomor7@gmail.com</span>
            </div>

            <div className="w-1/3 flex gap-2">
              <div className="border-2 bg-white p-2 self-start">
                <img src="/twitter.svg" alt="twitter logo" />
              </div>
              <div className="border-2 bg-white p-2 self-start">
                <img src="/linkedin.svg" alt="linkedin logo" />
              </div>
              <div className="border-2 bg-white p-2 self-start">
                <img src="/instagram.svg" alt="instagram logo" />
              </div>
            </div>
          </header>

          <div className="flex gap-2 ">
            <div className="flex-1 border-2 p-2 bg-[#f5d073]">
              <h4 className="text-xl font-bold">10+</h4>
              <span className="text-xs block">experience</span>
            </div>
            <div className="flex-1 border-2 p-2 bg-[#f5d073]">
              <h4 className="text-xl font-bold">#1</h4>
              <span className="text-xs block">on platform</span>
            </div>
            <div className="flex-1 border-2 p-2 bg-[#f5d073]">
              <h4 className="text-xl font-bold">5 ya</h4>
              <span className="text-xs block">of teaching</span>
            </div>
            <div className="flex-1 border-2 p-2 bg-[#f5d073]">
              <h4 className="text-xl font-bold">12</h4>
              <span className="text-xs block">courses</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainerInfo;
