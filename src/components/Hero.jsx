import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const handleExploreClick = () => {
    navigate('/courses');
  }
  const handleWatchDemoClick = () => {
    window.open('https://youtu.be/R-92TckkNlY?si=S5ORScnG1r07KXIH', '_blank');
  }
  return (
    <section className='min-h-screen flex items-center justify-center relative overflow-hidden pt-20'>
      {/* Animated Background */}
      <div className='absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary-dark/20 animate-pulse-slow' />

      <div className='max-w-7xl mx-auto px-6 text-center relative z-10'>
        <h1 className='text-5xl md:text-7xl font-black mb-6 animate-slide-up'>
          <span className='gradient-text'>Master The Art</span>
          <br />
          <span className='text-white'>of Coding</span>
        </h1>

        <p className='text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in'>
          Transform your career with industry-leading courses taught by experts.
          Learn, build, and succeed in tech.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up'>
          <button onClick={handleExploreClick} className='px-8 py-4 bg-gradient-to-r from-primary to-primary-dark rounded-full font-semibold text-lg flex items-center gap-2 hover:shadow-2xl hover:shadow-primary/50 transition transform hover:scale-105'>
            Explore Courses <ArrowRight size={20} />
          </button>
          <button onClick={handleWatchDemoClick} className='px-8 py-4 border-2 border-primary rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-primary/10 transition'>
            <Play size={20} /> Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}
