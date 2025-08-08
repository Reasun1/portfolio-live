import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowRight, Code, Database, Palette } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Student Management System",
      description: "A comprehensive CRUD application for school record keeping with Node.js backend and modern front-end.",
      longDescription: "Built a full-stack student management system that handles student registration, grade tracking, and administrative functions. Features include user authentication, data validation, and responsive design.",
      image: "https://via.placeholder.com/600x400/1e293b/ffffff?text=Student+Management+System",
      technologies: ["Node.js", "JavaScript", "HTML/CSS", "CRUD", "MongoDB"],
      github: "https://github.com/sfundomadondo/student-management",
      live: "https://student-management-demo.com",
      category: "Full-Stack",
      icon: Database
    },
    {
      id: 2,
      title: "Trading Journal App",
      description: "A comprehensive trading log tool for recording trade setups, risk calculations, and post-trade reviews.",
      longDescription: "Developed a sophisticated trading journal application that helps traders track performance and improve strategies. Includes data visualization, risk management tools, and performance analytics.",
      image: "https://via.placeholder.com/600x400/1e293b/ffffff?text=Trading+Journal+App",
      technologies: ["React.js", "Node.js", "SQL", "Chart.js", "Data Analysis"],
      github: "https://github.com/sfundomadondo/trading-journal",
      live: "https://trading-journal-demo.com",
      category: "Web Application",
      icon: Code
    },
    {
      id: 3,
      title: "FNB App Academy Project",
      description: "Full-stack development project completed during FNB App Academy training.",
      longDescription: "Comprehensive full-stack project covering front-end, back-end, APIs, databases, UX design, and app deployment. Demonstrates end-to-end development capabilities.",
      image: "https://via.placeholder.com/600x400/1e293b/ffffff?text=FNB+App+Academy+Project",
      technologies: ["Full-Stack", "APIs", "Databases", "UX Design", "Deployment"],
      github: "https://github.com/sfundomadondo/fnb-academy-project",
      live: "https://fnb-project-demo.com",
      category: "Full-Stack",
      icon: Palette
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="section-padding bg-dark-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-white">Featured </span>
            <span className="gradient-text">Projects</span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"
          />
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            A showcase of my recent work, demonstrating full-stack development skills 
            and innovative problem-solving approaches.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="relative group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Project Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-xl"
                >
                  <div className="relative aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary-500/80 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <AnimatePresence>
                      {hoveredProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center"
                        >
                          <div className="flex space-x-4">
                            <motion.a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
                            >
                              <ExternalLink size={20} />
                            </motion.a>
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                            >
                              <Github size={20} />
                            </motion.a>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Project Content */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center">
                      <project.icon className="text-primary-400" size={24} />
                    </div>
                    <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  <p className="text-gray-400 leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="button-primary"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="button-secondary"
                    >
                      <Github size={18} className="mr-2" />
                      View Code
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="max-w-2xl mx-auto p-8 glass-effect rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in Working Together?</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="button-primary"
            >
              <ArrowRight size={18} className="mr-2" />
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 