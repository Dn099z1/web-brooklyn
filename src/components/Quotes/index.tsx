import quotes from 'data/quotes.json'
import { FaTwitch } from 'react-icons/fa'

import styles from './styles.module.scss'

export const Quotes = () => (
  <section className="background quotes" id="section-quotes">
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>Não Tem Certeza?</h3>
        <h1>Veja A Opinião De Outras Pessoas</h1>
        <p>
        </p>

      </div>

      <ul className={styles.quotes}>
        {quotes.map(quote => (
          <li key={quote.username} className={styles.quote}>
            <header>
              <div className={styles['quote-user-image']}>
                <img src={quote.avatar_url} alt="" />
              </div>
              <div className={styles['quote-user-info']}>
                <strong>{quote.username}</strong>
                <span>{quote.tag}</span>
              </div>
              <a
                target="_blank"
                rel="noreferrer"
                href="/"
              >
                <FaTwitch />
              </a>
            </header>
            <p>{quote.text}</p>
            <time>{quote.date}</time>
          </li>
        ))}
      </ul>
    </div>
  </section>
)
