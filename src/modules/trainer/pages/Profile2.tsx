import TrainerInfo from '../components/TrainerInfo';
import WorkExperience from '../components/WorkExperience';
import Header from '../components/Header';

const Profile2 = () => {
  return (
    <div className="flex flex-col border-2 p-8 bg-[#FFF7E3] min-h-screen">
      <Header />

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
