import React, { useState, useEffect, useMemo, useCallback, useRef } from "react";

import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Sun,
  Moon,
  Menu,
  X,
  BarChart,
  Share2,
  Users,
  Calendar,
  Clipboard,
  ArrowLeft,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  Cpu,
  Zap,
  Shield,
  Activity,
  Camera,
  Globe,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";
import { 
  hybridpic, 
  samirPic, 
  sonuPic, 
  shreshthPic, 
  tabassumPic, 
  prashantPic, 
  khushiPic, 
  aradhyaPic, 
  ishaPic, 
  akshatPic, 
  sauravPic, 
  subhankarPic 
} from "../assets";


/**
 * ProjectDetail.tsx - Upgraded interactive version
 *
 * Notes:
 * - Keep Tailwind CSS configured in your app
 * - Requires: lucide-react, framer-motion
 * - Uses local assets imported above (hybridpic, samirPic, sonuPic, shreshthPic)
 */

// Interfaces
interface ProjectFeature {
  icon: string;
  title: string;
  description: string;
}

interface ProjectSpecs {
  [key: string]: string | undefined;
}

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  email?: string;
  linkedin?: string;
}

interface TimelineItem {
  date: string;
  milestone: string;
  details: string;
  icon?: React.ReactNode | string;
}

interface ProjectData {
  title: string;
  description: string;
  detailedDescription: string;
  extra: string;
  image: string;
  status: string;
  startDate: string;
  expectedCompletion: string;
  budget: string;
  features: ProjectFeature[];
  specs: ProjectSpecs;
  technologies: string[];
  gallery: string[];
  teamMembers?: TeamMember[];
  timeline?: TimelineItem[];
  challenges?: string[];
  applications?: string[];
}

type ProjectsData = Record<string, ProjectData>;

// small animation presets
const fadeIn = {
  hidden: { opacity: 0, y: 8 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: 0.06 * i } }),
};

const cardHover = {
  rest: { y: 0, boxShadow: "0 6px 18px rgba(0,0,0,0.06)" },
  hover: { y: -6, boxShadow: "0 18px 40px rgba(2,6,23,0.12)" },
};

