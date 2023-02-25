import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from "./Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/109993412?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Victor Costa</strong>

              <time
                title="25 de Fevereiro às 15:00"
                dateTime="2023-02-24 15:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
                <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
            <button>
                <ThumbsUp />
                Aplaudir <span>20</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
