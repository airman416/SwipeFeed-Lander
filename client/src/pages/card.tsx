import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const APP_STORE_URL = 'https://apps.apple.com/us/app/swipefeed/id6739143466';

interface CardProps {
  params?: {
    id?: string;
  };
}

const Card = ({ params }: CardProps) => {
  const id = params?.id;
  const userAgent = navigator.userAgent;
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    try {
      // Allow Apple's web crawler to see the page (for social media previews)
      const isAppleCrawler = userAgent.includes('com.apple.webcrawler');
      
      if (!isAppleCrawler) {
        // For regular users: redirect to App Store after a brief moment
        // (If app is installed, iOS will intercept the link before this page loads)
        setIsRedirecting(true);
        setTimeout(() => {
          window.location.href = APP_STORE_URL;
        }, 100);
        return;
      }

      // Validate ID format for crawlers
      if (!/^[a-zA-Z0-9-]+$/.test(id ?? '')) {
        setIsRedirecting(true);
        setTimeout(() => {
          window.location.href = APP_STORE_URL;
        }, 100);
        return;
      }
    } catch (error) {
      console.error('Error in CardPage:', error);
      setIsRedirecting(true);
      setTimeout(() => {
        window.location.href = APP_STORE_URL;
      }, 100);
    }
  }, [id, userAgent]);

  return (
    <>
      <Helmet>
        <title>Check out this story on SwipeFeed</title>
        <meta name="description" content="View this interesting story in the SwipeFeed app" />
        <meta property="og:title" content="Check out this story on SwipeFeed" />
        <meta property="og:description" content="View this interesting story in the SwipeFeed app" />
        <meta property="og:url" content={`https://swipefeed.live/card/${id}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Check out this story on SwipeFeed" />
        <meta name="twitter:description" content="View this interesting story in the SwipeFeed app" />
      </Helmet>
      {isRedirecting ? (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: '100vh',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <p>Opening SwipeFeed...</p>
        </div>
      ) : (
        <div>
          <h1>SwipeFeed Card</h1>
          <p>Card ID: {id}</p>
        </div>
      )}
    </>
  );
};

export default Card;

