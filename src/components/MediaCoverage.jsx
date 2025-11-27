import { motion } from 'framer-motion';
import { mediaCoverage } from '../data/config';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function MediaCoverage() {
  return (
    <section id="media" className="py-24 bg-primary relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">媒體報導</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            感謝各大媒體與部落客的熱情推薦，黑岩家致力於提供最優質的用餐體驗。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaCoverage.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group block bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.source}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {item.summary}
                </p>
                <div className="flex items-center text-accent text-sm font-medium group-hover:translate-x-2 transition-transform">
                  閱讀全文 <FaExternalLinkAlt className="ml-2 w-3 h-3" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
