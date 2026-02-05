import { Star, Quote } from 'lucide-react';

export function Partners() {
  const partners = [
    {
      name: 'schiercom',
      logo: '/Schiercom.png',
      type: 'Private Company',
      description: 'Strategic partnership for technological innovation and economic development in Rwanda.'
    },
    {
      name: 'schiercom',
      logo: '/1000 HILLS SOLICITORS LTD_01.png',
      type: 'Private Law Company',
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
        <div className="text-center mb-16 flex flex-col items-center" data-aos="fade-up">
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
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#F2C94C]/30 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Partner Logo */}
              <div className="h-33 bg-gradient-to-br from-[#0A1E3F]/3 to-[#F2C94C]/5 flex items-center justify-center p-6 relative " style={{overflow:"hidden"}}>
                <div className="absolute inset-0 bg-white/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-20 max-w-full  object-contain relative z-10 filter drop-shadow-md group-hover:scale-110 transition-transform duration-300 border-2 border-gray-100 rounded-lg"
                  style={{
                    height:"250px",
                    width:"250px"
                  }}
                />
              </div>

              {/* Partner Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-[#F2C94C]/10 text-[#0A1E3F] rounded-full text-xs font-semibold uppercase tracking-wide">
                    {partner.type}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#F2C94C]/10 flex items-center justify-center group-hover:bg-[#F2C94C]/20 transition-colors duration-300">
                    <div className="w-2 h-2 rounded-full bg-[#F2C94C]"></div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-[#0A1E3F] font-bold text-lg mb-2 group-hover:text-[#F2C94C] transition-colors duration-300">
                    {partner.name}
                  </h3>
                  <p className="text-[#0A1E3F]/60 leading-relaxed text-sm">
                    {partner.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        {/* <div className="mb-16" style={{marginTop:"150px"}}>
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
        </div> */}

        {/* Call to Action */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <div className="bg-gradient-to-r from-[#0A1E3F] to-[#0A1E3F]/90 rounded-2xl p-8 shadow-xl flex flex-col items-center">
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
