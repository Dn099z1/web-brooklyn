import { useState } from 'react'
import styles from './styles.module.scss'

export const Newsletter = () => {
  const [email, setEmail] = useState<string>('')
  const [hasFocusInput, setHasFocusInput] = useState<boolean>(false)

  return (
    <section>
      <div className={styles.container} id="section-newsletter">
        <img src="toten.png" alt="" />

        <div className={styles.content}>
          <h3>Procura Ser Staff??</h3>
          <h1>Envie Seu Email Haverá Contato</h1>

          <p>
            Para Participar Da Equipe Do Brooklyn Você Deve Ter Mais De 16 Anos!
          </p>

          <form className={styles.form}>
            <div
              className={`${styles.field} ${
                hasFocusInput ? styles['field-active'] : ''
              }`}
            >
              <label htmlFor="">Seu Email</label>
              <input
                type="email"
                placeholder="jorginho@gmail.com"
                onChange={e => setEmail(e.target.value)}
                onFocus={() => setHasFocusInput(true)}
                onBlur={() => setHasFocusInput(!!email)}
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  )
}
