import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  ChevronDownIcon,
  CodeBracketIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ChevronUpIcon,
  Bars3Icon,
  ArrowTopRightOnSquareIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
// Skill icons using CSS shapes and gradients
const SkillIcon = ({ name, color }) => (
  <div className={`w-16 h-16 rounded-xl ${color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
    {name.slice(0, 2).toUpperCase()}
  </div>
);

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Sample data
  const skills = [
    { name: 'React', color: 'bg-gradient-to-br from-blue-400 to-blue-600' },
    { name: 'Node.js', color: 'bg-gradient-to-br from-green-400 to-green-600' },
    { name: 'Python', color: 'bg-gradient-to-br from-yellow-400 to-yellow-600' },
    { name: 'JavaScript', color: 'bg-gradient-to-br from-orange-400 to-orange-600' },
    { name: 'MySQL', color: 'bg-gradient-to-br from-cyan-400 to-cyan-600' },
    { name: 'Next.js', color: 'bg-gradient-to-br from-red-400 to-red-600' },
    { name: 'Git', color: 'bg-gradient-to-br from-gray-400 to-gray-600' },
    { name: 'MongoDB', color: 'bg-gradient-to-br from-green-500 to-green-700' }
  ];

  const projects = [
   {
  title: 'MedX - AI Medical Assistant',
  description: 'An AI-powered medical consultation assistant designed to simulate doctor-patient interaction.',
  tech: ['React.js', 'Python', 'LangChain', 'Pinecone', 'GEMINI API', 'Node.js'],
  liveDemo: '#', // Replace with live link if hosted
  github: 'https://github.com/usaidgithub/MediX/tree/master' // Replace with your actual GitHub link
},
    {
  title: 'SocialSphere - Social Media App',
  description: 'A dynamic social media platform where users post content and interact in real-time.',
  tech: ['Next.js', 'React', 'MongoDB', 'Cloudinary', 'JWT'],
  liveDemo: 'https://social-sphere-cyan.vercel.app/', // Placeholder until hosted
  github: 'https://github.com/usaidgithub/SocialSphere' // Replace with actual repo link
},
    {
  title: 'MoneyMat - Personal Finance App',
 description: 'A smart finance app to manage income, expenses, budgets with clear visual insights.',
  tech: ['HTML','MySQL', 'Node.js', 'Chart.js', 'CSS', 'JWT'],
  liveDemo: 'https://money-manager-9p85.onrender.com/', // Replace with actual deployment link if hosted
  github: 'https://github.com/usaidgithub/Money-Manager' // Replace with your actual repo
}
  ];

  const education = [
    {
    degree: 'Bachelor of Engineering in Computer Engineering',
    institution: 'MH Saboo Siddik College of Engineering, Mumbai University',
    year: '2022 - 2026 (Ongoing)',
    description: 'Focused on software development, algorithms, and real-world project implementation through hackathons and coursework.'
  },
  {
    degree: 'Full Stack Development',
    institution: 'Project-based Learning & Hackathons',
    year: '2022 - Present',
    description: 'Gained practical experience in React, Node.js, Firebase, MySQL, and REST APIs through personal projects and competitions.'
  }
  ];

  // Scroll handling
  useEffect(() => {

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                       ${activeSection === item.id
                      ? 'text-blue-400 bg-blue-900/20' // Dark mode specific active state
                      : 'text-gray-300 hover:text-blue-400' // Dark mode specific inactive state
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button - Text color adjusted for dark mode */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-md hover:bg-gray-800 text-gray-300 hover:text-blue-400 transition-colors"
              >
                {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 border-t border-gray-700"> {/* Always dark mode */}
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200
                       ${activeSection === item.id
                      ? 'text-blue-400 bg-blue-900/20' // Dark mode specific active state
                      : 'text-gray-300 hover:text-blue-400' // Dark mode specific inactive state
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
              <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden shadow-xl dark:shadow-sm ring-4 ring-blue-500 dark:ring-purple-500">
                <Image
                  src="/your-avatar.png" // Make sure this path is correct
                  alt="Usaid Sayed's Avatar"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              Usaid Sayed
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-black dark:text-gray-300">
              Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-600 dark:text-gray-300 leading-relaxed">
              Passionate about creating innovative web applications with modern technologies.
              I love turning complex problems into simple, beautiful and intuitive designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
            <div className="mt-12 animate-bounce">
              <ChevronDownIcon className="h-8 w-8 mx-auto text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
        {/* Optional: Add a subtle background pattern or shape for visual interest */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/10 dark:to-purple-900/10 opacity-30 pointer-events-none z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 text-gray-900 dark:text-white">
              A Little About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl dark:shadow-sm">
            <div className="grid md:grid-cols-2 gap-12 items-start"> {/* Changed items-center to items-start for better top alignment */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                  Hello! I&apos;m Usaid Sayed, a passionate developer crafting digital experiences.
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                  I&apos;m a passionate full-stack developer and computer engineering student with hands-on experience in building dynamic and responsive web applications. I specialize in the React ecosystem, Node.js, Python, and modern web technologies, with a strong focus on crafting clean user interfaces and robust backend systems.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                  Over the past few years, I&apos;ve worked on multiple impactful projects through hackathons, freelance work, and personal development, building real-world applications that solve meaningful problems. I&apos;m constantly exploring new technologies, contributing to collaborative projects, and refining my skills through continuous learning.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                  Whether it&apos;s leading a team in a national hackathon or building AI-integrated platforms, I thrive on turning complex ideas into functional, user-friendly solutions.
                </p>
                <div className="flex flex-wrap gap-3 mt-8"> {/* Adjusted gap and added margin-top */}
                  <span className="px-5 py-2 bg-blue-100 dark:bg-blue-800/30 text-blue-800 dark:text-blue-300 rounded-full text-md font-medium shadow-sm">
                    Problem Solver
                  </span>
                  <span className="px-5 py-2 bg-green-100 dark:bg-green-800/30 text-green-800 dark:text-green-300 rounded-full text-md font-medium shadow-sm">
                    Team Player
                  </span>
                  <span className="px-5 py-2 bg-purple-100 dark:bg-purple-800/30 text-purple-800 dark:text-purple-300 rounded-full text-md font-medium shadow-sm">
                    Continuous Learner
                  </span>
                </div>
              </div>
              <div className="space-y-6 md:pl-8"> {/* Added padding to the right column for separation */}
                <div className="flex items-start space-x-4"> {/* Changed items-center to items-start for icon alignment */}
                  <MapPinIcon className="h-7 w-7 text-blue-600 dark:text-blue-400 flex-shrink-0" /> {/* Larger icon, flex-shrink */}
                  <div>
                    <p className="font-semibold text-lg text-gray-800 dark:text-gray-200">Location</p>
                    <span className="text-gray-600 dark:text-gray-300">Mumbai, India</span>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <EnvelopeIcon className="h-7 w-7 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg text-gray-800 dark:text-gray-200">Email</p>
                    <a href="mailto:sayedusaid49@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">sayedusaid49@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CodeBracketIcon className="h-7 w-7 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg text-gray-800 dark:text-gray-200">Experience</p>
                    <span className="text-gray-600 dark:text-gray-300">
                      2+ years of hands-on experience through self-learning, academic projects, and hackathons
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              My Expertise & Toolkit
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="p-6 rounded-lg shadow-lg dark:shadow-xl bg-white dark:bg-gray-800
                     text-center group hover:scale-105 transition-transform duration-300
                     transform hover:shadow-2xl hover:border-blue-500 dark:hover:border-purple-500 border border-transparent
                     flex flex-col items-center justify-center space-y-4"
                style={{ animationDelay: `${index * 80}ms` }} // Slightly faster staggered animation
              >
                <div className="mb-2">
                  <SkillIcon name={skill.name} color={skill.color} />
                </div>
                <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  {skill.name}
                </h3>
                {/* Optional: Add a small description or level indicator here */}
                {/* <p className="text-sm text-gray-500 dark:text-gray-400">Advanced</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-6 flex items-center justify-center">
                  <CodeBracketIcon className="h-16 w-16 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveDemo} 
                  target="_blank"
                  rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-6"></div>
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <h4 className="text-lg font-semibold text-blue-600 mb-2">{edu.institution}</h4>
                    <p className="text-gray-500 dark:text-gray-400 mb-3">{edu.year}</p>
                    <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              I&apos;m always open to connecting! Whether it&apos;s a project, job opportunity, or just a tech chat — feel free to reach out via email or connect with me on LinkedIn and GitHub.
            </p>
            <div className="space-y-4 text-left md:text-center md:flex md:flex-col md:items-center">
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-6 w-6 text-blue-600" />
                <a href="mailto:sayedusaid49@gmail.com" className="text-gray-800 dark:text-white hover:underline">sayedusaid49@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-6 w-6 text-blue-600" />
                <span className="text-gray-800 dark:text-white">9004818231</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="h-6 w-6 text-blue-600" />
                <span className="text-gray-800 dark:text-white">Mumbai, India</span>
              </div>
              <div className="flex space-x-5 mt-6">
                <a
                  href="https://www.linkedin.com/in/usaid-sayed-481b892b5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-110"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://github.com/usaidgithub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 dark:text-white hover:text-gray-600 transition-transform transform hover:scale-110"
                >
                  <FaGithub size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Usaid Portfolio. All rights reserved.</p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 z-40"
        >
          <ChevronUpIcon className="h-6 w-6 mx-auto" />
        </button>
      )}
    </div>
  );
};

export default Portfolio;