/* eslint-disable react/prop-types */
import MainCard from "./main-card";
import { useRef } from "react";

const MainCourses = ({ terms, selectedTermFilter, selectedCourseFilter }) => {
  const filterCourses = (terms) => {
    switch (selectedCourseFilter) {
      case "Courses I am taking":
        return terms.filter((term) => term.id === "2T2425");
      case "Open courses":
        return terms
          .map((term) => ({
            ...term,
            courses: term.courses.filter(
              (courses) => courses.status === "Open"
            ),
          }))
          .filter((term) => term.courses.length > 0);
      case "Completed courses":
        return terms.filter((term) => term.id !== "2T2425");
      default:
        return terms;
    }
  };

  const filteredTerms =
    selectedTermFilter === "All Terms" || !selectedTermFilter
      ? filterCourses(terms)
      : filterCourses(terms.filter((term) => term.id === selectedTermFilter));

  const totalCourses = filteredTerms.reduce(
    (total, term) => total + term.courses.length,
    0
  );

  const imageCounter = useRef(1);

  const getNextImageNumber = () => {
    const current = imageCounter.current;
    imageCounter.current = current === 9 ? 1 : current + 1;
    return current;
  };

  return (
    <div className="pl-8 pr-8">
      <p className="pt-2">{totalCourses} results</p>
      {filteredTerms.map((term) => (
        <div key={term.id} className="mt-4">
          <h1 className="text-lg text-[#262626] font-semibold">{term.id}</h1>
          <div className="flex flex-wrap sm:gap-2 md:gap-4 lg:gap-6 overflow-x-auto pb-4">
            {term.courses.map((course, index) => (
              <MainCard
                course={course}
                key={index}
                imageNumber={getNextImageNumber()}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MainCourses;
