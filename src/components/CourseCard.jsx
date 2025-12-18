import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";

export default function CourseCard({ course }) {
  return (
    <div className='glass-card overflow-hidden hover:border-primary/50 transition transform hover:-translate-y-2'>
      {/* Course Icon/Image */}
      <div className='h-48 bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-6xl'>
        {course.icon}
      </div>

      {/* Content */}
      <div className='p-6'>
        <span className='px-3 py-1 bg-primary/20 text-primary text-sm rounded-full font-semibold'>
          {course.tag}
        </span>

        <h3 className='text-2xl font-bold mt-4 mb-3'>{course.title}</h3>
        <p className='text-gray-400 mb-4'>{course.description}</p>

        <div className='flex items-center justify-between pt-4 border-t border-white/10'>
          <div className='flex items-center gap-2 text-gray-400'>
            <Clock size={18} />
            <span className='text-sm'>{course.duration}</span>
          </div>
          <div className='text-2xl font-bold text-primary'>
            ₹{course.price.toLocaleString()}
          </div>
        </div>

        <Link
          to={`/course/${course.id}`}
          className='mt-4 w-full px-6 py-3 bg-gradient-to-r from-primary to-primary-dark rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/50 transition'
        >
          View Details <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
