interface TabSectionProps {
  icon: string;
  title: string;
  description: string;
  isActive?: boolean;
  iconAlt?: string;
}
const TabSection = ({
  icon,
  title,
  description,
  isActive = false,
  iconAlt = '',
}: TabSectionProps) => {
  const baseClasses =
    'flex flex-col flex-1 shrink justify-center p-6 basis-0 min-w-60 max-md:px-5';
  const activeClasses = isActive
    ? 'bg-zinc-100 rounded-[8px_0_0_0]'
    : 'rounded-none bg-gray-100 bg-opacity-10';
  return (
    <div className={`${baseClasses} ${activeClasses}`}>
      <div className="flex overflow-hidden flex-col justify-center items-center self-center w-9 h-9 bg-white min-h-9">
        <img
          src={icon}
          className="object-contain flex-1 w-full aspect-[29.73/36.00] fill-pink-600"
          alt={iconAlt}
        />
      </div>
      <div className="flex flex-col items-start mt-3 w-full tracking-normal text-center">
        <h3
          className={`text-lg leading-snug font-[430] ${
            isActive ? 'text-indigo-900' : 'text-white'
          }`}
        >
          {title}
        </h3>
        <div
          className={`flex self-stretch mt-2 w-full min-h-px ${
            isActive ? 'bg-zinc-300' : 'bg-white bg-opacity-20'
          }`}
        />
        <p
          className={`mt-2 text-sm leading-5 font-[410] ${
            isActive ? 'text-neutral-500' : 'text-zinc-100'
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default TabSection;
