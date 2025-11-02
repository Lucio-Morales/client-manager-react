type SpanProps = {
  label: string;
};

const SpanInfo: React.FC<SpanProps> = ({ label }) => {
  return (
    <span className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-zinc-700 text-white text-xs rounded-xl py-1 px-2 whitespace-nowrap z-20">
      {label}
    </span>
  );
};

export default SpanInfo;
