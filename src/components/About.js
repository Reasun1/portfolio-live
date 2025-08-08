import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Globe, Users, Award } from 'lucide-react';
import profileImage from '../assets/sfundo-profile.jpg';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const features = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building complete web applications from frontend to backend with modern technologies"
    },
    {
      icon: Globe,
      title: "South African Developer",
      description: "Bringing unique perspectives and innovative solutions from the heart of Africa"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Experienced in mentoring peers and leading collaborative development projects"
    },
    {
      icon: Award,
      title: "Continuous Learning",
      description: "Committed to staying current with the latest technologies and best practices"
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
    <section id="about" className="section-padding bg-dark-900 relative overflow-hidden">
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
            <span className="text-white">About </span>
            <span className="gradient-text">Me</span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"
          />
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            I'm a passionate South African developer currently pursuing Level 4 IT & Computer Science at Elangeni College. 
            My journey in technology has been driven by curiosity and a desire to create meaningful solutions.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image and Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-xl opacity-30 animate-pulse-glow" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary-500/30">
                                     <img
                     src={profileImage}
                     alt="Sfundo Mkhwanazi - Full-Stack Developer"
                     className="w-full h-full object-cover"
                     onError={(e) => {
                       e.target.src = "https://via.placeholder.com/320x320/1e293b/ffffff?text=Sfundo+Mkhwanazi";
                     }}
                   />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center"
                >
                  <Code className="text-white" size={24} />
                </motion.div>
              </div>
            </motion.div>

            {/* Personal Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="text-center p-6 glass-effect rounded-lg">
                <div className="text-3xl font-bold text-primary-400 mb-2">3+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-6 glass-effect rounded-lg">
                <div className="text-3xl font-bold text-accent-400 mb-2">10+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-6 glass-effect rounded-lg">
                <div className="text-3xl font-bold text-purple-400 mb-2">5+</div>
                <div className="text-gray-400">Technologies</div>
              </div>
              <div className="text-center p-6 glass-effect rounded-lg">
                <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Story and Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Story */}
            <div className="space-y-6">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-3xl font-bold text-white"
              >
                My Journey
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="space-y-4 text-gray-300 leading-relaxed"
              >
                <p>
                  My passion for technology began at Elangeni College where I discovered my love for programming. 
                  I've completed Level 2 and 3 with excellent results in ISD, Maths, Life Skills, and Computer Programming.
                </p>
                <p>
                  I've had the privilege of mentoring my peers in programming, ISD, Life Skills, and Computer fundamentals, 
                  which has strengthened my communication and leadership skills.
                </p>
                <p>
                  My expertise spans the full development stack, from creating responsive user interfaces with React 
                  to building robust backend systems with Node.js and Python.
                </p>
              </motion.div>
            </div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 glass-effect rounded-lg border border-white/10 hover:border-primary-500/30 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="text-primary-400" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 