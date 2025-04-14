import Head from 'next/head';
import React from 'react';
import { useTranslation } from 'next-export-i18n';
import { Container } from '../components/Container';
import { PageHeader } from '../components/PageHeader';
import { BookOverview } from '../components/BookOverview';
import { AuthorSection } from '../components/AuthorSection';
import { CitationSection } from '../components/CitationSection';
import { GitHubSection } from '../components/GitHubSection';

export default function Index() {
    const { t } = useTranslation();
    const pageTitle = t('index.headline');

    return (
        <Container className="bg-gradient-to-br from-gray-50 to-gray-100">
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={t('index.metaDescription')} />
            </Head>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
                <PageHeader title={pageTitle} />
                <BookOverview />
                <AuthorSection />
                <GitHubSection />
                <CitationSection />
            </main>
        </Container>
    );
}