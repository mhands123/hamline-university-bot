
import { useState, useEffect } from 'react';
import { Webchat } from '@botpress/webchat';
import '@botpress/webchat/dist/theme.css';
import { MessageCircle, X } from 'lucide-react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import QuickLinks from '../components/QuickLinks';
import NewsEvents from '../components/NewsEvents';
import Footer from '../components/Footer';

const Index = () => {
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    console.log('Toggle webchat clicked, current state:', isWebchatOpen);
    setIsWebchatOpen((prevState) => !prevState);
  };

  useEffect(() => {
    console.log('Webchat open state changed:', isWebchatOpen);
  }, [isWebchatOpen]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <QuickLinks />
      <NewsEvents />
      <Footer />
      
      {/* Custom Floating Action Button */}
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
        <button
          onClick={toggleWebchat}
          className="bg-red-800 hover:bg-red-700 text-white rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-110"
          style={{ 
            width: '60px', 
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {isWebchatOpen ? (
            <X size={24} />
          ) : (
            <MessageCircle size={24} />
          )}
        </button>
        
        {/* Webchat Container */}
        {isWebchatOpen && (
          <div 
            key={isWebchatOpen ? 'open' : 'closed'}
            style={{ 
              position: 'fixed',
              bottom: '90px',
              right: '20px',
              width: '350px',
              height: '500px',
              zIndex: 999,
              border: '1px solid #ccc',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
            }}
          >
            <Webchat 
              key={`webchat-${Date.now()}`}
              clientId="7c904913-a704-40d2-951c-e69e719cc260"
              configuration={{
                botName: "Hamline Assistant",
                botAvatar: "https://via.placeholder.com/40",
                theme: "prism",
                themeColor: "#991b1b",
                showPoweredBy: false,
                enableTranscriptDownload: false,
                enableConversationDeletion: false,
                showCloseButton: false,
                disableAnimations: false,
                enablePersistHistory: true
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
