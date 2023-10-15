import ThemeButton from './ThemeButton'

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center py-5 px-20">
      <h1 className="text-2xl font-semibold">DropMail</h1>
      <ThemeButton />
    </header>
  )
}
