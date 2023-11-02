import React from 'react';
import './Chat.css';
import styles from './Chat.module.css';

function ChatBlock() {
  return (
    <div className={styles.message}>
      <img src="/images/message.svg" alt="" />
    </div>
  );
}

export default ChatBlock;
