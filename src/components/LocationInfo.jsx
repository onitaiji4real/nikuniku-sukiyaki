import { motion } from 'framer-motion';
import { locations } from '../data/config';
import { FaPhone, FaClock, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';

export default function LocationInfo() {
  return (
    <section id="locations" className="py-24 bg-[#111]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">分店資訊</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-accent/50 transition-colors duration-300"
            >
              {/* Map Embed */}
              <div className="h-64 w-full relative">
                <iframe
                  src={loc.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                ></iframe>
              </div>

              {/* Info */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  {loc.name}
                  <span className="ml-4 text-xs bg-accent text-primary px-2 py-1 rounded font-bold">
                    {index === 0 ? '創始店' : '旗艦店'}
                  </span>
                </h3>

                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-accent mt-1 mr-3 flex-shrink-0" />
                    <p>{loc.address}</p>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="text-accent mr-3 flex-shrink-0" />
                    <p>{loc.phone}</p>
                  </div>
                  <div className="flex items-start">
                    <FaClock className="text-accent mt-1 mr-3 flex-shrink-0" />
                    <p>{loc.hours}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-wider">特色 Features</h4>
                  <div className="flex flex-wrap gap-3">
                    {loc.features.map((feature) => (
                      <span
                        key={feature}
                        className="flex items-center text-sm text-white bg-white/10 px-3 py-1 rounded-full"
                      >
                        <FaCheck className="text-accent mr-2 text-xs" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
