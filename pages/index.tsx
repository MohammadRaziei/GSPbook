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

export default function Index() {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();

    return (
        <Container className="bg-gradient-to-br from-gray-50 to-gray-100">
            <Head>
                <title>{t('index.headline')}</title>
                <meta name="description" content={t('index.metaDescription')} />
            </Head>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex items-center justify-between mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                        {t('index.headline')}
                    </h1>
                    <LangSwitch />
                </div>

                {/* Book Overview */}
                <section className="mb-20">
                    <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100">
                        <p className="text-2xl text-gray-600 leading-relaxed font-medium">
                            {t('index.copy')}
                        </p>
                    </div>
                </section>

                {/* Author Section */}
                <section className="grid md:grid-cols-2 gap-10 mb-20">
                    {t('index.author.authors').map((author: any, index: number) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow">
                            <div className="flex items-center gap-6 mb-6">
                                <div className="h-32 w-32 rounded-full bg-indigo-100 border-4 border-indigo-50 overflow-hidden">
                                    <img
                                        src={author.photoUrl}
                                        alt={author.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900">{author.name}</h2>
                                    <p className="text-lg text-indigo-600">{t('common:author_title')}</p>
                                </div>
                            </div>
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
                    ))}
                </section>

                {/* Book Details & Citation sections updated similarly... */}
            </main>
            {/* Add this section after the main headline */}
            <div className="mb-16">
                <img 
                    src={t('index.book.coverImage')}
                    alt={t('index.book.coverAlt')}
                    className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg border-8 border-white"
                />
            </div>

            {/* Citation Section */}
            <section className="bg-white p-8 rounded-2xl shadow-lg mb-20">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    {t('index.citation.title')}
                </h3>
                <pre className="bg-gray-50 p-6 rounded-lg overflow-x-auto">
                    <code className="text-sm font-mono text-gray-700 whitespace-pre-wrap">
                        {t('index.citation.code')}
                    </code>
                </pre>
                <div className="mt-4 flex gap-4">
                    <button 
                        onClick={() => navigator.clipboard.writeText(t('index.citation'))}
                        className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                        {t('index.citation.webcite')}
                    </button>
                </div>
            </section>
        </Container>
    );
}