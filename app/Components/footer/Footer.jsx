import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import configurations from '@/_data/config'
import styles from './footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}  >
        <h1>THE V2V PROJECT.</h1>
        <small>Incorporated 2021.</small>
    </footer>
  )
}
