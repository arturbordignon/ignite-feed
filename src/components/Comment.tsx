import { Trash, ThumbsUp } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/arturbordignon.png" alt='' />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Artur Bordignon</strong>
                <time title="22 de Junho às 14:50" dateTime="2022-06-22 14:50:00">Cerca de 1h atrás</time>
              </div>

              <button onClick={handleDeleteComment} title="Deletar Comentários">
                <Trash size={24}/>
              </button>
            </header>

            <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}