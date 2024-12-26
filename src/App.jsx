import MainHeader from "./components/main-header";
import MainFooter from "./components/main-header";
import Sidebar from "./components/sidebar";

export default function App() {
  return (
    <>
      <div className="flex min-h-screen">
        {/* sidebar */}
        <Sidebar />

        {/* main content */}
        <main className="flex-1 bg-[#f8f8f8] min-h-screen">
          <MainHeader />
        </main>
      </div>
    </>
  );
}
