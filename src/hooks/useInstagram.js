import { useState, useEffect } from 'react';
import { brandInfo } from '../data/config';

// Fallback images if API fails or no token provided
const FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=400&auto=format&fit=crop"
];

export function useInstagram() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      // If no token is configured, use fallback immediately
      if (!brandInfo.instagramToken) {
        setPosts(FALLBACK_IMAGES.map((url, index) => ({
          id: `fallback-${index}`,
          media_url: url,
          permalink: "https://www.instagram.com/nikuniku_sukiyaki/",
          caption: "Follow us on Instagram"
        })));
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&access_token=${brandInfo.instagramToken}&limit=4`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts');
        }

        const data = await response.json();
        setPosts(data.data);
      } catch (err) {
        console.error("Instagram API Error:", err);
        setError(err);
        // On error, also show fallback so the UI doesn't break
        setPosts(FALLBACK_IMAGES.map((url, index) => ({
          id: `fallback-${index}`,
          media_url: url,
          permalink: "https://www.instagram.com/nikuniku_sukiyaki/",
          caption: "Follow us on Instagram"
        })));
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
}
