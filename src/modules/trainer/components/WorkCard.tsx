const WorkCard = () => {
  return (
    <div className="flex border-b-2 p-4 last:border-b-0">
      <div className="mr-4 p-1 border-2 self-start ">
        <img src="/work-icon.svg" alt="Work Icon" className="w-8 h-7" />
      </div>
      <div className="w-full">
        <h3 className="text-base font-bold mb-1">Fullstack web developer</h3>
        <span className="text-sm font-medium">Firecracker Inc.</span> <br />
        <span className="text-sm font-medium text-zinc-800">May 2022 - present</span>
      </div>
    </div>
  );
};

export default WorkCard;
