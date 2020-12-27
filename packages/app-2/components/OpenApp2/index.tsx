import styles from './styles.module.css'

export default function OpenApp2() {
  return (
    <a
      href="http://localhost:3002"
      target="blank"
      rel="noreferrer"
      className={styles.link}
    >
      Open App 2 &rarr;
    </a>
  )
}