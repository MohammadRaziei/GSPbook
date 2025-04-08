import React from 'react';
import Link from 'next/link';
import { useTranslation, useLanguageQuery } from 'next-export-i18n';
import { handleImagePath } from '../utils/imageUtils';

export const BookOverview: React.FC = () => {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
    
    return (
        <section className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
                {/* Book Cover */}
                <div className="relative md:w-1/4 p-6 flex items-center justify-center">
                    <img 
                        src={handleImagePath(t('index.book.coverImage'))}
                        alt={t('index.book.coverAlt')}
                        className="w-full max-w-[180px] rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105"
                    />
                </div>
                
                {/* Book Description */}
                <div className="md:w-3/4 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">{t('index.book.title')}</h2>
                    <p className="text-xl text-gray-600 leading-relaxed font-medium mb-6">
                        {t('index.copy')}
                    </p>
                    <p className="text-lg text-gray-500 mb-8">
                        {t('index.book.description')}
                    </p>
                    
                    <Link 
                        href={{ pathname: "/details", query: query }}
                        className="self-start px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
                    >
                        {t('index.book.detailsButton')}
                    </Link>
                </div>
            </div>
        </section>
    );
};