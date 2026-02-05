import { Mail, Phone, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const teamMembers = [
    {
      name: 'Gaga Andy',
      role: 'CEO & Co-founder',
      image: 'https://res.cloudinary.com/dkiytyubm/image/upload/v1765574068/founder_j1iv52.jpg',
      phone: '+250 798 672 478',
      email: 'andygaga250@gmail.com'
    },
    {
      name: 'Byiringiro Josue',
      role: 'Head of mechanical department',
      image: '/cto.jpeg',
      phone: '+250 784 425 756',
      email: 'byrngrjosue@gmail.com'
    },
    {
      name: 'Ganza Bruce',
      role: 'Software Developer',
      image: '/ganza2.jpg',
      phone: '+250 790 569 492',
      email: 'ganzabruce10@gmail.com'
    },
    {
      name: 'Byishimo Kevin',
      role: 'Software Developer',
      image: '/kevin.png',
      phone: '+250 795 863 410',
      email: 'kbusije@gmail.com'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-[#0A1E3F] mb-4">Who We Are</h2>
          <div className="w-20 h-1 bg-[#F2C94C] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6" data-aos="fade-up">
            <p className="text-[#0A1E3F]/80" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
              Cladle Land Enterprise is a technology-driven company committed to solving societal problems through innovative software solutions and embedded systems.
            </p>
            <p className="text-[#0A1E3F]/80" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
              We blend engineering, design, and creativity to build solutions that truly matter.
            </p>

            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md" data-aos="fade-up" data-aos-delay="100">
              <div className="flex-shrink-0 w-12 h-12 bg-[#F2C94C]/10 rounded-full flex items-center justify-center">
                <Award className="text-[#F2C94C]" size={24} />
              </div>
              <div>
                <h4 className="text-[#0A1E3F] mb-2">Our Commitment</h4>
                <p className="text-[#0A1E3F]/70">
                  Delivering excellence in every project, proving that Rwanda and Africa can lead through technology.
                </p>
              </div>
            </div>
          </div>

          <div className="relative" data-aos="fade-up">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1687986261123-b17f08f2796c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBtb2Rlcm4lMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NjM3MjIzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Modern Rwanda"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12" data-aos="fade-up">
            <h3 className="text-[#0A1E3F] mb-4">Meet Our Team</h3>
            <div className="w-16 h-1 bg-[#F2C94C] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="flex flex-col md:flex-row items-center gap-6 p-8">
                  <div className="shrink-0">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden ring-4 ring-[#F2C94C]/20">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-[#0A1E3F] mb-1">{member.name}</h3>
                    <p className="text-[#F2C94C] mb-4" style={{ fontWeight: 600 }}>
                      {member.role}
                    </p>

                    <div className="space-y-2">
                      <a
                        href={`tel:${member.phone}`}
                        className="flex items-center gap-2 text-[#0A1E3F]/70 hover:text-[#F2C94C] transition-colors justify-center md:justify-start"
                      >
                        <Phone size={18} />
                        <span>{member.phone}</span>
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-[#0A1E3F]/70 hover:text-[#F2C94C] transition-colors justify-center md:justify-start"
                      >
                        <Mail size={18} />
                        <span>{member.email}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
