import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const educationData = [
    {
      type: 'Current',
      title: 'Level 4 IT & Computer Science',
      institution: 'Elangeni College',
      period: '2025 - Present',
      description: 'Currently pursuing Level 4 with strong foundation in ISD, Maths, Life Skills, and Computer Programming.',
      achievements: [
        'Completed Level 2 and 3 with Pass/Developing results',
        'Tutored peers in ISD, CP, Life Skills, and Computer',
        'Class Support Leader - Academic and technical support'
      ],
      icon: GraduationCap,
      color: 'primary'
    },
    {
      type: 'Certification',
      title: 'Full-Stack Development',
      institution: 'FNB App Academy',
      period: 'Completed 2025',
      description: 'Comprehensive training in front-end, back-end, APIs, databases, UX design, and app deployment.',
      achievements: [
        'Front-end Development',
        'Back-end Development',
        'APIs and Databases',
        'UX Design',
        'App Deployment'
      ],
      icon: Award,
      color: 'accent'
    },
    {
      type: 'Certification',
      title: 'freeCodeCamp Certifications',
      institution: 'Online Platform',
      period: '2024 - 2025',
      description: 'Earned certifications in Responsive Web Design and JavaScript Algorithms & Data Structures.',
      achievements: [
        'Responsive Web Design',
        'JavaScript Algorithms & Data Structures'
      ],
      icon: BookOpen,
      color: 'purple'
    },
    {
      type: 'Education',
      title: 'Grade 12: Physics Studies with CAT',
      institution: 'Gabigabi Secondary School',
      period: 'Completed 2021',
      description: 'Completed high school education with focus on Physics and Computer Applications Technology.',
      achievements: [
        'Physics Studies',
        'Computer Applications Technology (CAT)',
        'Academic Excellence'
      ],
      icon: Calendar,
      color: 'orange'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: 'bg-primary-500/20 border-primary-500/30 text-primary-400',
      accent: 'bg-accent-500/20 border-accent-500/30 text-accent-400',
      purple: 'bg-purple-500/20 border-purple-500/30 text-purple-400',
      orange: 'bg-orange-500/20 border-orange-500/30 text-orange-400'
    };
    return colors[color] || colors.primary;
  };

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
    <section id="education" className="section-padding bg-dark-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 75% 25%, rgba(14, 165, 233, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 25% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`
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
            <span className="text-white">Education & </span>
            <span className="gradient-text">Certifications</span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8"
          />
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            My educational journey has been focused on building a strong foundation in technology 
            and continuous learning through certifications and practical experience.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-8"
        >
          {educationData.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative p-8 glass-effect rounded-xl border border-white/10 hover:border-primary-500/30 transition-all duration-300"
            >
              {/* Type Badge */}
              <div className="absolute -top-3 left-8">
                <span className={`px-4 py-1 rounded-full text-xs font-semibold ${getColorClasses(item.color)}`}>
                  {item.type}
                </span>
              </div>

              {/* Icon */}
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${getColorClasses(item.color)}`}>
                  <item.icon size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-lg text-primary-400 font-medium">{item.institution}</p>
                  <p className="text-gray-400 text-sm">{item.period}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2">
                <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                <ul className="space-y-2">
                  {item.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${getColorClasses(item.color).split(' ')[0]}`} />
                      <span className="text-gray-400 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Progress Bar for Current Education */}
              {item.type === 'Current' && (
                <div className="mt-6">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: '75%' } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="max-w-2xl mx-auto p-8 glass-effect rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-300 leading-relaxed">
              I'm committed to staying current with the latest technologies and best practices. 
              Currently exploring advanced React patterns, cloud technologies, and emerging web standards.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 