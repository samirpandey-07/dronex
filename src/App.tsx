import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Roadmap from './components/Roadmap';
import Gallery from './components/Gallery';
import Events from './components/Events';
import JoinUs from './components/JoinUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import JoinForm from './components/JoinForm';
import FloatingJoinButton from './components/FloatingJoinButton';




function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Team />
        <Roadmap />
        <Gallery />
        <Events />
         <JoinForm />
        <FloatingJoinButton />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;