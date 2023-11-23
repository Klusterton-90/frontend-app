import React from 'react'
import styles from './BenefitsCard.module.scss'
import Image from 'next/image'

export default function BenefitsCard({icon, title, description}) {
  return (
    <div className={styles.aboutContainer}>
          <div className={styles.iconContainer}>
            <Image src={icon} alt="" width={48} height={48} />
          </div>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
    
  )
}
