import React from 'react'
import styles from './Loading.module.css'

const Loading = () => {
  return (
    <>
      {console.log('Loading')}
      <h1 className={styles.loading}>Loading...</h1>
      <div className={styles.container} />
    </>
  )
}

export default Loading
