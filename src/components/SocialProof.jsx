import { motion } from 'framer-motion';
import { reviews } from '../data/config';
import { FaStar, FaQuoteLeft, FaInstagram } from 'react-icons/fa';
import { useInstagram } from '../hooks/useInstagram';

export default function SocialProof() {
  const { posts } = useInstagram();

  return (
    <section id="reviews" className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">顧客好評</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 p-8 rounded-xl relative group hover:bg-white/10 transition-colors duration-300"
            >
              <FaQuoteLeft className="text-4xl text-white/10 absolute top-6 right-6 group-hover:text-accent/20 transition-colors" />
              
              <div className="flex items-center mb-4 text-accent">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.floor(review.rating) ? "text-accent" : "text-gray-600"} />
                ))}
                <span className="ml-2 text-white font-bold">{review.rating}</span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{review.comment}"
              </p>

              <div className="flex justify-between items-end border-t border-white/10 pt-4">
                <div>
                  <p className="text-white font-bold">{review.user}</p>
                  <p className="text-xs text-gray-500 mt-1">{review.platform}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Wall */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center justify-center space-x-2 text-white mb-8">
            <FaInstagram className="text-2xl" />
            <span className="text-xl font-bold">@nikuniku_sukiyaki</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {posts.map((post) => (
              <a 
                key={post.id} 
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square overflow-hidden relative group cursor-pointer block"
              >
                <img
                  src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                  alt={post.caption || "Instagram Post"}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FaInstagram className="text-white text-3xl" />
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
