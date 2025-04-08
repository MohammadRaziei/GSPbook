import React from 'react';
import { useTranslation, useLanguageQuery } from 'next-export-i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { handleImagePath } from '../utils/imageUtils';

export const AuthorSection: React.FC = () => {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
    
    return (
        <section className="grid md:grid-cols-2 gap-8">
            {t('index.author.authors').map((author: any, index: number) => (
                <div key={index} className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col items-center text-center">
                        <div className="h-40 w-40 rounded-full bg-indigo-100 border-4 border-indigo-50 overflow-hidden mb-6">
                            <img
                                src={handleImagePath(author.photoUrl)}
                                alt={author.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{author.name}</h2>
                        <p className="text-lg text-indigo-600 mb-4">{t('index.author.author_title')}</p>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            {author.bio}
                        </p>
                        <div className="flex space-x-4 rtl:space-x-reverse">
                            <a href={author.linkedInUrl} className="inline-flex items-center mx-6 gap-2 text-indigo-600 hover:text-indigo-800 transition-colors">
                                <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                                <span className="font-medium">
                                    {t('index.author.linkedinText')}
                                </span>
                            </a>
                            <a href={author.homepageUrl} className="inline-flex items-center mx-6 gap-2 text-indigo-600 hover:text-indigo-800 transition-colors">
                                <FontAwesomeIcon icon={faHome} className="text-xl" />
                                <span className="font-medium">
                                    {t('index.author.homepageText')}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};