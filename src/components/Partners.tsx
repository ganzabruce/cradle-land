import { Star, Quote } from 'lucide-react';

export function Partners() {
  const partners = [
    {
      name: 'schiercom',
      logo: '/partners/rdb.png',
      type: 'Government Partner',
      description: 'Strategic partnership for technological innovation and economic development in Rwanda.'
    }
  ];

  const testimonials = [
    {
      quote: 'Cradle Land Enterprise represents the best of Rwandan innovation - combining technical excellence with social impact.',
      author: 'Paula Ingabire',
      role: 'Minister of ICT and Innovation',
      organization: 'Government of Rwanda'
    },
    {
      quote: 'Their commitment to quality and innovation makes them an ideal partner for advancing Africa\'s digital transformation.',
      author: 'Dr. Kamilah Taylor',
      role: 'Director of Partnerships',
      organization: 'Andela Africa'
    }
  ];

  return (
    <section id="partners" className="py-20 lg:py-32 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-[#0A1E3F] mb-4">Our Partners</h2>
          <div className="w-20 h-1 bg-[#F2C94C] mx-auto rounded-full mb-4"></div>
          <p className="text-[#0A1E3F]/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Collaborating with leading organizations to drive innovation and create lasting impact across Africa.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#F2C94C]/20"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Partner Logo Placeholder */}
              <div className="w-full h-24 bg-gradient-to-br from-[#0A1E3F]/5 to-[#F2C94C]/5 rounded-xl mb-6 flex items-center justify-center group-hover:from-[#0A1E3F]/10 group-hover:to-[#F2C94C]/10 transition-all duration-300">
                <div className="text-[#0A1E3F]/30 font-bold text-lg text-center">
                  {partner.name.split(' ').map(word => word[0]).join('')}
                </div>
              </div>

              <div className="space-y-3">
                <span className="inline-block px-3 py-1 bg-[#F2C94C]/10 text-[#0A1E3F] rounded-full text-sm font-medium">
                  {partner.type}
                </span>
                <h3 className="text-[#0A1E3F] font-semibold text-lg">{partner.name}</h3>
                <p className="text-[#0A1E3F]/70" style={{ fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12" data-aos="fade-up">
            <h3 className="text-[#0A1E3F] mb-4">What Our Partners Say</h3>
            <div className="w-16 h-1 bg-[#F2C94C] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg relative"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4">
                  <Quote className="text-[#F2C94C]/20" size={32} />
                </div>

                <div className="space-y-4">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-[#F2C94C] fill-current" size={16} />
                    ))}
                  </div>
                  
                  <p className="text-[#0A1E3F]/80 italic" style={{ lineHeight: 1.6 }}>
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-[#0A1E3F] font-semibold">{testimonial.author}</p>
                    <p className="text-[#0A1E3F]/60 text-sm">{testimonial.role}</p>
                    <p className="text-[#0A1E3F]/60 text-sm">{testimonial.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-gradient-to-r from-[#0A1E3F] to-[#0A1E3F]/90 rounded-2xl p-8 shadow-xl">
            <h3 className="text-white mb-4" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
              Partner With Us
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              Join us in our mission to engineer the future from Rwanda to the world. Let\'s create impactful solutions together.
            </p>
            <button className="bg-[#F2C94C] text-[#0A1E3F] px-8 py-3 rounded-lg font-semibold hover:bg-[#F2C94C]/90 transition-colors">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
