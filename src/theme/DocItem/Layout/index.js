import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import CopyPageButton from '@site/src/components/CopyPageButton';

export default function LayoutWrapper(props) {
  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: '1rem',
        marginTop: '-0.5rem'
      }}>
        <CopyPageButton />
      </div>
      <Layout {...props} />
    </>
  );
}
