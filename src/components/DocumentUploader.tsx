import React, { useState, useRef } from 'react';
import { Upload, File, CheckCircle, XCircle, AlertCircle, Trash2 } from 'lucide-react';
import { openaiRAGService } from '../services/openaiRAGService';

interface UploadedFile {
  name: string;
  size: number;
  status: 'uploading' | 'success' | 'error';
  message?: string;
}

const DocumentUploader: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const allowedTypes = [
    'application/pdf',
    'text/plain',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/msword',
    'text/markdown'
  ];

  const maxFileSize = 20 * 1024 * 1024; // 20MB

  const handleFiles = async (files: FileList) => {
    const validFiles: File[] = [];
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      
      if (!allowedTypes.includes(file.type)) {
        setUploadedFiles(prev => [...prev, {
          name: file.name,
          size: file.size,
          status: 'error',
          message: 'Type de fichier non supporté'
        }]);
        continue;
      }
      
      if (file.size > maxFileSize) {
        setUploadedFiles(prev => [...prev, {
          name: file.name,
          size: file.size,
          status: 'error',
          message: 'Fichier trop volumineux (max 20MB)'
        }]);
        continue;
      }
      
      validFiles.push(file);
    }

    if (validFiles.length === 0) return;

    setIsUploading(true);

    for (const file of validFiles) {
      // Ajouter le fichier en statut "uploading"
      setUploadedFiles(prev => [...prev, {
        name: file.name,
        size: file.size,
        status: 'uploading'
      }]);

      try {
        const result = await openaiRAGService.uploadAndProcessFile(file);
        
        setUploadedFiles(prev => prev.map(f => 
          f.name === file.name ? {
            ...f,
            status: result.success ? 'success' : 'error',
            message: result.message
          } : f
        ));
      } catch (error) {
        setUploadedFiles(prev => prev.map(f => 
          f.name === file.name ? {
            ...f,
            status: 'error',
            message: error instanceof Error ? error.message : 'Erreur inconnue'
          } : f
        ));
      }
    }

    setIsUploading(false);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const removeFile = (fileName: string) => {
    setUploadedFiles(prev => prev.filter(f => f.name !== fileName));
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'uploading':
        return <div className="w-4 h-4 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />;
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'error':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Ajouter des documents
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </button>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Uploadez vos documents pour enrichir la base de connaissances BIOTECH
          </p>
        </div>

        {/* Upload Zone */}
        <div className="p-6">
          <div
            className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
              dragActive
                ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                : 'border-gray-300 dark:border-gray-600 hover:border-emerald-400'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Glissez vos fichiers ici
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              ou cliquez pour sélectionner
            </p>
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Sélectionner des fichiers
            </button>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,.txt,.docx,.doc,.md"
              onChange={handleFileInput}
              className="hidden"
            />
          </div>

          {/* File Types Info */}
          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-blue-700 dark:text-blue-300">
                <p className="font-medium mb-1">Formats supportés :</p>
                <p>PDF, Word (.docx, .doc), Texte (.txt), Markdown (.md)</p>
                <p className="mt-1">Taille maximale : 20MB par fichier</p>
              </div>
            </div>
          </div>
        </div>

        {/* File List */}
        {uploadedFiles.length > 0 && (
          <div className="px-6 pb-6">
            <h3 className="font-medium text-gray-900 dark:text-white mb-3">
              Fichiers ({uploadedFiles.length})
            </h3>
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                    <File className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {formatFileSize(file.size)}
                        {file.message && (
                          <span className={`ml-2 ${
                            file.status === 'error' ? 'text-red-500' : 'text-green-500'
                          }`}>
                            • {file.message}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(file.status)}
                    {file.status !== 'uploading' && (
                      <button
                        onClick={() => removeFile(file.name)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Les documents seront traités et ajoutés à la base de connaissances
            </p>
            <button
              onClick={onClose}
              className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentUploader;