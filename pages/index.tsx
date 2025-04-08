import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from './../styles/page.module.css';
import { useTranslation, useLanguageQuery } from 'next-export-i18n';
import { Container } from '../components/Container';
import { LangSwitch } from '../components/LangSwitch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { handleImagePath } from '../utils/imageUtils';

export default function Index() {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();

    return (
        <Container className="bg-gradient-to-br from-gray-50 to-gray-100">
            <Head>
                <title>{t('index.headline')}</title>
                <meta name="description" content={t('index.metaDescription')} />
            </Head>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-16 space-y-8 md:space-y-0">
                    <h1 className="text-5xl font-bold text-gray-900 leading-tight text-center md:text-left">
                        {t('index.headline')}
                    </h1>
                    <LangSwitch />
                </div>

                {/* Book Overview */}
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
                            <p className="text-lg text-gray-500">
                                {t('index.book.description')}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Author Section */}
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
                                <p className="text-lg text-indigo-600 mb-4">{t('common:author_title')}</p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                    {author.bio}
                                </p>
                                <a href={author.linkedInUrl} className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
                                    <span className="font-medium">
                                        {query?.lang === 'fa' ? 'پروفایل لینکدین' : 'LinkedIn Profile'}
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Citation Section */}
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
                            onClick={() => navigator.clipboard.writeText(t('index.citation'))}
                            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            {t('index.citation.webcite')}
                        </button>
                    </div>
                </section>
            </main>
        </Container>
    );
}