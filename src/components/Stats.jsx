import { Users, BookOpen, Award, TrendingUp } from "lucide-react";

export default function Stats() {
  const stats = [
    { icon: Users, number: "10K+", label: "Students Enrolled" },
    { icon: BookOpen, number: "50+", label: "Expert Instructors" },
    { icon: Award, number: "16K+", label: "Community Members" },
    { icon: TrendingUp, number: "99%", label: "Success Rate" },
  ];

  return (
    <section className='max-w-7xl mx-auto px-6 py-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {stats.map((stat, index) => (
          <div
            key={index}
            className='glass-card p-8 text-center hover:bg-white/10 transition transform hover:-translate-y-2'
          >
            <stat.icon className='w-12 h-12 mx-auto mb-4 text-primary' />
            <div className='text-4xl font-black gradient-text mb-2'>
              {stat.number}
            </div>
            <div className='text-gray-400'>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
