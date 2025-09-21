import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Team from "./components/Team";
import Roadmap from "./components/Roadmap";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingJoinButton from "./components/FloatingJoinButton";
import Project from "./components/Project";
import ProjectDetail from "./components/ProjectDetail"; // ⬅️ create this file

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Team />
                  <Roadmap />
                  <Gallery />
                  <Project />
                  <Events />
                  <FloatingJoinButton />
                  <Contact />
                  <Footer />
                </>
              }
            />

            {/* Project Detail Page */}
             <Route path="/projects/:projectId" element={<ProjectDetail />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
