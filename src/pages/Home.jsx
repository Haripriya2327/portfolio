import PropTypes from "prop-types";

const PROJECTS_DATA = [
  {
    id: "click-rent",
    title: "Click & Rent",
    description: "A modern rental platform with intuitive user interface",
    url: "https://clickenrent.netlify.app",
  },
  {
    id: "weather-wise",
    title: "Weather Wise",
    description: "Real-time weather tracking application",
    url: "https://stormwatch.netlify.app/",
  },
  {
    id: "uriyadi",
    title: "Uriyadi",
    description: "Interactive gaming experience",
    url: "https://haripriya2327.github.io/uriyadi-projectOne/",
  },
  {
    id: "rock-paper-scissors",
    title: "Rock Paper Scissors",
    description: "Classic game with modern twist",
    url: "https://haripriyamohanasundaram.github.io/rps-play/",
  },
];

const ProjectCard = ({ project }) => (
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`View ${project.title} project - ${project.description}`}
    className="group bg-gray-900 hover:bg-gray-800 rounded-xl border border-gray-700 shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-2xl flex flex-col"
  >
    <div className="flex items-center justify-center h-32 bg-gradient-to-br from-yellow-500/20 via-gray-800 to-black">
      <span className="text-lg sm:text-xl font-bold text-yellow-400 text-center px-3">
        {project.title}
      </span>
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-yellow-400 mb-2">
        {project.title}
      </h3>
      <p className="text-gray-400 text-sm sm:text-base flex-1">
        {project.description}
      </p>
    </div>
  </a>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white font-sans">
      {/* Hero */}
      <header className="text-center py-20 px-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6">
          Hi, I'm <span className="text-yellow-400">Haripriya</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Electrical Engineer turned Software Developer with{" "}
          <strong>2 years of experience at TCS</strong>. Passionate about building elegant,
          efficient web applications that solve real-world problems.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="px-5 py-2 bg-yellow-400 text-black font-medium rounded-lg shadow-md hover:bg-yellow-300 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-5 py-2 border border-yellow-400 text-yellow-400 font-medium rounded-lg hover:bg-yellow-400 hover:text-black transition"
          >
            Contact Me
          </a>
        </div>
      </header>

      {/* About */}
      <section
        id="about"
        className="max-w-4xl mx-auto text-center px-6 py-16"
      >
        <h2 className="text-3xl font-bold mb-6">
          About <span className="text-yellow-400">Me</span>
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          With a background in <strong>Electrical Engineering</strong> and{" "}
          <strong>Software Development</strong>, I bring analytical thinking and
          creativity together. I thrive in crafting responsive, user-friendly
          applications with clean, maintainable code. My goal is to continue
          growing as a developer while contributing to impactful projects.
        </p>
      </section>

      {/* Projects */}
      <main id="projects" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          My <span className="text-yellow-400">Projects</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      {/* Contact */}
      <footer
        id="contact"
        className="bg-gray-900 border-t border-gray-800 py-12 px-6 text-center"
      >
        <h2 className="text-2xl font-bold mb-6">
          Get in <span className="text-yellow-400">Touch</span>
        </h2>
        <p className="text-gray-400 mb-6">
          I'm open to collaborations, opportunities, and conversations!
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:work.haripriya@gmail.com"
            className="text-yellow-400 hover:text-yellow-300 transition"
          >
            📧 Email
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 transition"
          >
            💼 LinkedIn
          </a>
          <a
            href="https://github.com/Haripriya2327"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 transition"
          >
            🖥️ GitHub
          </a>
        </div>
        <p className="text-gray-500 text-sm mt-8">
          © {new Date().getFullYear()} Haripriya. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
