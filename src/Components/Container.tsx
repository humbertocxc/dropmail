import Footer from './Footer'
import TempEmail from './TempEmail'

export default function Container() {
  return (
    <div className="my-2 m-auto h-fit max-w-6xl border-zinc-200 dark:border-zinc-950
    bg-zinc-200 dark:bg-zinc-600 border-1 rounded-lg overflow-hidden"
    >
      <TempEmail />
      <Footer />
    </div>
  )
}
