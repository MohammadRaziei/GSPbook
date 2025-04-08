import React from 'react';
import { useTranslation } from 'next-export-i18n';

export const CitationSection: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <section className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                {t('index.citation.title')}
            </h3>
            <pre className="bg-gray-50 p-6 rounded-lg overflow-x-auto">
                <code className="text-sm font-mono text-gray-700 whitespace-pre-wrap">
                    {t('index.citation.code')}
                </code>
            </pre>
            <div className="mt-6 flex justify-center">
                <button 
                    onClick={() => navigator.clipboard.writeText(t('index.citation.code'))}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    {t('index.citation.webcite')}
                </button>
            </div>
        </section>
    );
};