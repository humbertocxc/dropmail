import { BiSolidCopy } from 'react-icons/bi'

export default function Email() {
  return (
    <div className="p-4 w-full max-w-2xl m-auto">
      <span className="text-xs text-zinc-700 dark:text-zinc-500">
        Your temporary email address
      </span>

      <div 
        className="flex flex-row border-1 border-zinc-300 hover:border-zinc-200
      dark:border-zinc-700 hover:dark:border-zinc-800 rounded-md transition-all overflow-hidden"
      >
        <span
          className="flex flex-1 p-2 items-center border-r-1 hover:border-zinc-200
          dark:border-zinc-700 hover:dark:border-zinc-800"
        >
          Dysyky@ema-sofia.eu
        </span>

        <button
          className="flex items-center px-3 hover:scale-105 transition-all hover:bg-zinc-200
        hover:dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
        >
          <BiSolidCopy className="mr-1" />
          <span>Copy</span>
        </button>

      </div>
    </div>
  )
}
