import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToCourses = () => {
    if (window.location.pathname === '/') {
      document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/courses';
    }
  };

  return (
    <footer className='border-t border-white/10 mt-20'>
      <div className='max-w-7xl mx-auto px-6 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
          {/* Company Info */}
          <div className='lg:col-span-2'>
            <h3 className='text-2xl font-bold mb-4 gradient-text'>
              SEEDCODE ACADEMY
            </h3>
            <p className='text-gray-400 mb-6 max-w-sm'>
              Empowering the next generation of developers with world-class
              education. Learn, build, and grow with industry-leading curriculum.
            </p>
            {/* Contact Info */}
            <div className='space-y-3 text-gray-400'>
              <div className='flex items-center gap-3'>
                <Mail size={18} className='text-primary' />
                <a href='mailto:hello@seedcode.academy' className='hover:text-primary transition'>
                  hello@seedcode.academy
                </a>
              </div>
              <div className='flex items-center gap-3'>
                <Phone size={18} className='text-primary' />
                <a href='tel:+919876543210' className='hover:text-primary transition'>
                  +91 98765 43210
                </a>
              </div>
              <div className='flex items-center gap-3'>
                <MapPin size={18} className='text-primary' />
                <span>Bengaluru, Karnataka, India</span>
              </div>
            </div>
            {/* Social Links */}
            <div className='flex gap-4 mt-6'>
              <a target="_blank" href='https://www.linkedin.com/in/seedcode-Academy-202b4439a/' className='w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:text-primary transition'>
                <Linkedin size={20} />
              </a>
              <a target="_blank" href='https://x.com/seedCodeAcademy' className='w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:text-primary transition'>
                <Twitter size={20} />
              </a>
              <a target="_blank" href='https://www.instagram.com/seedcode_academy/?igsh=ZmVmeWR1em43N2Yz#' className='w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:text-primary transition'>
                <Instagram size={20} />
              </a>
              <a target="_blank" href='https://www.youtube.com/@seedcodeacademy' className='w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:text-primary transition'>
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className='font-semibold mb-4 text-white'>Company</h4>
            <ul className='space-y-3 text-gray-400'>
              <li>
                <Link to='/about' className='hover:text-primary transition'>
                  About Us
                </Link>
              </li>
              <li>
                <Link to='/careers' className='hover:text-primary transition'>
                  Careers
                </Link>
              </li>
              <li>
                <Link to='/blog' className='hover:text-primary transition'>
                  Blog
                </Link>
              </li>
              <li>
                <Link to='/contact' className='hover:text-primary transition'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className='font-semibold mb-4 text-white'>Resources</h4>
            <ul className='space-y-3 text-gray-400'>
              <li>
                <Link to='/documentation' className='hover:text-primary transition'>
                  Documentation
                </Link>
              </li>
              <li>
                <Link to='/community' className='hover:text-primary transition'>
                  Community
                </Link>
              </li>
              <li>
                <Link to='/support' className='hover:text-primary transition'>
                  Support
                </Link>
              </li>
              <li>
                <Link to='/faq' className='hover:text-primary transition'>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className='font-semibold mb-4 text-white'>Legal</h4>
            <ul className='space-y-3 text-gray-400'>
              <li>
                <Link to='/privacy-policy' className='hover:text-primary transition'>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to='/terms-of-service' className='hover:text-primary transition'>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to='/refund-policy' className='hover:text-primary transition'>
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-white/10 mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-gray-400 text-center md:text-left'>
              © 2025 Seedcode Academy. All rights reserved.
            </p>
            <div className='flex gap-6 text-gray-400'>
              <button onClick={scrollToCourses} className='hover:text-primary transition'>
                Courses
              </button>
              <Link to='/about' className='hover:text-primary transition'>
                About
              </Link>
              <Link to='/contact' className='hover:text-primary transition'>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

