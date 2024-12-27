import { Info, Star } from "lucide-react";
import React from "react";

const MainCourses = ({ terms }) => {
  const images = [
    "https://loremflickr.com/400/250?random=1",
    "https://loremflickr.com/400/250?random=2",
    "https://loremflickr.com/400/250?random=3",
    "https://loremflickr.com/400/250?random=4",
    "https://loremflickr.com/400/250?random=5",
    "https://loremflickr.com/400/250?random=6",
    "https://loremflickr.com/400/250?random=7",
    "https://loremflickr.com/400/250?random=8",
    "https://loremflickr.com/400/250?random=9",
    "https://loremflickr.com/400/250?random=10",
  ];
  return (
    <div className="pl-8 pr-8 mt-8">
      {terms.map((term) => (
        <div key={term.id}>
          <h1 className="text-lg text-[#262626] font-semibold">{term.id}</h1>
          <div className="flex flex-wrap sm:gap-2 md:gap-4 lg:gap-6 overflow-x-auto pb-4">
            {term.courses.map((course) => (
              <div
                key={course.id}
                className="group card bg-base-100 sm:w-60 md:w-72 lg:w-96 shadow-lg mt-5 rounded-none transform transition-transform hover:cursor-pointer hover:shadow-xl hover:-translate-y-1 duration-300"
              >
                <figure>
                  <img
                    src={images[Math.floor(Math.random() * images.length)]}
                    alt="Banner"
                  />
                </figure>
                <div className="card-body bg-[#ffffff] p-4">
                  <h2 className="text-md text-gray-600 font-medium">
                    {course.id}
                  </h2>
                  <p className="text-lg text-[#262626] max-h-[60px] font-medium group-hover:underline line-clamp-2">
                    {course.title}
                  </p>
                  <div className="w-full border-b-2">
                    <p className="text-gray-900 mb-2">Open</p>
                  </div>
                  <div className="flex items-center justify-between pt-2 pb-2">
                    <div className="flex-1">
                      <p className="text-[#262626] text-md">
                        {course.professor}
                      </p>
                    </div>
                    <div className="flex space-x-2 text-gray-500">
                      <Info className="w-5 h-5" />
                      <Star className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainCourses;
