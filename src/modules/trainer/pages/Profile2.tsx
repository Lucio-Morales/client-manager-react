import { ArrowLeft, Bell, Search, User } from 'lucide-react';
import TrainerInfo from '../components/TrainerInfo';
import WorkExperience from '../components/WorkExperience';

const Profile2 = () => {
  return (
    <div className="flex flex-col border-2 p-8 bg-[#FFF7E3] min-h-screen">
      <div className="flex  justify-between mb-8 h-12 items-stretch">
        <button className="text-3xl font-semibold border-2 px-3 cursor-pointer">
          <ArrowLeft />
        </button>

        <div className="flex gap-8 items-stretch">
          <div className="relative w-82">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-900" />
            <input
              className="border-2 py-2 pl-10 text-sm w-full h-full self-center"
              type="text"
              placeholder="Find courses, trainers,etc..."
            />
          </div>

          <div className="flex gap-4 items-stretch h-full">
            <button className="border-2 bg-[#f5d073] p-2 flex items-center justify-center">
              <Bell className="w-6 h-6" />
            </button>
            <button className="border-2 p-2 flex items-center justify-center">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-7">
        {/* TRAINER INFO */}
        <TrainerInfo />
        {/* WORK EXPERIENCE */}
        <WorkExperience />
      </div>
    </div>
  );
};

export default Profile2;
