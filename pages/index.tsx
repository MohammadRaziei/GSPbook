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
                                <div className="h-24 w-24 rounded-full bg-indigo-100 flex items-center justify-center">
                                    <FontAwesomeIcon icon={faUserGraduate} className="text-indigo-600 text-3xl" />
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
        </Container>
    );
}