import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Minimize2, Maximize2, X, MessageCircle, AlertTriangle, Database } from 'lucide-react';
import { openaiRAGService } from '../services/openaiRAGService';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isError?: boolean;
  hasRAG?: boolean;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bonjour ! Je suis l\'assistant virtuel BIOTECH avec accès à notre base de connaissances. Comment puis-je vous aider avec nos équipements médicaux et solutions biotechnologiques ?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [ragEnabled, setRagEnabled] = useState(false);
  const [vectorStoreStats, setVectorStoreStats] = useState<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMinimized]);

  // Initialiser le service RAG au chargement
  useEffect(() => {
    const initializeRAG = async () => {
      if (openaiRAGService.isConfigured()) {
        try {
          await openaiRAGService.initialize();
          setRagEnabled(openaiRAGService.isRAGReady());
          
          // Récupérer les stats du vector store
          const stats = await openaiRAGService.getVectorStoreStats();
          setVectorStoreStats(stats);
        } catch (error) {
          console.error('Erreur lors de l\'initialisation du RAG:', error);
        }
      }
    };

    initializeRAG();
  }, []);

  // Vérifier la configuration de l'API au chargement
  useEffect(() => {
    if (!openaiRAGService.isConfigured()) {
      setApiError('API OpenAI non configurée. Veuillez ajouter VITE_OPENAI_API_KEY à votre fichier .env');
    }
  }, []);

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setApiError(null);

    try {
      let response: string;
      let hasRAG = false;

      if (ragEnabled && openaiRAGService.isRAGReady()) {
        // Utiliser RAG si disponible
        response = await openaiRAGService.sendMessageWithRAG(userMessage.text);
        hasRAG = true;
      } else {
        // Fallback vers réponse simple
        response = await simulateBasicResponse(userMessage.text);
      }
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date(),
        hasRAG
      };

      setMessages(prev => [...prev, botMessage]);

    } catch (error) {
      console.error('Erreur lors de l\'envoi du message:', error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: error instanceof Error 
          ? `Erreur: ${error.message}`
          : 'Désolé, une erreur est survenue. Veuillez réessayer.',
        sender: 'bot',
        timestamp: new Date(),
        isError: true
      };
      
      setMessages(prev => [...prev, errorMessage]);
      setApiError(error instanceof Error ? error.message : 'Erreur inconnue');
    } finally {
      setIsLoading(false);
    }
  };

  // Simulation de réponse basique si RAG non disponible
  const simulateBasicResponse = async (userInput: string): Promise<string> => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return "Merci pour votre question ! Je suis l'assistant BIOTECH et je peux vous aider avec nos équipements médicaux et solutions biotechnologiques. Pour des informations détaillées, n'hésitez pas à me poser des questions spécifiques sur nos produits, services ou tarifs.";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearConversation = () => {
    setMessages([
      {
        id: Date.now().toString(),
        text: ragEnabled 
          ? 'Nouvelle conversation démarrée. Comment puis-je vous aider avec nos équipements médicaux BIOTECH ?'
          : 'Nouvelle conversation démarrée. Je suis votre assistant BIOTECH, posez-moi vos questions !',
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
    openaiRAGService.resetConversation();
    setApiError(null);
  };

  const handleUploadComplete = async () => {
    // Cette fonction n'est plus nécessaire pour les clients
    return;
  };

  const TypingIndicator = () => (
    <div className="flex items-center space-x-1 p-3">
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
      <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
        {ragEnabled ? 'Recherche dans la base de connaissances...' : 'Assistant BIOTECH écrit...'}
      </span>
    </div>
  );

  const ErrorBanner = () => {
    if (!apiError) return null;
    
    return (
      <div className="mx-4 mb-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start space-x-2">
        <AlertTriangle size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-sm text-red-700 dark:text-red-300 font-medium">Erreur de configuration</p>
          <p className="text-xs text-red-600 dark:text-red-400">{apiError}</p>
        </div>
      </div>
    );
  };

  const RAGStatus = () => (
    <div className="mx-4 mb-2 p-3 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Database size={16} className="text-emerald-600 dark:text-emerald-400" />
          <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
            Base de connaissances
          </span>
        </div>
        <div className={`w-2 h-2 rounded-full ${ragEnabled ? 'bg-green-500' : 'bg-gray-400'}`} />
      </div>
      {vectorStoreStats && (
        <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">
          {vectorStoreStats.file_counts.total} document(s) • {vectorStoreStats.file_counts.completed} traité(s)
        </p>
      )}
    </div>
  );

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-110 group"
        aria-label="Ouvrir le chat BIOTECH"
      >
        <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
        {ragEnabled && (
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
        )}
        {!ragEnabled && (
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white animate-pulse"></div>
        )}
      </button>
    );
  }

  return (
    <>
      <div className={`fixed bottom-6 right-6 z-50 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 ${
        isMinimized ? 'h-16' : 'h-[600px]'
      } w-80 md:w-96`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-emerald-600 to-green-500 text-white rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Bot size={24} className="text-white" />
              <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                ragEnabled ? 'bg-green-400' : 'bg-yellow-400'
              }`}></div>
            </div>
            <div>
              <h3 className="font-semibold">Assistant BIOTECH</h3>
              <p className="text-xs text-emerald-100">
                {ragEnabled ? 'RAG activé' : 'Mode basique'}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={clearConversation}
              className="p-1 hover:bg-white/20 rounded-lg transition-colors text-xs"
              title="Nouvelle conversation"
            >
              ↻
            </button>
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              aria-label={isMinimized ? "Agrandir" : "Réduire"}
            >
              {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Fermer le chat"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            <ErrorBanner />
            <RAGStatus />
            
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 h-80">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-3 ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400' 
                      : message.isError
                      ? 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                  }`}>
                    {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  
                  <div className={`flex-1 max-w-xs ${message.sender === 'user' ? 'text-right' : ''}`}>
                    <div className={`inline-block p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-emerald-600 to-green-500 text-white rounded-br-md'
                        : message.isError
                        ? 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-bl-md border border-red-200 dark:border-red-800'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-md'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                      {message.hasRAG && (
                        <div className="flex items-center mt-2 text-xs opacity-70">
                          <Database size={12} className="mr-1" />
                          <span>Recherche activée</span>
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {message.timestamp.toLocaleTimeString('fr-FR', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isLoading && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Tapez votre message..."
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-white transition-colors"
                  disabled={isLoading || !openaiRAGService.isConfigured()}
                />
                <button
                  onClick={sendMessage}
                  disabled={!inputValue.trim() || isLoading || !openaiRAGService.isConfigured()}
                  className="bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed text-white p-2 rounded-xl transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
                  aria-label="Envoyer le message"
                >
                  <Send size={16} />
                </button>
              </div>
              
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                {ragEnabled ? 'RAG activé • Recherche dans vos documents' : 'Ajoutez des documents pour activer RAG'} • Entrée pour envoyer
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ChatBot;