import { Helmet } from 'react-helmet-async';
import { brandInfo } from '../data/config';

export default function SEOHead() {
  return (
    <Helmet>
      <title>{`${brandInfo.name} | ${brandInfo.tagline}`}</title>
      <meta name="description" content={brandInfo.description} />
      <meta name="keywords" content="台南壽喜燒, 關西風壽喜燒, 和牛, 黑岩家, 壽喜燒專門店, 台南美食, 聚餐推薦, A5和牛, 伊比利豬" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${brandInfo.name} | ${brandInfo.tagline}`} />
      <meta property="og:description" content={brandInfo.description} />
      <meta property="og:image" content="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop" />
      <meta property="og:url" content="https://nikuniku-sukiyaki.vercel.app/" />
      <meta property="og:site_name" content={brandInfo.name} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={`${brandInfo.name} | ${brandInfo.tagline}`} />
      <meta property="twitter:description" content={brandInfo.description} />
      <meta property="twitter:image" content="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop" />
    </Helmet>
  );
}
