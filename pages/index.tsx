import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from './../styles/page.module.css';
import { useTranslation, useLanguageQuery } from 'next-export-i18n';
import { Container } from '../components/Container';
import { LangSwitch } from '../components/LangSwitch';

export default function Index() {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();

    return (
        <Container className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            <Head>
                <title>{t('index.headline')}</title>
                <meta name="description" content={t('index.metaDescription')} />
            </Head>

            <main className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">
                        {t('index.headline')}
                    </h1>
                    <LangSwitch />
                </div>

                {/* Book Overview */}
                <section className="mb-16">
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                        <p className="text-xl text-gray-600 leading-relaxed">
                            {t('index.copy')}
                        </p>
                    </div>
                </section>

                {/* Author Section */}
                <section className="grid md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-indigo-50 p-8 rounded-2xl">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            {t('index.author.name')}
                        </h2>
                        <p className="text-gray-600 mb-4">
                            {t('index.author.bio')}
                        </p>
                    </div>
                    
                    {/* Book Details */}
                    <div className="bg-emerald-50 p-8 rounded-2xl">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                            {t('index.book.title')}
                        </h3>
                        <p className="text-gray-600 mb-6">
                            {t('index.book.description')}
                        </p>
                        <Link href={{ pathname: t('index.book.detailsUrl'), query: query }} 
                              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                            {query?.lang === 'fa' ? 'مشاهده جزئیات' : 'View Details'}
                        </Link>
                    </div>
                </section>

                {/* Citation Section */}
                <section className="bg-gray-50 p-8 rounded-2xl">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                        {query?.lang === 'fa' ? 'استناد' : 'Citation'}
                    </h3>
                    <pre className="bg-white p-6 rounded-xl overflow-x-auto">
                        <code className="text-sm font-mono text-gray-700">
                            {t('index.citation')}
                        </code>
                    </pre>
                </section>
            </main>
        </Container>
    );
}