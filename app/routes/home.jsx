import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

export function meta() {
  return [
    {title: "Allan - Software Developer"},
    {
      name: "description",
      content:
        "Portfolio of Allan, a skilled software developer specializing in UI/UX design, development, and optimization.",
    },
  ];
}

export default function Home() {
  const [show, setShow] = useState({
    project1: false,
    project2: false,
    project3: false,
    navbar: false,
  });

  const toggleShow = (project) => {
    setShow({...show, [project]: !show[project]});
  };

  // Animation variants
  const fadeIn = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0, transition: {duration: 0.5}},
  };

  const staggerChildren = {
    visible: {transition: {staggerChildren: 0.1}},
  };

  const scaleUp = {
    hidden: {opacity: 0, scale: 0.9},
    visible: {opacity: 1, scale: 1, transition: {duration: 0.3}},
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50 py-4 px-6 lg:px-8 border-b border-gray-800">
        <div className="flex justify-between items-center">
          <motion.img
            initial={{opacity: 0, x: -20}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.5}}
            className="w-16 h-16 rounded-full object-cover"
            src="/Gemini_Generated_Image_g495wxg495wxg495-Photoroom.png"
            alt="Logo"
          />

          {/* Desktop Navigation */}
          <motion.ul
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 0.2, duration: 0.5}}
            className="hidden lg:flex lg:gap-12 text-lg"
          >
            <li className="hover:text-green-400 transition-colors duration-300">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-green-400 transition-colors duration-300">
              <a href="#contact">Contact</a>
            </li>
            <li className="hover:text-green-400 transition-colors duration-300">
              <a href="#projects">Projects</a>
            </li>
          </motion.ul>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{scale: 0.95}}
            onClick={() => toggleShow("navbar")}
            className="lg:hidden p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <img className="w-6 h-6" src="/align-justify (1).svg" alt="Menu" />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {show.navbar && (
            <motion.div
              initial={{opacity: 0, height: 0}}
              animate={{opacity: 1, height: "auto"}}
              exit={{opacity: 0, height: 0}}
              transition={{duration: 0.3}}
              className="lg:hidden mt-4 bg-gray-800 rounded-lg overflow-hidden"
            >
              <ul className="py-4 px-2">
                <motion.li
                  whileHover={{x: 5}}
                  className="py-3 px-4 hover:bg-gray-700 rounded-md transition-colors"
                >
                  <a href="#home" className="block">
                    Home
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{x: 5}}
                  className="py-3 px-4 hover:bg-gray-700 rounded-md transition-colors"
                >
                  <a href="#about" className="block">
                    About
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{x: 5}}
                  className="py-3 px-4 hover:bg-gray-700 rounded-md transition-colors"
                >
                  <a href="#projects" className="block">
                    Projects
                  </a>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 lg:px-8 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: "url('/6676b800-f58a-4e2b-a311-414dd496eb59.jpeg')",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <motion.div
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.7}}
            className="w-64 h-64 lg:w-96 lg:h-96 mx-auto lg:mx-0"
          >
            <img
              className="rounded-full w-full h-full object-cover border-4 border-green-500 shadow-lg shadow-green-500/20"
              src="/IMG_0584 copy-Photoroom.png"
              alt="Allan"
            />
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left max-w-2xl"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">I'm Allan</h1>
            <span className="text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-lime-300 to-green-500 bg-clip-text text-transparent">
              Software Developer
            </span>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              I build softwares that actually have emotions embedded into them.
              Coding is not just a skill but it's also a tool to streamline the
              lives of others in what small or big way. Work with me I never
              disappoint.
            </p>
            <motion.button
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-lime-500 to-green-500 rounded-xl font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
            >
              About Me
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
            className="text-3xl lg:text-4xl font-bold text-center mb-16"
          >
            What I Do
          </motion.h2>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Service 1 */}
            <motion.div
              variants={scaleUp}
              className="bg-gray-900 p-8 rounded-2xl flex flex-col items-center text-center border border-gray-700 hover:border-green-400 transition-colors duration-300"
            >
              <div className="w-20 h-20 bg-green-900 bg-opacity-30 rounded-2xl flex items-center justify-center mb-6">
                <img
                  className="w-10 h-10"
                  src="/palette.svg"
                  alt="UI/UX Design"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">UI and UX Design</h3>
              <motion.button
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                onClick={() => toggleShow("project1")}
                className="px-6 py-2 bg-teal-800 rounded-lg hover:bg-teal-700 transition-colors"
              >
                {show.project1 ? "Show Less" : "See More"}
              </motion.button>

              <AnimatePresence>
                {show.project1 && (
                  <motion.p
                    initial={{opacity: 0, height: 0}}
                    animate={{opacity: 1, height: "auto"}}
                    exit={{opacity: 0, height: 0}}
                    transition={{duration: 0.3}}
                    className="mt-6 text-gray-300 overflow-hidden"
                  >
                    I design websites for businesses and make them as
                    eye-catching as they can be
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              variants={scaleUp}
              className="bg-gray-900 p-8 rounded-2xl flex flex-col items-center text-center border border-gray-700 hover:border-green-400 transition-colors duration-300"
            >
              <div className="w-20 h-20 bg-green-900 bg-opacity-30 rounded-2xl flex items-center justify-center mb-6">
                <img
                  className="w-10 h-10"
                  src="/laptop-minimal.svg"
                  alt="Software Development"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Software Development
              </h3>
              <motion.button
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                onClick={() => toggleShow("project2")}
                className="px-6 py-2 bg-teal-800 rounded-lg hover:bg-teal-700 transition-colors"
              >
                {show.project2 ? "Show Less" : "See More"}
              </motion.button>

              <AnimatePresence>
                {show.project2 && (
                  <motion.p
                    initial={{opacity: 0, height: 0}}
                    animate={{opacity: 1, height: "auto"}}
                    exit={{opacity: 0, height: 0}}
                    transition={{duration: 0.3}}
                    className="mt-6 text-gray-300 overflow-hidden"
                  >
                    I hard code the websites according to the specified
                    conditions and preferences
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              variants={scaleUp}
              className="bg-gray-900 p-8 rounded-2xl flex flex-col items-center text-center border border-gray-700 hover:border-green-400 transition-colors duration-300"
            >
              <div className="w-20 h-20 bg-green-900 bg-opacity-30 rounded-2xl flex items-center justify-center mb-6">
                <img
                  className="w-10 h-10"
                  src="/chart-column-increasing.svg"
                  alt="Systems Optimization"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Systems Optimization
              </h3>
              <motion.button
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                onClick={() => toggleShow("project3")}
                className="px-6 py-2 bg-teal-800 rounded-lg hover:bg-teal-700 transition-colors"
              >
                {show.project3 ? "Show Less" : "See More"}
              </motion.button>

              <AnimatePresence>
                {show.project3 && (
                  <motion.p
                    initial={{opacity: 0, height: 0}}
                    animate={{opacity: 1, height: "auto"}}
                    exit={{opacity: 0, height: 0}}
                    transition={{duration: 0.3}}
                    className="mt-6 text-gray-300 overflow-hidden"
                  >
                    I make sure the existing systems are properly working and
                    that growing websites are well running without any system
                    malfunctions
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">
          <motion.div
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
            className="text-center lg:text-left"
          >
            <p className="font-bold text-6xl lg:text-7xl bg-gradient-to-r from-lime-300 to-green-500 bg-clip-text text-transparent">
              1<br />
              <span className="text-4xl lg:text-5xl text-white">
                Year of experience
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
            className="grid grid-cols-2 gap-6 w-full max-w-md"
          >
            {[
              {number: "10+", text: "Clients"},
              {number: "1 Year", text: "Experience"},
              {number: "10+", text: "Completed projects"},
              {number: "122+", text: "Completed Tasks"},
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{scale: 1.05}}
                className="p-6 bg-gray-800 rounded-xl text-center border border-gray-700 hover:border-green-400 transition-colors"
              >
                <p className="text-2xl lg:text-3xl font-semibold mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-400">{stat.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-16 gap-6">
            <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5}}
              viewport={{once: true}}
            >
              <h2 className="text-3xl lg:text-4xl font-bold">
                Featured Projects
              </h2>
              <p className="text-gray-400 mt-2">
                List of my side and main projects
              </p>
            </motion.div>

            <motion.button
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="px-6 py-3 bg-gradient-to-r from-lime-500 to-green-500 rounded-xl font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
            >
              See All
            </motion.button>
          </div>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{once: true}}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "EduFind",
                image: "/Screenshot 2025-09-20 204543.png",
                tags: ["REACT", "TAILWIND CSS"],
                link: "https://edufind-ryn2.onrender.com/",
              },
              {
                title: "Protiba",
                image: "/Screenshot 2025-09-20 203806.png",
                tags: ["REACT", "Javascript", "NodeJs"],
                link: "https://protiba.onrender.com/",
              },
              {
                title: "MACISTA LIMITED",
                image: "/Screenshot 2025-09-20 203520.png",
                tags: ["REACT", "Javascript", "EXPRESS Js"],
                link: "https://www.macista.co.ke/",
              },
              {
                title: "TikTak Toe Game",
                image: "/Screenshot 2025-09-20 203447.png",
                tags: ["HTML & CSS", "Javascript"],
                link: "https://tiktaktoe-game.onrender.com/",
              },
              {
                title: "Tip Calculator For pc",
                image: "/Screenshot 2025-05-10 001641.png",
                tags: ["HTML & CSS", "Javascript"],
                link: "https://tipclaculator.vercel.app/",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={scaleUp}
                className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-green-400 transition-colors duration-300"
              >
                <div className="p-6">
                  <div className="overflow-hidden rounded-xl mb-4">
                    <motion.img
                      whileHover={{scale: 1.05}}
                      transition={{duration: 0.3}}
                      className="w-full h-48 object-cover"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 text-sm rounded-lg border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.a
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.95}}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 bg-gray-800 text-center rounded-xl hover:bg-gray-700 transition-colors"
                  >
                    View Project
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 lg:px-8 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
            className="mb-10"
          >
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Let's work together on your next Project
            </h3>
            <p className="text-gray-400 text-lg">
              Streamline your business endeavors with a well functioning
              software
            </p>
          </motion.div>

          <motion.button
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            className="px-8 py-4 bg-gradient-to-r from-lime-500 to-green-500 rounded-xl font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 mb-8"
          >
            Contact Me!
          </motion.button>

          <motion.p
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.2, duration: 0.5}}
            viewport={{once: true}}
            className="text-xl"
          >
            (+254) 792624342
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <motion.p
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
            className="text-lg font-medium mb-8"
          >
            You can also follow me on all my socials
          </motion.p>

          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
            className="flex justify-center gap-8 mb-8"
          >
            {[
              {
                icon: "/linkedin.svg",
                link: "https://www.linkedin.com/in/allan-kirimi-31ba92323/",
              },
              {icon: "/facebook.svg", link: "#"},
              {
                icon: "/instagram.svg",
                link: "https://www.codewars.com/users/dr_sigma",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{scale: 1.2, y: -5}}
                whileTap={{scale: 0.9}}
                className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center hover:bg-green-900 hover:bg-opacity-20 transition-colors"
              >
                <img className="w-6 h-6" src={social.icon} alt="Social media" />
              </motion.a>
            ))}
          </motion.div>

          <motion.p
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5}}
            viewport={{once: true}}
            className="text-gray-400 text-sm"
          >
            Made By Allan <span className="text-green-400">@ 2025</span>
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
