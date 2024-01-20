import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useDataBaseStore = defineStore('database', () => {
  const chatList = ref(
    [
      {
        userId: 1,
        id: 1,
        name: 'Имя чата 1',
        lastMessage: 'Последнее сообщение из чата 1',
        avatarUrl: '../public/photo_5363923697959816410_y.jpg',
        messagesMy: ['cdjcndjcnd', 'jcdjncdjc', 'cjdncjdncjdc'],
        messagesAnother: ['cdjcndjcnd', 'jcdjncdjc', 'cjdncjdncjdc']
      },
      {
        userId: 1,
        id: 2,
        name: 'Имя чата 2',
        lastMessage: 'Последнее сообщение из чата 1',
        avatarUrl: '../public/photo_5363923697959816410_y.jpg',
        messagesMy: ['cdjcndjcnd2', 'jcdjncdjc', 'cjdncjdncjdc'],
        messagesAnother: ['cdjcndjcnd', 'jcdjncdjc', 'cjdncjdncjdc']
      },
      {
        userId: 1,
        id: 3,
        name: 'Имя чата 3',
        lastMessage: 'Последнее сообщение из чата 1',
        avatarUrl: '../public/photo_5363923697959816410_y.jpg',
        messagesMy: ['cdjcndjcnd3', 'jcdjncdjc', 'cjdncjdncjdc'],
        messagesAnother: ['cdjcndjcnd', 'jcdjncdjc', 'cjdncjdncjdc']
      },
      {
        userId: 1,
        id: 4,
        name: 'Имя чата 4',
        lastMessage: 'Последнее сообщение из чата 1',
        avatarUrl: '../public/photo_5363923697959816410_y.jpg',
        messagesMy: ['cdjcndjcnd4', 'jcdjncdjc', 'cjdncjdncjdc'],
        messagesAnother: ['cdjcndjcnd', 'jcdjncdjc', 'cjdncjdncjdc']
      }
    ]
  )

  return { chatList }
})
