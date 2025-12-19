import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, BookOpen, Award, CheckCircle, PlayCircle, Code, ChevronRight, Users, Star, Target, Zap } from "lucide-react";
import { courses } from "../data/courses";

export default function CoursePage() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  const [activeModule, setActiveModule] = useState(0);

  if (!course) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold mb-4'>Course Not Found</h1>
          <Link to='/' className='text-primary hover:underline'>
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='pt-24 min-h-screen'>
      {/* Hero Section with Gradient Background */}
      <div className='relative overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-purple-500/10'></div>
        <div className='absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl'></div>
        <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl'></div>
        <div className='max-w-7xl mx-auto px-6 py-12 relative z-10'>
          {/* Back Button */}
          <Link
            to='/courses'
            className='inline-flex items-center gap-2 px-4 py-2 glass-card hover:bg-white/10 transition mb-8 group'
          >
            <ArrowLeft size={20} className='group-hover:-translate-x-1 transition-transform' /> Back to Courses
          </Link>

          {/* Course Header */}
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <span className='px-4 py-2 bg-primary/20 text-primary rounded-full font-semibold text-sm inline-block mb-6 animate-pulse'>
                {course.tag}
              </span>
              <h1 className='text-5xl lg:text-6xl font-black mb-6 gradient-text leading-tight'>
                {course.title}
              </h1>
              <p className='text-xl text-gray-300 mb-8 leading-relaxed'>
                {course.description}
              </p>

              {/* Stats Grid */}
              <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8'>
                <div className='glass-card p-4 text-center'>
                  <Clock className='text-primary mx-auto mb-2' size={24} />
                  <p className='text-sm text-gray-400'>Duration</p>
                  <p className='font-bold'>{course.duration.split(' ')[0]}</p>
                </div>
                <div className='glass-card p-4 text-center'>
                  <BookOpen className='text-primary mx-auto mb-2' size={24} />
                  <p className='text-sm text-gray-400'>Modules</p>
                  <p className='font-bold'>{course.modules}</p>
                </div>
                <div className='glass-card p-4 text-center'>
                  <Users className='text-primary mx-auto mb-2' size={24} />
                  <p className='text-sm text-gray-400'>Students</p>
                  <p className='font-bold'>500+</p>
                </div>
                <div className='glass-card p-4 text-center'>
                  <Star className='text-primary mx-auto mb-2' size={24} />
                  <p className='text-sm text-gray-400'>Rating</p>
                  <p className='font-bold'>4.9/5</p>
                </div>
              </div>

              {/* Price and CTA */}
              <div className='flex flex-wrap items-center gap-6'>
                <div>
                  <span className='text-gray-400 line-through text-lg'>₹{(course.price * 1.5).toLocaleString()}</span>
                  <span className='text-5xl font-black gradient-text ml-3'>₹{course.price.toLocaleString()}</span>
                </div>
                <button className='px-10 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition transform hover:scale-105 flex items-center gap-2'>
                  <Zap size={20} /> Enroll Now
                </button>
              </div>
            </div>

            {/* Course Icon Card */}
            <div className='hidden lg:block'>
              <div className='glass-card p-6 text-center relative overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10'></div>
                <div className="text-9xl relative z-10">
                  {course.certificate ? (
                    <img
                      src={course.certificate}
                      alt={course.title}
                      className="h-full w-full object-contain"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  ) : (
                    course.icon
                  )}
                </div>

                <div className='mt-6 relative z-10'>
                  <div className='flex items-center justify-center gap-2 text-primary mb-2'>
                    <Award size={24} />
                    <span className='font-semibold'>Certificate Included</span>
                  </div>
                  <p className='text-gray-400'>Industry-recognized certification upon completion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-6 py-16'>
        {/* Section Title */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-black gradient-text mb-4'>
            Course Curriculum
          </h2>
          <p className='text-xl text-gray-400'>
            Master {course.modules} comprehensive modules with hands-on projects
          </p>
        </div>

        {/* Module Navigation Tabs */}
        <div className='mb-8'>
          <div className='flex gap-2 overflow-x-auto pb-4 scrollbar-hide'>
            {course.curriculum?.map((module, index) => (
              <button
                key={index}
                onClick={() => setActiveModule(index)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold whitespace-nowrap transition-all duration-300 ${activeModule === index
                  ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/30 scale-105'
                  : 'glass-card hover:bg-white/10'
                  }`}
              >
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${activeModule === index ? 'bg-white/20' : 'bg-primary/20 text-primary'
                  }`}>
                  {index + 1}
                </span>
                <span className='hidden sm:inline'>Module {index + 1}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Module Progress Bar */}
        <div className='mb-12'>
          <div className='flex items-center gap-2 mb-4'>
            <span className='text-gray-400'>Progress</span>
            <span className='text-primary font-bold'>{activeModule + 1} / {course.curriculum?.length}</span>
          </div>
          <div className='w-full h-2 bg-white/10 rounded-full overflow-hidden'>
            <div
              className='h-full bg-gradient-to-r from-primary to-purple-500 rounded-full transition-all duration-500'
              style={{ width: `${((activeModule + 1) / (course.curriculum?.length || 1)) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Active Module Content */}
        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Module List Sidebar */}
          <div className='lg:col-span-1 space-y-3'>
            {course.curriculum?.map((module, index) => (
              <div
                key={index}
                onClick={() => setActiveModule(index)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${activeModule === index
                  ? 'bg-gradient-to-r from-primary/20 to-purple-500/20 border-l-4 border-primary'
                  : 'glass-card hover:bg-white/5'
                  }`}
              >
                <div className='flex items-center gap-3'>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeModule === index ? 'bg-primary text-white' : 'bg-white/10'
                    }`}>
                    {activeModule > index ? (
                      <CheckCircle size={20} />
                    ) : activeModule === index ? (
                      <PlayCircle size={20} />
                    ) : (
                      <span className='font-bold'>{index + 1}</span>
                    )}
                  </div>
                  <div className='flex-1'>
                    <h4 className={`font-semibold truncate ${activeModule === index ? 'text-primary' : ''}`}>
                      {module.title}
                    </h4>
                    <p className='text-sm text-gray-400'>{module.weeks}</p>
                  </div>
                  <ChevronRight size={20} className={`transition-transform ${activeModule === index ? 'rotate-90 text-primary' : 'text-gray-500'}`} />
                </div>
              </div>
            ))}
          </div>

          {/* Module Details */}
          <div className='lg:col-span-2'>
            {course.curriculum?.[activeModule] && (
              <div className='glass-card overflow-hidden animate-fade-in'>
                {/* Module Header */}
                <div className='bg-gradient-to-r from-primary/20 to-purple-500/20 p-8'>
                  <div className='flex items-center gap-3 mb-4'>
                    <span className='w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-xl font-bold'>
                      {activeModule + 1}
                    </span>
                    <div>
                      <p className='text-primary font-semibold'>{course.curriculum[activeModule].weeks}</p>
                      <h3 className='text-2xl lg:text-3xl font-bold'>
                        {course.curriculum[activeModule].title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Topics */}
                <div className='p-8'>
                  <h4 className='text-xl font-bold mb-6 flex items-center gap-2'>
                    <Target className='text-primary' size={24} />
                    What You'll Learn
                  </h4>
                  <div className='grid sm:grid-cols-2 gap-4 mb-8'>
                    {course.curriculum[activeModule].topics.map((topic, i) => (
                      <div
                        key={i}
                        className='flex items-start gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition group'
                      >
                        <div className='w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition'>
                          <CheckCircle size={16} className='text-primary group-hover:text-white' />
                        </div>
                        <span className='text-gray-300 leading-relaxed'>{topic}</span>
                      </div>
                    ))}
                  </div>

                  {/* Project Section */}
                  {course.curriculum[activeModule].project && (
                    <div className='bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/30 rounded-xl p-6'>
                      <div className='flex items-start gap-4'>
                        <div className='w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0'>
                          <Code size={24} />
                        </div>
                        <div>
                          <h4 className='text-lg font-bold text-primary mb-2'>🚀 Hands-on Project</h4>
                          <p className='text-xl font-semibold text-white'>
                            {course.curriculum[activeModule].project}
                          </p>
                          <p className='text-gray-400 mt-2'>
                            Build a real-world project to solidify your learning
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className='flex justify-between mt-8 pt-6 border-t border-white/10'>
                    <button
                      onClick={() => setActiveModule(Math.max(0, activeModule - 1))}
                      disabled={activeModule === 0}
                      className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition ${activeModule === 0
                        ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                        : 'glass-card hover:bg-white/10'
                        }`}
                    >
                      <ArrowLeft size={18} /> Previous Module
                    </button>
                    <button
                      onClick={() => setActiveModule(Math.min((course.curriculum?.length || 1) - 1, activeModule + 1))}
                      disabled={activeModule === (course.curriculum?.length || 1) - 1}
                      className={`px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition ${activeModule === (course.curriculum?.length || 1) - 1
                        ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-primary to-primary-dark hover:shadow-lg hover:shadow-primary/30'
                        }`}
                    >
                      Next Module <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className='mt-16 glass-card p-12 text-center relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10'></div>
          <div className='relative z-10'>
            <h3 className='text-3xl lg:text-4xl font-black mb-4 gradient-text'>Ready to Start Your Journey?</h3>
            <p className='text-xl text-gray-400 mb-8 max-w-2xl mx-auto'>
              Join thousands of students who have transformed their careers with {course.title}
            </p>
            <div className='flex flex-wrap justify-center gap-4'>
              <button className='px-10 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition transform hover:scale-105'>
                Enroll Now - ₹{course.price.toLocaleString()}
              </button>
              <button className='px-10 py-4 glass-card hover:bg-white/10 rounded-full font-bold text-lg transition'>
                Download Syllabus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
