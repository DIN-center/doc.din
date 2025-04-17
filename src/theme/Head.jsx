import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import PropTypes from 'prop-types';

export default function CustomHead(props) {
  const {siteConfig} = useDocusaurusContext();
  const {title, description, image, permalink} = props;

  const metaTitle = title || siteConfig.title;
  const metaDescription = description || siteConfig.tagline;
  const metaImage = image || useBaseUrl('/img/logos/DIN Logo On Light.svg', {absolute: true});
  const metaUrl = permalink || siteConfig.url;

  return (
    <>
      <Head {...props}>
        {/* Standard favicon */}
        <link rel="icon" href={useBaseUrl('/img/favicons/favicon.svg')} />
        
        {/* Apple touch icons */}
        <link rel="apple-touch-icon" href={useBaseUrl('/img/logos/DIN Symbol On Light.svg')} />
        
        {/* PWA manifest */}
        <link rel="manifest" href={useBaseUrl('/manifest.json')} />
        
        {/* Theme color */}
        <meta name="theme-color" content="#0A0B1E" />
        
        {/* Additional SEO tags */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:url" content={metaUrl} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    </>
  );
}

CustomHead.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  permalink: PropTypes.string,
}; 