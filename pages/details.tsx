import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { useTranslation, useLanguageQuery } from 'next-export-i18n';
import { Container } from '../components/Container';
import { PageHeader } from '../components/PageHeader';
import { handleImagePath } from '../utils/imageUtils';

export default function Details() {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
    const pageTitle = t('details.headline');

    return (
        <Container className="bg-gradient-to-br from-gray-50 to-gray-100">
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={t('details.metaDescription')} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
                <PageHeader title={pageTitle} />
                
                {/* Book Details Section */}
                <section className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                        {t('details.bookDetails.title')}
                    </h2>
                    
                    <div className="space-y-8">
                        {/* Table of Contents */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                {t('details.tableOfContents.title')}
                            </h3>
                            <div className="prose prose-lg max-w-none" 
                                 dangerouslySetInnerHTML={{ __html: t('details.tableOfContents.content') }}>
                            </div>
                        </div>
                        
                        {/* Key Features */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                {t('details.keyFeatures.title')}
                            </h3>
                            <ul className="space-y-3 text-lg text-gray-700">
                                {t('details.keyFeatures.items').map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="text-indigo-600 mr-2">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Additional Resources */}
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                                {t('details.resources.title')}
                            </h3>
                            <div className="prose prose-lg max-w-none"
                                 dangerouslySetInnerHTML={{ __html: t('details.resources.content') }}>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Back to Home Link */}
                <div className="flex justify-center">
                    <Link 
                        href={{ pathname: "/", query: query }}
                        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
                    >
                        {query?.lang === 'fa' ? 'بازگشت به صفحه اصلی' : 'Back to Home'}
                    </Link>
                </div>
            </main>
        </Container>
    );
}
