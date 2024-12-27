import MainCourses from "./components/main-courses";
import MainHeader from "./components/main-header";
import MainUtilities from "./components/main-utilities";
import Sidebar from "./components/sidebar";
import terms from "./assets/data/terms.json";

export default function App() {
  return (
    <>
      <div className="flex h-screen bg-[#f8f8f8]">
        {/* sidebar */}
        <Sidebar />

        {/* main content */}
        <main className="flex-1 bg-[#f8f8f8] overflow-y-auto mb-10">
          <MainHeader />
          <MainUtilities />
          <MainCourses terms={terms} />
        </main>
      </div>
    </>
  );
}
