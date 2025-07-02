
import { useState } from 'react';
import { Webchat, Fab } from '@botpress/webchat';
import Header from '../components/Header';
import Hero from '../components/Hero';
import QuickLinks from '../components/QuickLinks';
import NewsEvents from '../components/NewsEvents';
import Footer from '../components/Footer';

const Index = () => {
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <QuickLinks />
      <NewsEvents />
      <Footer />
      
      <div>
        <Fab onClick={toggleWebchat} />
        <div
          style={{
            display: isWebchatOpen ? 'block' : 'none',
          }}
        >
          <Webchat 
            clientId="7c904913-a704-40d2-951c-e69e719cc260"
            configuration={{
              color: '#000',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
