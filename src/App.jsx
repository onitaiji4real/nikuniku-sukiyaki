import { HelmetProvider } from 'react-helmet-async';
import SEOHead from './components/SEOHead';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MediaCoverage from './components/MediaCoverage';
import LocationInfo from './components/LocationInfo';
import SocialProof from './components/SocialProof';
import { brandInfo, socialLinks } from './data/config';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

function App() {
  return (
    <HelmetProvider>
      <div className="bg-primary min-h-screen text-white font-sans selection:bg-accent selection:text-primary">
        <SEOHead />
        <Navbar />
        
        <main>
          <HeroSection />
          
          {/* About Section (Simple Text) */}
          <section id="about" className="py-24 px-6 text-center bg-[#151515]">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-accent text-lg tracking-[0.2em] mb-6 uppercase">About Us</h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-tight font-serif">
                堅持一期一會的<br />款待之心
              </h3>
              <p className="text-gray-400 text-lg leading-loose">
                {brandInfo.description}
                <br />
                每一片和牛，都承載著我們對美味的堅持；每一次桌邊服務，都傳遞著我們對客人的重視。
                在黑岩家，您品嚐的不僅是壽喜燒，更是一場五感滿足的極致饗宴。
              </p>
            </div>
          </section>

          <MediaCoverage />
          <SocialProof />
          <LocationInfo />
        </main>

        <footer className="bg-black py-12 border-t border-white/10">
          <div className="container mx-auto px-6 text-center">
            <div className="flex justify-center space-x-6 mb-8">
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-2xl"><FaFacebook /></a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-2xl"><FaInstagram /></a>
            </div>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} {brandInfo.enName}. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;
