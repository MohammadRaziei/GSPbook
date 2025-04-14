import React from 'react';
import { useTranslation } from 'next-export-i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export const GitHubSection: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                {t('index.github.title')}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6 text-center">
                {t('index.github.description')}
            </p>
            <div className="flex justify-center">
                <a 
                    href="https://github.com/MohammadRaziei/GSPbook"
                    target="_blank"
                    className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                    <FontAwesomeIcon icon={faGithub} className="text-xl mx-2" />
                    {t('index.github.buttonText')}
                </a>
            </div>
        </section>
    );
};