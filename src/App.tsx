import AboutSection from "./components/About";
import Navbar from "./components/Navbar";
import ProjectSection from "./components/Projects";
import WorkSection from "./components/Work";
import "./index.css";

const App = () => {
  return (
    <main className="w-full min-h-screen bg-[#121212] text-[#d4d4d4] flex justify-center py-10">
      <section className="w-2/4 flex flex-col gap-14">
        <Navbar />
        <AboutSection />
        <WorkSection />
        <ProjectSection />
      </section>
    </main>
  );
};

export default App;
