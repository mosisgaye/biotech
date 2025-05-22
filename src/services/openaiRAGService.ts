// services/openaiRAGService.ts

interface OpenAIFile {
    id: string;
    filename: string;
    bytes: number;
    created_at: number;
    purpose: string;
  }
  
  interface VectorStore {
    id: string;
    name: string;
    file_counts: {
      total: number;
      completed: number;
      failed: number;
      in_progress: number;
    };
    created_at: number;
  }
  
  interface Assistant {
    id: string;
    name: string;
    model: string;
    tools: any[];
    tool_resources?: {
      file_search?: {
        vector_store_ids: string[];
      };
    };
  }
  
  interface Thread {
    id: string;
  }
  
  interface Message {
    id: string;
    content: Array<{
      type: string;
      text: {
        value: string;
        annotations: any[];
      };
    }>;
    role: 'user' | 'assistant';
    created_at: number;
  }
  
  interface Run {
    id: string;
    status: 'queued' | 'in_progress' | 'requires_action' | 'cancelling' | 'cancelled' | 'failed' | 'completed' | 'expired';
    thread_id: string;
    assistant_id: string;
  }
  
  class OpenAIRAGService {
    private apiKey: string;
    private baseUrl: string = 'https://api.openai.com/v1';
    private assistantId: string | null = null;
    private vectorStoreId: string | null = null;
    private threadId: string | null = null;
  
    constructor() {
      this.apiKey = import.meta.env.VITE_OPENAI_API_KEY || '';
      
      if (!this.apiKey) {
        console.warn('VITE_OPENAI_API_KEY not found. Please add it to your .env file');
      }
    }
  
    private async makeRequest(endpoint: string, options: RequestInit = {}) {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          'OpenAI-Beta': 'assistants=v2',
          ...options.headers,
        },
      });
  
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`API Error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
      }
  
      return response.json();
    }
  
    // Créer un Vector Store
    async createVectorStore(name: string = 'BIOTECH Knowledge Base'): Promise<VectorStore> {
      const vectorStore = await this.makeRequest('/vector_stores', {
        method: 'POST',
        body: JSON.stringify({
          name,
          expires_after: {
            anchor: 'last_active_at',
            days: 30
          }
        })
      });
  
      this.vectorStoreId = vectorStore.id;
      localStorage.setItem('biotech_vector_store_id', vectorStore.id);
      
      return vectorStore;
    }
  
    // Lister les Vector Stores
    async listVectorStores(): Promise<VectorStore[]> {
      const response = await this.makeRequest('/vector_stores');
      return response.data || [];
    }
  
    // Uploader un fichier
    async uploadFile(file: File): Promise<OpenAIFile> {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('purpose', 'assistants');
  
      const response = await fetch(`${this.baseUrl}/files`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
        body: formData,
      });
  
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`File upload error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`);
      }
  
      return response.json();
    }
  
    // Ajouter un fichier au Vector Store
    async addFileToVectorStore(fileId: string, vectorStoreId?: string): Promise<void> {
      const storeId = vectorStoreId || this.vectorStoreId;
      if (!storeId) {
        throw new Error('No vector store ID available');
      }
  
      await this.makeRequest(`/vector_stores/${storeId}/files`, {
        method: 'POST',
        body: JSON.stringify({
          file_id: fileId
        })
      });
    }
  
    // Créer un Assistant avec File Search
    async createAssistant(): Promise<Assistant> {
      const assistant = await this.makeRequest('/assistants', {
        method: 'POST',
        body: JSON.stringify({
          name: 'Assistant BIOTECH',
          instructions: `Tu es l'assistant virtuel de BIOTECH, une entreprise spécialisée dans les équipements médicaux et solutions biotechnologiques au Sénégal.
  
  CONTEXTE DE L'ENTREPRISE :
  - Nom : BIOTECH
  - Spécialité : Équipements médicaux de pointe et solutions biotechnologiques
  - Localisation : Dakar, Sénégal
  - Expérience : 15+ années d'expertise
  
  INSTRUCTIONS :
  1. Réponds toujours en français
  2. Sois professionnel, courtois et expert
  3. Utilise les documents fournis pour répondre avec précision
  4. Si tu ne trouves pas l'information dans les documents, indique-le clairement
  5. Propose de mettre en contact avec l'équipe si nécessaire
  6. Concentre-toi sur les équipements médicaux et biotechnologiques
  7. Mentionne notre expertise de 15+ années quand c'est pertinent
  
  Utilise le File Search pour rechercher dans la base de connaissances BIOTECH avant de répondre.`,
          model: 'gpt-4o-mini',
          tools: [
            {
              type: 'file_search'
            }
          ],
          tool_resources: {
            file_search: {
              vector_store_ids: this.vectorStoreId ? [this.vectorStoreId] : []
            }
          },
          temperature: 0.7
        })
      });
  
      this.assistantId = assistant.id;
      localStorage.setItem('biotech_assistant_id', assistant.id);
      
      return assistant;
    }
  
    // Créer un Thread de conversation
    async createThread(): Promise<Thread> {
      const thread = await this.makeRequest('/threads', {
        method: 'POST',
        body: JSON.stringify({})
      });
  
      this.threadId = thread.id;
      return thread;
    }
  
    // Envoyer un message et obtenir une réponse avec RAG
    async sendMessageWithRAG(message: string): Promise<string> {
      if (!this.assistantId) {
        throw new Error('Assistant not initialized. Please create an assistant first.');
      }
  
      if (!this.threadId) {
        await this.createThread();
      }
  
      // Ajouter le message au thread
      await this.makeRequest(`/threads/${this.threadId}/messages`, {
        method: 'POST',
        body: JSON.stringify({
          role: 'user',
          content: message
        })
      });
  
      // Créer un run
      const run = await this.makeRequest(`/threads/${this.threadId}/runs`, {
        method: 'POST',
        body: JSON.stringify({
          assistant_id: this.assistantId
        })
      });
  
      // Attendre que le run soit terminé
      let runStatus = run;
      while (runStatus.status === 'queued' || runStatus.status === 'in_progress') {
        await new Promise(resolve => setTimeout(resolve, 1000));
        runStatus = await this.makeRequest(`/threads/${this.threadId}/runs/${run.id}`);
      }
  
      if (runStatus.status === 'failed') {
        throw new Error('Run failed');
      }
  
      // Récupérer les messages
      const messages = await this.makeRequest(`/threads/${this.threadId}/messages`);
      const lastMessage = messages.data[0];
  
      if (lastMessage && lastMessage.content[0]?.text?.value) {
        return lastMessage.content[0].text.value;
      }
  
      throw new Error('No response received');
    }
  
    // Initialiser le service avec les IDs sauvegardés
    async initialize(): Promise<void> {
      // Récupérer les IDs sauvegardés
      const savedVectorStoreId = localStorage.getItem('biotech_vector_store_id');
      const savedAssistantId = localStorage.getItem('biotech_assistant_id');
  
      this.vectorStoreId = savedVectorStoreId;
      this.assistantId = savedAssistantId;
  
      // Si pas d'assistant, en créer un nouveau
      if (!this.assistantId) {
        await this.createAssistant();
      }
    }
  
    // Uploader et traiter un fichier complet
    async uploadAndProcessFile(file: File): Promise<{ success: boolean; message: string }> {
      try {
        // Créer un vector store si nécessaire
        if (!this.vectorStoreId) {
          await this.createVectorStore();
        }
  
        // Uploader le fichier
        const uploadedFile = await this.uploadFile(file);
        
        // Ajouter au vector store
        await this.addFileToVectorStore(uploadedFile.id);
  
        return {
          success: true,
          message: `Fichier "${file.name}" uploadé et ajouté à la base de connaissances avec succès.`
        };
      } catch (error) {
        console.error('Erreur lors du traitement du fichier:', error);
        return {
          success: false,
          message: error instanceof Error ? error.message : 'Erreur inconnue'
        };
      }
    }
  
    // Vérifier si le service est configuré
    isConfigured(): boolean {
      return !!this.apiKey;
    }
  
    // Vérifier si RAG est activé (vector store et assistant prêts)
    isRAGReady(): boolean {
      return !!(this.vectorStoreId && this.assistantId);
    }
  
    // Réinitialiser la conversation
    resetConversation(): void {
      this.threadId = null;
    }
  
    // Obtenir les statistiques du vector store
    async getVectorStoreStats(): Promise<VectorStore | null> {
      if (!this.vectorStoreId) return null;
      
      try {
        return await this.makeRequest(`/vector_stores/${this.vectorStoreId}`);
      } catch {
        return null;
      }
    }
  }
  
  // Export d'une instance singleton
  export const openaiRAGService = new OpenAIRAGService();
  
  // Types pour TypeScript
  export type { OpenAIFile, VectorStore, Assistant, Thread, Message, Run };
  export { OpenAIRAGService };