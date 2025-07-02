
import { useState, useEffect } from 'react';
import { Webchat } from '@botpress/webchat';
import { MessageCircle, X } from 'lucide-react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import QuickLinks from '../components/QuickLinks';
import NewsEvents from '../components/NewsEvents';
import Footer from '../components/Footer';

const Index = () => {
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);
  const [conversationId, setConversationId] = useState<string>('');

  const toggleWebchat = () => {
    console.log('Toggle webchat clicked, current state:', isWebchatOpen);
    
    if (!isWebchatOpen) {
      // When opening, generate new conversation ID if needed
      if (!conversationId) {
        setConversationId(`conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
      }
    }
    
    setIsWebchatOpen(!isWebchatOpen);
  };

  useEffect(() => {
    console.log('Webchat open state changed:', isWebchatOpen);
    // Generate conversation ID on first mount
    if (!conversationId) {
      setConversationId(`conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`);
    }
  }, [isWebchatOpen, conversationId]);

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
          className="text-white rounded-full p-4 shadow-lg transition-all duration-200 hover:scale-110"
          style={{ 
            width: '60px', 
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#952F37',
            background: 'linear-gradient(135deg, #952F37 0%, #7a262c 100%)',
            boxShadow: '0 4px 16px rgba(149, 47, 55, 0.3)'
          }}
        >
          {isWebchatOpen ? (
            <X size={24} />
          ) : (
            <MessageCircle size={24} />
          )}
        </button>
        
        {/* Webchat Container - Always mounted, visibility controlled by CSS */}
        <div 
          style={{ 
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '380px',
            height: '580px',
            zIndex: 999,
            border: 'none',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 12px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
            backgroundColor: 'white',
            visibility: isWebchatOpen ? 'visible' : 'hidden',
            opacity: isWebchatOpen ? 1 : 0,
            transition: 'opacity 0.2s ease-in-out'
          }}
        >
          <Webchat 
            clientId="7c904913-a704-40d2-951c-e69e719cc260"
            conversationId={conversationId}
            storageKey={`hamline_chat_${conversationId}`}
            configuration={{
              botName: "Hamline Assistant",
              botAvatar: "https://pbs.twimg.com/profile_images/1302328038/H_400x400.png",
              themeColor: "#952F37",
              showPoweredBy: false,
              enableTranscriptDownload: false,
              enableConversationDeletion: false,
              showCloseButton: false,
              enablePersistHistory: true,
              showTypingIndicator: true,
              autoFocus: true,
              stylesheet: `
                .bp-widget-container {
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                }
                .bp-widget-header {
                  background: linear-gradient(135deg, #952F37 0%, #7a262c 100%);
                  border-radius: 12px 12px 0 0;
                }
                .bp-widget-message-bubble-user {
                  background-color: #952F37;
                }
                .bp-widget-input-wrapper {
                  border-top: 1px solid #e1e5e9;
                }
              `
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
