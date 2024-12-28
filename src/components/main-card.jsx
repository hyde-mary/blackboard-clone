/* eslint-disable react/prop-types */
import { Info, Lock, Star } from "lucide-react";

const MainCard = ({ course, imageNumber }) => {
  return (
    <div className="group card bg-base-100 sm:w-60 md:w-72 lg:w-96 shadow-lg mt-5 rounded-none transform transition-transform hover:cursor-pointer hover:shadow-xl hover:-translate-y-1 duration-300">
      <figure className="relative">
        <img src={`./src/assets/banners/cat-${imageNumber}.jpg`} alt="Banner" />
        {course.status === "Locked" && (
          <div className="absolute inset-0 bg-[#262626] bg-opacity-70 flex flex-col items-center justify-center">
            <Lock className="w-20 h-20 text-[#ffffff]" />
            <span className="mt-5 text-xl text-[#ffffff]">Locked</span>
          </div>
        )}
      </figure>
      <div className="card-body bg-[#ffffff] p-4">
        <h2 className="text-md text-gray-600 font-medium">{course.id}</h2>
        <p className="text-lg text-[#262626] max-h-[60px] font-medium group-hover:underline line-clamp-2">
          {course.title}
        </p>
        <div className="w-full border-b-2">
          <p className="text-gray-900 mb-2">{course.status}</p>
        </div>
        <div className="flex items-center justify-between pt-2 pb-2">
          <div className="flex-1">
            <p className="text-[#262626] text-md">{course.professor}</p>
          </div>
          <div className="flex space-x-2 text-gray-500">
            <Info className="w-5 h-5" />
            <Star className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
