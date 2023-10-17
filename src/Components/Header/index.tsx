import { AllowNotifications } from './AllowNotifications'
import ThemeButton from './ThemeButton'

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center py-5 px-20">
      <div className="flex flex-row items-center space-x-4">
        <h1 className="text-2xl font-semibold">DropMail</h1>
        <AllowNotifications />
      </div>
      <ThemeButton />
    </header>
  )
}
