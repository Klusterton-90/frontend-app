import React from 'react'
import styles from './LandingButton.module.scss'

export default function LandingButton({text, onClick}) {
  return (
    <button className={styles.signUpButton} onClick={onClick}>{text}</button>

  )
}
