import { PillProps } from "@/interfaces";

const Pill: React.FC<PillProps> = ({ title }) => (
  <div className="bg-gray-200 hover:bg-gray-300 text-sm text-gray-800 rounded-full px-4 py-1 cursor-pointer">
    {title}
  </div>
);

export default Pill;
