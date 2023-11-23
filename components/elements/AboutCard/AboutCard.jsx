import React from 'react'
import styles from './AboutCard.module.scss'
import Image from 'next/image'

export default function AboutCard({icon, title, description}) {
  return (
    <div className={styles.aboutContainer}>
          <div className={styles.iconContainer}>
            <Image src={icon} alt="" width={24} height={24} />
          </div>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
    
  )
}
