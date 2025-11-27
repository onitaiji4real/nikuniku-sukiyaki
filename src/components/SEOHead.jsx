import { Helmet } from 'react-helmet-async';
import { brandInfo } from '../data/config';

export default function SEOHead() {
  return (
    <Helmet>
      <title>{`${brandInfo.name} | ${brandInfo.tagline}`}</title>
      <meta name="description" content={brandInfo.description} />
      <meta name="keywords" content="台南壽喜燒, 關西風壽喜燒, 和牛, 黑岩家, 壽喜燒專門店, 台南美食, 聚餐推薦" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${brandInfo.name} | ${brandInfo.tagline}`} />
      <meta property="og:description" content={brandInfo.description} />
      <meta property="og:image" content={brandInfo.logo} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={`${brandInfo.name} | ${brandInfo.tagline}`} />
      <meta property="twitter:description" content={brandInfo.description} />
      <meta property="twitter:image" content={brandInfo.logo} />
    </Helmet>
  );
}
