import React, { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/inertia-react';
import { UsePageProps } from '../../inertia';
import { Page } from '@inertiajs/inertia';
import styles from './flash.module.scss';
import { classNames } from '../../utils/styles';
import { IoCloseCircleOutline } from '@react-icons/all-files/io5/IoCloseCircleOutline';

enum AlertType {
  Warn = 'warn',
  Info = 'info',
}

interface Message {
  type: AlertType;
  value: string;
  id: symbol;
}

export const Flash = () => {
  const { flash } = usePage<Page<UsePageProps>>().props;

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (flash) {
      const _msgs: Message[] = [];
      if (flash.message) {
        _msgs.push({ value: flash.message, id: Symbol.for(flash.message), type: AlertType.Info });
      }
      if (flash.alert) {
        _msgs.push({ value: flash.alert, id: Symbol.for(flash.alert), type: AlertType.Warn });
      }
      setMessages(_msgs);
    }
  }, [flash]);

  const clearMessage = (id: symbol) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  const applyClass = (msg: Message) => {
    switch (msg.type) {
      case AlertType.Info:
        return styles.info;
      case AlertType.Warn:
        return styles.warn;
    }
  };

  return (
    <div className={styles.container}>
      {messages.map((msg) => {
        return (
          <div key={msg.id.toString()} className={classNames(styles.wrapper, applyClass(msg))}>
            <div className={styles.message}>{msg.value}</div>

            <div className={styles.close}>
              <IoCloseCircleOutline size={20} onClick={() => clearMessage(msg.id)} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
