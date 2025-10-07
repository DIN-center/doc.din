import clsx from 'clsx'
import { NETWORK_LINKS } from '@site/src/lib/data'
import Link from '@docusaurus/Link'

import styles from './SectionNetworks.module.css'

const SectionNetworks = () => {

  const renderNetworkCard = ({ name, href, logo }, index) => (
    <li key={index} className={styles['item']}>
      <Link to={href} className={clsx(styles['inner'], 'text-decoration-none', 'link-styles-none')}>
        <div className={styles['logo-wrap']}>
          <img src={logo} alt={`${name} logo`} />
        </div>
        {name}
      </Link>
    </li>
  )

  return (
    <section className={styles['wrapper']}>
      <ul className={styles['list']}>
        {NETWORK_LINKS.map((item, index) =>
          renderNetworkCard(item, index)
        )}
      </ul>
    </section>
  )
}

export default SectionNetworks
