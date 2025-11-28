import TrainerInfo from '../components/TrainerInfo';
import WorkExperience from '../components/WorkExperience';

const Profile2 = () => {
  return (
    <div className="flex items-start border-2 p-6 space-x-2 bg-[#FFF7E3] min-h-screen">
      {/* TRAINER INFO */}
      <TrainerInfo />

      {/* WORK EXPERIENCE */}
      <WorkExperience />
    </div>
  );
};

export default Profile2;
