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
        <Container className={styles.index}>
            <Head>
                <title>{t('index.headline')}</title>
                <meta name="description" content={t('index.metaDescription')} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.main}>
                <LangSwitch />
                
                {/* بخش معرفی کتاب */}
                <h1 className={styles.title}>{t('index.headline')}</h1>
                <p className={styles.copy}>{t('index.copy')}</p>
                
                {/* بخش درباره نویسنده */}
                <div className={styles.authorSection}>
                    <h2>{t('index.author.name')}</h2>
                    <p>{t('index.author.bio')}</p>
                    <a href={t('index.author.linkedInUrl')} target="_blank" rel="noopener noreferrer">
                        مشاهده پروفایل لینکدین
                    </a>
                </div>

                {/* بخش جزئیات کتاب */}
                <div className={styles.bookDetails}>
                    <h3>{t('index.book.title')}</h3>
                    <p>{t('index.book.description')}</p>
                    <Link href={{ pathname: t('index.book.detailsUrl'), query: query }}>
                        مشاهده جزئیات کتاب
                    </Link>
                </div>

                {/* بخش استنادات (BibTeX) */}
                <div className={styles.citationSection}>
                    <h3>استنادات</h3>
                    <pre>
                        <code>{t('index.citation')}</code>
                    </pre>
                </div>
            </div>
        </Container>
    );
}