import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Database, 
  Palette, 
  Server, 
  GitBranch, 
  Users,
  Target,
  Clock,
  Lightbulb
} from 'lucide-react';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const technicalSkills = [
    { name: 'HTML & CSS', level: 95, icon: Code, color: 'primary' },
    { name: 'JavaScript', level: 90, icon: Code, color: 'primary' },
    { name: 'React.js', level: 85, icon: Code, color: 'primary' },
    { name: 'Node.js', level: 80, icon: Server, color: 'accent' },
    { name: 'Python', level: 75, icon: Code, color: 'purple' },
    { name: 'SQL', level: 80, icon: Database, color: 'accent' }
  ];

  const tools = [
    { name: 'Git & GitHub', icon: GitBranch, description: 'Version control and collaboration' },
    { name: 'VS Code', icon: Code, description: 'Primary code editor' },
    { name: 'Figma', icon: Palette, description: 'UI/UX design and prototyping' },
    { name: 'Agile', icon: Target, description: 'Project management methodology' },
    { name: 'Microsoft Office', icon: Code, description: 'Documentation and presentations' },
    { name: 'Google Suite', icon: Code, description: 'Collaboration tools' }
  ];

  const softSkills = [
    { name: 'Communication', icon: Users, description: 'Clear and effective communication' },
    { name: 'Team Collaboration', icon: Users, description: 'Working effectively in teams' },
    { name: 'Time Management', icon: Clock, description: 'Efficient project planning' },
    { name: 'Problem-Solving', icon: Lightbulb, description: 'Analytical thinking' },
    { name: 'Leadership', icon: Target, description: 'Guiding and mentoring others' },
    { name: 'Mentoring', icon: Users, description: 'Teaching and supporting peers' }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: 'from-primary-500 to-primary-600',
      accent: 'from-accent-500 to-accent-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600'
    };
    return colors[color] || colors.primary;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="section-padding bg-dark-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.1) 0%, transparent 50%)`
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
            <span className="text-white">Skills & </span>
            <span className="gradient-text">Technologies</span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"
          />
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive skill set spanning front-end and back-end development, 
            with a focus on modern technologies and collaborative problem-solving.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-white mb-8"
            >
              Programming Languages
            </motion.h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <skill.icon className="text-primary-400" size={20} />
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${getColorClasses(skill.color)} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-white mb-8"
            >
              Tools & Technologies
            </motion.h3>
            
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-4 glass-effect rounded-lg border border-white/10 hover:border-primary-500/30 transition-all duration-300"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <tool.icon className="text-primary-400" size={24} />
                    </div>
                    <h4 className="text-white font-semibold mb-1">{tool.name}</h4>
                    <p className="text-gray-400 text-xs">{tool.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Soft Skills */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl font-bold text-white text-center mb-8"
          >
            Soft Skills
          </motion.h3>
          
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                className="p-4 glass-effect rounded-lg border border-white/10 hover:border-accent-500/30 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-accent-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <skill.icon className="text-accent-400" size={24} />
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">{skill.name}</h4>
                <p className="text-gray-400 text-xs">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto p-8 glass-effect rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
              Currently exploring cloud platforms, advanced React patterns, and emerging web standards.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium">
                Cloud Technologies
              </span>
              <span className="px-4 py-2 bg-accent-500/20 text-accent-400 rounded-full text-sm font-medium">
                Advanced React
              </span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
                Web Standards
              </span>
              <span className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
                Performance Optimization
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 