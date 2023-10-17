import { useState } from 'react'
import InboxDetails from './InboxDetails'
import InboxList from './InboxList'
import useGetEmails, { IMail } from '../../Hooks/useGetEmails'

export default function Footer() {
  const { emails } = useGetEmails()
  const [selectedEmail, setSelectedEmail] = useState<IMail>()

  const handleSelectEmail = (id: number) => {
    setSelectedEmail(emails[id])
  }

  return (
    <footer className="border-t-1 border-zinc-300 dark:border-zinc-700 h-96 grid grid-cols-1 sm:grid-cols-3">
      <InboxList emails={emails} handleSelectEmail={handleSelectEmail} />
      <InboxDetails email={selectedEmail} notEmpty={!!selectedEmail} />
    </footer>
  )
}
