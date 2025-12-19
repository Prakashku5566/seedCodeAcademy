import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      // Already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleCoursesClick = (e) => {
    console.log("location.pathname", location.pathname);
    e.preventDefault();
    if (location.pathname === '/courses') {
      // Already on home page, just scroll to courses
      document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home then scroll
      navigate('/courses');
      setTimeout(() => {
        document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
    setIsOpen(false);
  };

  // Scroll to courses if coming from another page with hash
  useEffect(() => {
    if (location.pathname === '/' && location.hash === '/courses') {
      setTimeout(() => {
        document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }, [location]);

  return (
    <nav className='fixed top-0 w-full bg-gray-950/80 backdrop-blur-lg z-50 border-b border-white/10'>
      <div className='max-w-7xl mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link to='/' onClick={handleHomeClick} className='text-2xl font-bold gradient-text'>
            SEEDCODE ACADEMY
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center gap-8'>
            <Link to='/' onClick={handleHomeClick} className='hover:text-primary transition'>
              Home
            </Link>
            <Link to='/courses' onClick={handleCoursesClick} className='hover:text-primary transition cursor-pointer'>
              Courses
            </Link>
            <Link to='/about' className='hover:text-primary transition'>
              About
            </Link>
            <Link to='/contact' className='hover:text-primary transition'>
              Contact
            </Link>
            <Link to='/get-started' onClick={handleCoursesClick} className='px-6 py-2 bg-gradient-to-r from-primary to-primary-dark rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition'>
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='md:hidden mt-4 pb-4 space-y-4'>
            <Link
              to='/'
              onClick={handleHomeClick}
              className='block hover:text-primary transition'
            >
              Home
            </Link>
            <Link
              to='/courses'
              onClick={handleCoursesClick}
              className='block hover:text-primary transition cursor-pointer'
            >
              Courses
            </Link>
            <Link
              to='/about'
              className='block hover:text-primary transition'
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to='/contact'
              className='block hover:text-primary transition'
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to='/courses'
              onClick={handleCoursesClick}
              className='block w-full px-6 py-2 bg-gradient-to-r from-primary to-primary-dark rounded-full font-semibold text-center'
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}


