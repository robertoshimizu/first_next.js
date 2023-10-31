import { Chat } from '@/components/chat'

const chat = {
  id: 'opa',
  messages: ['messages', 'messages']
}

export default function Dashboard() {
  return <Chat id={chat.id} initialMessages={chat.messages} />

}