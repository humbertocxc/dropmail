import InboxDetails from './InboxDetails'
import InboxList from './InboxList'

export default function Footer() {
  return (
    <footer className="border-t-1 border-zinc-300 dark:border-zinc-700 h-96 grid grid-cols-1 sm:grid-cols-3">
      <InboxList />
      <InboxDetails />
    </footer>
  )
}