export default function ProjectDetail(): JSX.Element {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();

  const [project, setProject] = useState<ProjectData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [progress, setProgress] = useState(0);
  const pageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      // progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.round((window.scrollY / docHeight) * 100)) : 0;
      setProgress(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Projects data (keeps same two projects, start date Oct 1, 2025, custom roadmap)
  const projectsData: ProjectsData = useMemo(
    () => ({
      drishti: {
        title: "Drone Drishti",
        description: "AI-driven drone for search & rescue in crowded and dynamic environments.",
        detailedDescription:
          "Drone Drishti is an AI and avionics driven project by the Shivalik College Drone Club. Built to detect and assist in search & rescue missions in large events and disaster scenarios, the system integrates computer vision, long-range telemetry and robust obstacle avoidance.",
        extra: "On-device ML, thermal imaging and long-range telemetry for real-time assistance.",
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1600&q=80",
        status: "Active Development",
        startDate: "October 1, 2025",
        expectedCompletion: "October 2026",
        budget: "₹1,50,000",
        features: [
          { icon: "brain", title: "AI Recognition", description: "On-device person and object detection." },
          { icon: "broadcast", title: "Telemetry", description: "Long-range, low-latency telemetry link." },
          { icon: "shield", title: "Obstacle Avoidance", description: "LIDAR + ultrasonic sensing stack." },
        ],
        specs: {
          flightTime: "45 minutes",
          maxSpeed: "60 km/h",
          range: "10 km",
          camera: "4K RGB + thermal",
          sensors: "LIDAR, Thermal, GPS, IMU, Ultrasonic",
          weight: "2.4 kg",
          battery: "LiPo 6S 10000mAh",
          communication: "5G, WiFi, RF",
        },
        technologies: ["Computer Vision", "PyTorch", "ROS", "IoT", "Embedded C"],
        gallery: [
          "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&w=1200&q=80",
        ],
       teamMembers:  [
  
  {
    name: "Shreshth Upreti",
    role: "Vice President & Systems Integration",
    avatar: shreshthPic,  // Replace with actual image source
    bio: "Systems & electronics lead — flight controllers, telemetry, power distribution and hardware integration.",
    linkedin: "https://www.linkedin.com/in/shreshth-upreti",
  },
  {
    name: "Isha",
    role: "Researcher",
    avatar: ishaPic,  // Replace with actual image source
    bio: "Involved in research and development, focusing on new techniques and innovations for the project.",
    email: "ishadevi272@gmail.com",
  },
  {
    name: "Sonu Kumar",
    role: "President & Software Lead",
    avatar: sonuPic,  // Replace with actual image source
    bio: "Leads software architecture, mission planning and algorithm design for recognition and control.",
    linkedin: "https://www.linkedin.com/in/sonu-kumar",
  },
  {
    name: "Samir Pandey",
    role: "Treasurer & Full-Stack Developer",
    avatar: samirPic,  // Replace with actual image source
    bio: "Leads the web dashboard, telemetry UI and integration between front-end and backend logs. Manages procurement and budgeting.",
    email: "pamdeysamir@gmail.com",
    linkedin: "https://www.linkedin.com/in/samir-pandey",
  },
   {
    name: "Aradhya Tyagi",
    role: "Researcher",
    avatar: aradhyaPic,  // Replace with actual image source
    bio: "Conducts research and experiments related to the project’s technical aspects.",
    email: "aaradhyatyagi016@gmail.com",
  },
  {
    name: "Khushi Thapliyal",
    role: "Event Coordinator",
    avatar: khushiPic,  // Replace with actual image source
    bio: "Handles event planning, organizing schedules, and team coordination for events.",
    email: "thapliyalkhushi3@gmail.com",
  },
 
  {
    name: "Saurav Kumar",
    role: "Workshop Head & Hardware Lead",
    avatar: sauravPic,  // Replace with actual image source
    bio: "Oversees all hardware-related tasks, including prototyping, assembly, and testing of hardware components.",
    email: "sauravverma523@gmail.com",
  },
  {
    name: "Subhankar Dhara",
    role: "Mechanical Head",
    avatar: subhankarPic,  // Replace with actual image source
    bio: "Leads the mechanical team, focusing on design, structural integrity, and assembly of the product.",
    email: "jh20354060604@gmail.com",
  },
  {
    name: "Prashant Pandey",
    role: "Backend Developer",
    avatar: prashantPic,  // Replace with actual image source
    bio: "Responsible for server-side logic, database management, and API development.",
    email: "alphastudent87@gmail.com",
  },
  {
    name: "Tabassum Praveen",
    role: "Event Coordinator",
    avatar: tabassumPic,  // Replace with actual image source
    bio: "Coordinates events, logistics, and communication between the team and stakeholders.",
    email: "perveentabassum21@gmail.com",
  },
  
  
  {
    name: "Akshat Bhatri",
    role: "Researcher",
    avatar: akshatPic,  // Replace with actual image source
    bio: "Contributes to research and experimentation, focusing on product improvement and prototype testing.",
    email: "akshatbhartari73@gmail.com",
  }
  
],

        timeline: [
          { date: "Oct 1, 2025", milestone: "Kickoff", details: "Roles assigned, initial requirements and research.", icon: <Cpu className="w-4 h-4" /> },
          { date: "Nov 2025", milestone: "Component Selection", details: "Select flight controller, compute, sensors and comms.", icon: <Globe className="w-4 h-4" /> },
          { date: "Jan 2026", milestone: "Prototype Design", details: "Finalize mechanical and PCB layouts.", icon: <Zap className="w-4 h-4" /> },
          { date: "Mar 2026", milestone: "Assembly & Bench Test", details: "Assemble first prototype and bench validation.", icon: <Activity className="w-4 h-4" /> },
          { date: "May 2026", milestone: "AI Integration", details: "On-device models and telemetry pipeline integration.", icon: <Cpu className="w-4 h-4" /> },
          { date: "Jul 2026", milestone: "Field Trials", details: "Controlled outdoor testing and range validation.", icon: <Shield className="w-4 h-4" /> },
          { date: "Sep 2026", milestone: "Optimization", details: "Model & power optimizations; robustness improvements.", icon: <Zap className="w-4 h-4" /> },
          { date: "Oct 2026", milestone: "Showcase", details: "College showcase and final documentation.", icon: <Users className="w-4 h-4" /> },
        ],
        challenges: [
          "Robust detection in diverse lighting",
          "Low-latency telemetry security",
          "Power vs compute tradeoffs",
        ],
        applications: ["Search & rescue", "Disaster assessment", "Crowd safety"],
      },
      hybrid: {
        title: "CBII Hybrid Drone",
        description: "Quadcopter that transitions air ↔ water for rescue and inspection.",
        detailedDescription:
          "CBII Hybrid Drone addresses dual-environment missions by combining aerial flight with water surface and shallow underwater capabilities using sealed electronics and transition mechanics.",
        extra: "Optimized for flood response and underwater inspection workflows.",
        image: hybridpic,
        status: "Prototype Testing",
        startDate: "October 1, 2025",
        expectedCompletion: "December 2026",
        budget: "₹9,85,000",
        features: [
          { icon: "water", title: "Amphibious", description: "Operates in air and water with transition mechanism." },
          { icon: "tint", title: "Waterproofing", description: "Sealed enclosures and marine-grade materials." },
        ],
        specs: {
          flightTime: "30 min (air)",
          maxSpeed: "50 km/h (air), 15 km/h (water)",
          range: "5 km (air), 2 km (water)",
          maxDepth: "50 m",
          camera: "4K + underwater camera",
          sensors: "Sonar, Depth sensors, IMU",
          weight: "3.2 kg",
          battery: "Waterproof LiPo 6S 12000mAh",
          communication: "RF (underwater), WiFi (surface)",
        },
        technologies: ["Amphibious engineering", "Marine coatings", "Embedded systems", "Sonar"],
        gallery: [
          "https://images.unsplash.com/photo-1475087542963-13ab5e611954?auto=format&fit=crop&w=1200&q=80",
          "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
        ],
        teamMembers: [
          { name: "Samir Pandey", role: "Project Lead & Mechanical Design", avatar: samirPic, bio: "Mechanical architecture & sealed enclosure design." },
          { name: "Shreshth Upreti", role: "Team Lead & Systems Integration", avatar: shreshthPic, bio: "Electronics, sensors and power integration." },
          { name: "Sonu Kumar", role: "Software Team Head", avatar: sonuPic, bio: "Navigation & mission planning software." },
        ],
        timeline: [
          { date: "Oct 1, 2025", milestone: "Kickoff & Concept", details: "Define environments and baseline specs.", icon: <Cpu className="w-4 h-4" /> },
          { date: "Dec 2025", milestone: "Hull & Hydrodynamics", details: "Simulations and hull prototypes.", icon: <Zap className="w-4 h-4" /> },
          { date: "Feb 2026", milestone: "Sealed Electronics", details: "Design sealed housings and connectors.", icon: <Shield className="w-4 h-4" /> },
          { date: "Apr 2026", milestone: "Prototype Assembly", details: "Assemble dual-propulsion prototype.", icon: <Activity className="w-4 h-4" /> },
          { date: "Jun 2026", milestone: "Surface Trials", details: "Testing on lakes for float/stability.", icon: <Globe className="w-4 h-4" /> },
          { date: "Aug 2026", milestone: "Underwater Tests", details: "Shallow underwater trials & sonar tuning.", icon: <Camera className="w-4 h-4" /> },
          { date: "Oct 2026", milestone: "Field Trials", details: "Real-world robustness testing.", icon: <Shield className="w-4 h-4" /> },
          { date: "Dec 2026", milestone: "Completion", details: "Finalize docs and demo.", icon: <Users className="w-4 h-4" /> },
        ],
        challenges: [
          "Reliable air-water transition",
          "Waterproof seals and connectors",
          "Control stability in mixed mediums",
        ],
        applications: ["Flood response", "Underwater inspection", "Aquaculture monitoring"],
      },
    }),
    []
  );

  // simulate fetch
  useEffect(() => {
    setLoading(true);
    setError(null);
    const timer = setTimeout(() => {
      if (projectId && projectsData[projectId]) {
        setProject(projectsData[projectId]);
        setActiveTab("overview");
        setActiveImage(0);
      } else {
        setError("Project not found");
      }
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, [projectId, projectsData]);

  // Image modal handlers
  const openImageModal = useCallback(
    (index: number) => {
      if (!project?.gallery || project.gallery.length === 0) return;
      setActiveImage(Math.max(0, Math.min(index, project.gallery.length - 1)));
      setShowImageModal(true);
      document.body.style.overflow = "hidden";
    },
    [project]
  );

  const closeImageModal = useCallback(() => {
    setShowImageModal(false);
    document.body.style.overflow = "";
  }, []);

  const navigateImage = useCallback(
    (dir: "prev" | "next") => {
      if (!project?.gallery) return;
      setActiveImage((prev) => {
        const len = project.gallery.length;
        return dir === "next" ? (prev + 1) % len : (prev - 1 + len) % len;
      });
    },
    [project]
  );

  useEffect(() => {
    if (!showImageModal) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeImageModal();
      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "ArrowLeft") navigateImage("prev");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [showImageModal, closeImageModal, navigateImage]);

  // copy link
  const handleCopy = useCallback(async () => {
    try {
      const url = typeof window !== "undefined" ? window.location.href : "";
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }, []);

  // share to platforms
  const shareTo = useCallback((platform: "twitter" | "facebook" | "linkedin") => {
    const url = encodeURIComponent(typeof window !== "undefined" ? window.location.href : "");
    const text = encodeURIComponent(project?.title || "Drone Project");
    let shareUrl = "";
    if (platform === "twitter") shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    if (platform === "facebook") shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    if (platform === "linkedin") shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  }, [project]);

  // contact
  const handleContact = useCallback(() => {
    // we'll keep alert for simplicity; you can replace with a modal form
    alert(`Thanks — the ${project?.title} team will reach out to you soon!`);
  }, [project]);

  // small skeleton / shimmer loader component
  const Skeleton: React.FC<{ className?: string }> = ({ className = "" }) => (
    <div className={`animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700 rounded ${className}`} />
  );

  // icon resolver for timeline step (string -> lucide)
  const renderStepIcon = (icon: React.ReactNode | string | undefined) => {
    if (!icon) return <Activity className="w-5 h-5 text-white" />;
    if (typeof icon === "string") {
      switch (icon) {
        case "cpu":
          return <Cpu className="w-5 h-5 text-white" />;
        case "zap":
          return <Zap className="w-5 h-5 text-white" />;
        case "shield":
          return <Shield className="w-5 h-5 text-white" />;
        default:
          return <Activity className="w-5 h-5 text-white" />;
      }
    }
    return icon;
  };

  // If loading show skeleton layout
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6">
        {/* top progress shimmer */}
        <div className="max-w-7xl mx-auto">
          <div className="h-3 w-full rounded-full overflow-hidden mb-6 bg-gray-200/60">
            <div className="h-full w-1/3 shimmer" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Skeleton className="h-64 rounded-2xl" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Skeleton className="h-24 rounded-lg" />
                <Skeleton className="h-24 rounded-lg" />
                <Skeleton className="h-24 rounded-lg" />
                <Skeleton className="h-24 rounded-lg" />
              </div>

              <Skeleton className="h-48 rounded-2xl" />
              <Skeleton className="h-48 rounded-2xl" />
            </div>

            <aside className="space-y-6">
              <Skeleton className="h-40 rounded-2xl" />
              <Skeleton className="h-24 rounded-2xl" />
              <Skeleton className="h-24 rounded-2xl" />
            </aside>
          </div>
        </div>

        {/* custom shimmer style */}
        <style>{`
          .shimmer {
            background: linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.05) 100%);
            transform: translateX(-100%);
            animation: shimmer 1.6s infinite;
          }
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(300%); }
          }
        `}</style>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl text-red-500 mb-4">⚠️</div>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-4">{error || "Project not found"}</p>
          <button onClick={() => navigate("/")} className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">Back to Home</button>
        </div>
      </div>
    );
  }

  // main render
  return (
    <div ref={pageRef} className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* TOP SCROLL PROGRESS */}
      <div className="fixed left-0 right-0 top-0 z-50">
        <div className="h-1 bg-transparent">
          <div
            aria-hidden
            className="h-1 bg-indigo-600 dark:bg-sky-400"
            style={{ width: `${progress}%`, transition: "width 0.15s linear" }}
          />
        </div>
        <nav
          className={`backdrop-blur-md transition-all duration-300 ${scrolled ? "bg-white/90 dark:bg-gray-900/90 shadow-md" : "bg-transparent"}`}
          aria-label="Top navigation"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center gap-3 group focus:outline-none" aria-label="Go to home">
                <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-sky-400 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 ease-in-out group-hover:scale-105">
                  <span className="text-white text-lg font-extrabold">DX</span>
                </div>
                <span className="text-xl font-bold tracking-tight">
                  <span className="text-indigo-600 dark:text-sky-400">DroneX</span>
                  <span className="text-gray-900 dark:text-white"> Club</span>
                </span>
              </Link>

              <div className="hidden md:flex items-center gap-6">
                <button onClick={() => navigate("/")} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition">Home</button>
                <button onClick={() => scrollToAnchor("#team")} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition">Team</button>
                <button onClick={() => scrollToAnchor("#roadmap")} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition">Roadmap</button>
                <a href="https://shivalikcollege.edu.in" target="_blank" rel="noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition">College Site</a>
                <button onClick={toggleTheme} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800" aria-label="Toggle theme">
                  {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
                </button>
              </div>

              <div className="md:hidden flex items-center gap-2">
                <button onClick={toggleTheme} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                  {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-600" />}
                </button>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800" aria-label="Toggle menu">
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>
            {mobileMenuOpen && (
              <div className="md:hidden mt-2 bg-white dark:bg-gray-900 px-4 py-3 rounded-lg shadow">
                <button onClick={() => navigate("/")} className="block w-full text-left py-2">Home</button>
                <button onClick={() => scrollToAnchor("#team")} className="block w-full text-left py-2">Team</button>
                <button onClick={() => scrollToAnchor("#roadmap")} className="block w-full text-left py-2">Roadmap</button>
                <a href="https://shivalikcollege.edu.in" target="_blank" rel="noreferrer" className="block w-full text-left py-2">College</a>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-6">
        <button onClick={() => navigate(-1)} className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </button>
      </div>

      {/* Hero */}
      <main className="max-w-7xl mx-auto px-4 pb-12">
        <motion.section initial="hidden" animate="visible" variants={fadeIn as any}>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-8 relative">
            <div className="h-64 md:h-96">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            <div className="absolute bottom-6 left-8">
              <div className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full mb-4 text-sm">
                <Calendar className="w-4 h-4" /> {project.status}
              </div>
              <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-md">{project.title}</h1>
              <p className="text-indigo-100 max-w-3xl">{project.description}</p>
              <p className="text-indigo-100 text-sm mt-2">Shivalik College of Engineering — Drone Club</p>
            </div>

            {/* small neon accent */}
            <div aria-hidden className="absolute -top-6 right-6 w-48 h-48 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-indigo-400 to-sky-300" />
          </div>
        </motion.section>

        {/* Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md mb-8 overflow-x-auto">
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            {["overview", "specs", "gallery", "timeline", "team", "challenges"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 font-medium text-sm md:text-base capitalize ${activeTab === tab ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500 dark:text-gray-400 hover:text-gray-700"}`}
              >
                {tab === "overview" ? "Project Overview" : tab === "specs" ? "Technical Specs" : tab === "gallery" ? "Media Gallery" : tab === "timeline" ? "Project Roadmap" : tab === "team" ? "Team Members" : "Challenges & Applications"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* MAIN */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            {activeTab === "overview" && (
              <motion.div initial="hidden" animate="visible" variants={fadeIn as any}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-3"><BarChart className="w-6 h-6 text-indigo-600" /> Project Overview</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-lg bg-gradient-to-r from-indigo-50 to-white dark:from-slate-800 border hover:border-indigo-200 transition">
                      <p className="text-sm text-indigo-600">Start Date</p>
                      <p className="font-semibold">{project.startDate}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-gradient-to-r from-indigo-50 to-white dark:from-slate-800 border hover:border-indigo-200 transition">
                      <p className="text-sm text-indigo-600">Expected Completion</p>
                      <p className="font-semibold">{project.expectedCompletion}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-gradient-to-r from-indigo-50 to-white dark:from-slate-800 border hover:border-indigo-200 transition">
                      <p className="text-sm text-indigo-600">Project Status</p>
                      <p className="font-semibold">{project.status}</p>
                    </div>
                    <div className="p-4 rounded-lg bg-gradient-to-r from-indigo-50 to-white dark:from-slate-800 border hover:border-indigo-200 transition">
                      <p className="text-sm text-indigo-600">Budget</p>
                      <p className="font-semibold">{project.budget}</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">Detailed Description</h3>
                  <p className="mb-4 leading-relaxed">{project.detailedDescription}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{project.extra}</p>
                </div>

                {/* Features */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mt-4">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><Clipboard className="w-5 h-5 text-indigo-600" /> Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((f, i) => (
                      <motion.div key={i} initial="rest" whileHover="hover" animate="rest" variants={cardHover as any} className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-br from-white to-indigo-50">
                        <div className="p-3 rounded-lg bg-indigo-100">
                          <span className="text-indigo-700 font-bold">{f.title?.slice(0,1)}</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{f.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{f.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mt-4">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><Users className="w-5 h-5 text-indigo-600" /> Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t, idx) => (
                      <span key={idx} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-200 rounded-full text-sm">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Specs */}
            {activeTab === "specs" && (
              <motion.div initial="hidden" animate="visible" variants={fadeIn as any}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><BarChart className="w-6 h-6 text-indigo-600" /> Technical Specifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(project.specs).map(([key, val]) => (
                      <div key={key} className="border-l-4 border-indigo-500 pl-4 py-2 rounded-sm">
                        <h4 className="font-semibold capitalize">{key.replace(/([A-Z])/g, " $1")}</h4>
                        <p className="text-gray-600 dark:text-gray-300">{val}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            Gallery
            {/* {activeTab === "gallery" && (
              <motion.div initial="hidden" animate="visible" variants={fadeIn as any}>
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><Camera className="w-6 h-6 text-indigo-600" /> Media Gallery</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.gallery.map((img, i) => (
                      <motion.div key={i} whileHover={{ scale: 1.02 }} className="h-48 rounded-lg overflow-hidden cursor-pointer relative" onClick={() => openImageModal(i)}>
                        <img src={img} alt={`${project.title} ${i+1}`} className="w-full h-full object-cover transition-transform duration-300" />
                        <div className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-colors flex items-center justify-center">
                          <Share2 className="text-white opacity-0 hover:opacity-100 transition-opacity" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )} */}

            {/* Roadmap / Timeline */}
            {activeTab === "timeline" && project.timeline && (
              <motion.div initial="hidden" animate="visible" variants={fadeIn as any}>
                <div id="roadmap" className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><Calendar className="w-6 h-6 text-indigo-600" /> Project Roadmap</h3>

                  <div className="relative">
                    {/* vertical line */}
                    <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-indigo-200 dark:bg-indigo-900" />
                    <div className="space-y-8">
                      {project.timeline.map((step, idx) => (
                        <motion.div key={idx} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} className="relative pl-16">
                          <div className="absolute -left-3 top-0 w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white border-4 border-white dark:border-gray-800">
                            {renderStepIcon(step.icon)}
                          </div>
                          <div className="bg-white/70 dark:bg-gray-900/60 p-4 rounded-lg shadow-sm backdrop-blur-sm">
                            <div className="flex items-center justify-between">
                              <h4 className="font-semibold">{step.milestone}</h4>
                              <span className="text-sm text-gray-500 dark:text-gray-400">{step.date}</span>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{step.details}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Team */}
            {activeTab === "team" && project.teamMembers && (
              <motion.div initial="hidden" animate="visible" variants={fadeIn as any}>
                <div id="team" className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3"><Users className="w-6 h-6 text-indigo-600" /> Team Members</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.teamMembers.map((m, idx) => (
                      <motion.div key={idx} whileHover={{ scale: 1.02 }} className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-br from-white to-indigo-50">
                        <img src={m.avatar} alt={m.name} className="w-16 h-16 rounded-full object-cover" />
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-bold">{m.name}</h4>
                              <p className="text-indigo-600 text-sm">{m.role}</p>
                            </div>
                            <div className="flex gap-2">
                              {m.linkedin && <a href={m.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-md bg-indigo-50"><Linkedin className="w-4 h-4 text-indigo-600" /></a>}
                              {m.email && <a href={`mailto:${m.email}`} className="p-2 rounded-md bg-indigo-50"><Clipboard className="w-4 h-4 text-indigo-600" /></a>}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{m.bio}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Challenges */}
            {activeTab === "challenges" && (
              <motion.div initial="hidden" animate="visible" variants={fadeIn as any}>
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><BarChart className="w-6 h-6 text-indigo-600" /> Challenges & Solutions</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {project.challenges?.map((c, i) => <li key={i} className="text-gray-600 dark:text-gray-300">{c}</li>)}
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-3"><Share2 className="w-6 h-6 text-indigo-600" /> Applications</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {project.applications?.map((a, i) => <li key={i} className="text-gray-600 dark:text-gray-300">{a}</li>)}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-8">
            {/* Project At a Glance (glass + counters) */}
            <motion.div initial="hidden" animate="visible" variants={fadeIn as any} className="rounded-2xl p-6 bg-gradient-to-br from-white to-indigo-50 dark:from-gray-800 dark:to-slate-800 shadow-lg">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-lg font-bold flex items-center gap-2"><BarChart className="w-5 h-5 text-indigo-600" /> Project At a Glance</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Quick facts & progress</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Status</div>
                  <div className="mt-1 inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 px-3 py-1 rounded-full text-indigo-700 dark:text-indigo-200 font-semibold">{project.status}</div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <motion.div whileHover={{ scale: 1.02 }} className="p-3 rounded-lg bg-white/60 dark:bg-gray-900/60 border">
                  <div className="text-sm text-gray-500">Start</div>
                  <div className="font-semibold">{project.startDate}</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="p-3 rounded-lg bg-white/60 dark:bg-gray-900/60 border">
                  <div className="text-sm text-gray-500">Expected</div>
                  <div className="font-semibold">{project.expectedCompletion}</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="p-3 rounded-lg bg-white/60 dark:bg-gray-900/60 border">
                  <div className="text-sm text-gray-500">Budget</div>
                  <div className="font-semibold">{project.budget}</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="p-3 rounded-lg bg-white/60 dark:bg-gray-900/60 border">
                  <div className="text-sm text-gray-500">Team</div>
                  <div className="font-semibold">{project.teamMembers?.length ?? 0} members</div>
                </motion.div>
              </div>

              <div className="mt-4">
                <button onClick={handleContact} className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
                  <Share2 className="w-4 h-4" /> Contact Team
                </button>
              </div>
            </motion.div>

            {/* Share This Project */}
            <motion.div initial="hidden" animate="visible" variants={fadeIn as any} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold flex items-center gap-2"><Share2 className="w-5 h-5 text-indigo-600" /> Share This Project</h4>
                <p className="text-sm text-gray-500">Spread the word</p>
              </div>

              <div className="mt-4 flex gap-3">
                <motion.button whileTap={{ scale: 0.96 }} onClick={() => shareTo("facebook")} className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-blue-600 text-white">
                  <Facebook className="w-4 h-4" /> Facebook
                </motion.button>
                <motion.button whileTap={{ scale: 0.96 }} onClick={() => shareTo("twitter")} className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-sky-500 text-white">
                  <Twitter className="w-4 h-4" /> Twitter
                </motion.button>
                <motion.button whileTap={{ scale: 0.96 }} onClick={() => shareTo("linkedin")} className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-indigo-700 text-white">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </motion.button>
              </div>

              <div className="mt-4 flex gap-2">
                <button onClick={handleCopy} className="flex-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 flex items-center gap-2">
                  <LinkIcon className="w-4 h-4" /> {copied ? "Link copied!" : "Copy link"}
                </button>
                <a href={`mailto:?subject=${encodeURIComponent(project.title)}&body=${encodeURIComponent(window.location.href)}`} className="px-4 py-2 rounded-lg bg-indigo-600 text-white">
                  <Clipboard className="w-4 h-4" /> Email
                </a>
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div initial="hidden" animate="visible" variants={fadeIn as any} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
              <h4 className="text-lg font-semibold mb-3">Top Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 8).map((t, i) => <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">{t}</span>)}
                {project.technologies.length > 8 && <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">+{project.technologies.length - 8} more</span>}
              </div>
            </motion.div>

            {/* Other Projects */}
            <motion.div initial="hidden" animate="visible" variants={fadeIn as any} className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
              <h4 className="text-lg font-semibold mb-3">Other Projects</h4>
              <div className="space-y-3">
                {Object.entries(projectsData).filter(([k]) => k !== projectId).map(([k, p]) => (
                  <Link key={k} to={`/projects/${k}`} className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                    <img src={p.image} alt={p.title} className="w-12 h-12 rounded object-cover" />
                    <div>
                      <div className="font-medium">{p.title}</div>
                      <div className="text-sm text-gray-500">{p.status}</div>
                    </div>
                    <div className="ml-auto text-sm text-gray-400">View</div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </aside>
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {showImageModal && project && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
              <button onClick={closeImageModal} className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/40">
                <X className="w-6 h-6" />
              </button>

              <button onClick={() => navigateImage("prev")} className="absolute left-4 text-white p-2 rounded-full bg-black/30">
                <ArrowLeft className="w-6 h-6" />
              </button>

              <motion.img key={activeImage} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} src={project.gallery[activeImage]} alt={`${project.title} ${activeImage+1}`} className="max-w-4xl max-h-full object-contain rounded-md shadow-lg" />

              <button onClick={() => navigateImage("next")} className="absolute right-4 text-white p-2 rounded-full bg-black/30">
                <ArrowRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-6 text-white text-sm">{activeImage + 1} / {project.gallery.length}</div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Shivalik College of Engineering Drone Club. All rights reserved.</p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-2">Dehradun, Uttarakhand</p>
          </div>
        </footer>
      </main>

      {/* Small helpers */}
      <style>{`
        /* Subtle neon/glow accent for hero - adjust as desired */
        .glow {
          box-shadow: 0 10px 30px rgba(99,102,241,0.12);
        }
        /* For the shimmer skeleton (already used above) */
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
      `}</style>
    </div>
  );

  // helper: scroll to anchor in page
  function scrollToAnchor(hash: string) {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // fallback: small scroll
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  }
}
