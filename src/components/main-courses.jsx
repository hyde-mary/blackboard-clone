import { Info, Star } from "lucide-react";
import React from "react";

const MainCourses = ({ terms }) => {
  return (
    <div className="pl-8 pr-8 mt-10 h-screen">
      {terms.map((term) => (
        <div key={term.id}>
          <h1 className="text-lg text-[#262626] font-semibold">{term.id}</h1>
          <div className="flex flex-wrap gap-12 overflow-x-auto pb-4">
            {term.courses.map((course) => (
              <div
                key={course.id}
                className="group card bg-base-100 w-96 shadow-lg mt-5 rounded-none transform transition-transform hover:cursor-pointer hover:shadow-xl hover:-translate-y-1 duration-300"
              >
                <figure>
                  <img src="https://loremflickr.com/400/250" alt="Shoes" />
                </figure>
                <div className="card-body bg-[#ffffff] p-4">
                  <h2 className="text-md text-gray-600 font-medium">
                    {course.id}
                  </h2>
                  <p className="text-lg text-[#262626] font-medium group-hover:underline">
                    {course.title}
                  </p>
                  <p className="mt-5 text-gray-900">Open</p>
                  <div className="w-full border border-b-2" />
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
