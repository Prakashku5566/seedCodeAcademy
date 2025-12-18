import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

const CoursesSection = () => {
  return (
    <section id="courses" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-5xl font-black text-center mb-4">
        <span className="gradient-text">Our Courses</span>
      </h2>

      <p className="text-center text-gray-400 text-xl mb-12">
        Choose from our industry-leading curriculum
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
