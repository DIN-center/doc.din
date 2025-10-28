import React, {type ReactNode} from 'react';
import DocBreadcrumbs from '@theme-original/DocBreadcrumbs';
import type DocBreadcrumbsType from '@theme/DocBreadcrumbs';
import type {WrapperProps} from '@docusaurus/types';
import CopyPageButton from '@site/src/components/CopyPageButton';

type Props = WrapperProps<typeof DocBreadcrumbsType>;

export default function DocBreadcrumbsWrapper(props: Props): ReactNode {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: '0.75rem',
      marginBottom: '1rem'
    }}>
      <div style={{ flex: '1 1 300px', minWidth: 0 }}>
        <DocBreadcrumbs {...props} />
      </div>
      <div style={{ flex: '0 0 auto', marginLeft: 'auto' }}>
        <CopyPageButton />
      </div>
    </div>
  );
}
