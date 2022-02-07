import styles from './Loader.module.scss'

export default function Loader({ loaderText }) {
  return (
    <div className={styles.spinnerContainer}>
      <svg width="87" height="50" viewBox="0 0 87 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <g className={styles.upperbar}>
            <rect width="67" height="14" rx="7" fill="#037bff" />
          </g>
          <g className={styles.middlebar}>
            <rect className={styles.Rectangle2} x="20" y="18" width="67" height="14" rx="7" fill="#037bff" />
          </g>
          <g className={styles.bottombar}>
            <rect y="36" width="67" height="14" rx="7" fill="#037bff" />
          </g>
        </g>
      </svg>

      <p>{loaderText}</p>
    </div>
  )
}
