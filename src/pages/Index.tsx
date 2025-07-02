
import { useState } from 'react';
import { Webchat, Fab, WebchatProvider, getClient, Configuration } from '@botpress/webchat';
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

  const client = getClient({ clientId: "7c904913-a704-40d2-951c-e69e719cc260" });
  const configuration: Configuration = {
    color: '#000',
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <QuickLinks />
      <NewsEvents />
      <Footer />
      
      <WebchatProvider client={client} configuration={configuration}>
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
          <Fab onClick={toggleWebchat} />
          {isWebchatOpen && (
            <div style={{ 
              position: 'fixed',
              bottom: '80px',
              right: '20px',
              width: '350px',
              height: '500px',
              zIndex: 1000
            }}>
              <Webchat />
            </div>
          )}
        </div>
      </WebchatProvider>
    </div>
  );
};

export default Index;
