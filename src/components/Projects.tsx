import { useState } from 'react';
import { Battery, Sprout, Activity, Code2, ArrowRight, Car } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<'hardware' | 'software'>('hardware');
  const hardwareProjects = [
    {
      id: 1,
      title: 'ICUMU Energy',
      status: 'In development',
      description: 'Motion-based renewable energy technology that converts human and mechanical motion into usable electrical energy for low-power applications.',
      impact: 'Generates clean power from kinetic energy, reducing reliance on fossil fuels and enabling smart infrastructure in urban environments.',
      icon: Battery,
      image:"/icumu.jpeg",
      statusColor: 'bg-blue-500',
      category: 'Hardware'
    },
    {
      id: 2,
      title: 'E-Preserver',
      status: 'In development',
      description: 'Smart device installed inside refrigerators that monitors food freshness, predicts spoilage, and alerts users in real time.',
      impact: 'Reduces food waste and protects health by predicting food lifespan and preventing consumption of unsafe food.',
      icon: Activity,
      image: '/e-preserver.jpeg',
      statusColor: 'bg-blue-500',
      category: 'Hardware'
    },
    {
      id: 3,
      title: 'Imboni Technology',
      status: 'Ongoing',
      description: 'Smart glass solutions delivering adaptive, interactive, and assistive interfaces across education, healthcare, and enterprise sectors.',
      impact: 'Enhances accessibility for people with disabilities, transforms learning environments, and improves productivity in smart facilities.',
      icon: Code2,
      image:"/imboni.jpeg",
      statusColor: 'bg-green-500',
      category: 'Hardware'
    }
  ];

  const softwareProjects = [
    {
      id: 4,
      title: 'Smart Agricultural Investment Platform',
      status: 'In development',
      description: 'Digital platform linking cooperatives with investors locally and abroad.',
      impact: 'Boosts agricultural productivity and transparency.',
      icon: Sprout,
      image: 'https://images.unsplash.com/photo-1708794666324-85ad91989d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGFncmljdWx0dXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM3MjIzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      statusColor: 'bg-blue-500',
      category: 'Software'
    },
    {
      id: 5,
      title: 'PreciousAZ',
      status: 'In development',
      description: 'Cleaning and supplying company.',
      impact: 'Offers cleaning services and supplies.',
      icon: Car,
      image: 'https://i.pinimg.com/736x/c9/e4/35/c9e43567d457f7fc5e9514df9f56d45c.jpg',
      statusColor: 'bg-blue-500',
      category: 'Software'
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 flex flex-col items-center" data-aos="fade-up">
          <h2 className="text-[#0A1E3F] mb-4">Our Projects</h2>
          <div className="w-20 h-1 bg-[#F2C94C] mx-auto rounded-full mb-4"></div>
          <p className="text-[#0A1E3F]/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Building innovative solutions that address real-world challenges and create lasting impact.
          </p>
        </div>

        {/* Category Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12" data-aos="fade-up">
          <button
            onClick={() => setActiveCategory('hardware')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeCategory === 'hardware'
                ? 'bg-[#0A1E3F] text-white shadow-lg'
                : 'bg-white text-[#0A1E3F] border border-gray-200 hover:border-[#F2C94C] hover:text-[#F2C94C]'
            }`}
          >
            <div className="flex items-center gap-2">
              <Battery size={18} />
              <span>Hardware Projects</span>
            </div>
          </button>
          
          <button
            onClick={() => setActiveCategory('software')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeCategory === 'software'
                ? 'bg-[#0A1E3F] text-white shadow-lg'
                : 'bg-white text-[#0A1E3F] border border-gray-200 hover:border-[#F2C94C] hover:text-[#F2C94C]'
            }`}
          >
            <div className="flex items-center gap-2">
              <Code2 size={18} />
              <span>Software Projects</span>
            </div>
          </button>
        </div>

        {/* Hardware Projects Panel */}
        {activeCategory === 'hardware' && (
          <div className="mb-20" data-aos="fade-up">
            

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hardwareProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <div
                    key={project.id}
                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F]/60 to-transparent"></div>
                      
                      <div className="absolute top-4 right-4">
                        <span className={`${project.statusColor} text-white px-4 py-1.5 rounded-full text-sm`} style={{ fontWeight: 600 }}>
                          {project.status}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                          <Icon className="text-[#0A1E3F]" size={28} />
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-[#0A1E3F] mb-3">{project.title}</h3>
                      
                      <p className="text-[#0A1E3F]/70 mb-4" style={{ lineHeight: 1.6 }}>
                        {project.description}
                      </p>

                      <div className="flex items-start gap-2 p-4 bg-[#F5F7FA] rounded-xl">
                        <ArrowRight className="text-[#F2C94C] flex-shrink-0 mt-0.5" size={20} />
                        <div>
                          <p style={{ fontWeight: 600, fontSize: '0.875rem' }} className="text-[#0A1E3F] mb-1">
                            Impact
                          </p>
                          <p className="text-[#0A1E3F]/80" style={{ fontSize: '0.875rem' }}>
                            {project.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Software Projects Panel */}
        {activeCategory === 'software' && (
          <div data-aos="fade-up">
            

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {softwareProjects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <div
                    key={project.id}
                    className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F]/60 to-transparent"></div>
                      
                      <div className="absolute top-4 right-4">
                        <span className={`${project.statusColor} text-white px-4 py-1.5 rounded-full text-sm`} style={{ fontWeight: 600 }}>
                          {project.status}
                        </span>
                      </div>

                      <div className="absolute bottom-4 left-4">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                          <Icon className="text-[#0A1E3F]" size={28} />
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-[#0A1E3F] mb-3">{project.title}</h3>
                      
                      <p className="text-[#0A1E3F]/70 mb-4" style={{ lineHeight: 1.6 }}>
                        {project.description}
                      </p>

                      <div className="flex items-start gap-2 p-4 bg-[#F5F7FA] rounded-xl">
                        <ArrowRight className="text-[#F2C94C] flex-shrink-0 mt-0.5" size={20} />
                        <div>
                          <p style={{ fontWeight: 600, fontSize: '0.875rem' }} className="text-[#0A1E3F] mb-1">
                            Impact
                          </p>
                          <p className="text-[#0A1E3F]/80" style={{ fontSize: '0.875rem' }}>
                            {project.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}