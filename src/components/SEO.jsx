import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title,
    description,
    keywords,
    canonicalUrl,
    schema,
    type = "website"
}) => {
    const siteUrl = "https://hitchly.in";
    const url = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
    const imageUrl = `${siteUrl}/favicon-180x180.png`; // Fallback share image

    return (
        <Helmet>
            {/* Primary SEO Meta Tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={url} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:site_name" content="Hitchly" />
            <meta property="og:locale" content="en_IN" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />

            {/* JSON-LD Structured Data */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
