import { BiSolidCheckCircle, BiSolidCopy } from 'react-icons/bi'
import useGetSession from '../../Hooks/useGetSession'
import { useState } from 'react'
import delay from '../../utils/delay'

export default function Email() {
  const emailAddress = useGetSession()
  const [isCopying, setIsCopying] = useState(false)

  const handleCopyEmail = async () => {
    setIsCopying(true)
    navigator.clipboard.writeText(emailAddress)
    await delay()
    setIsCopying(false)
  }

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
          {emailAddress}
        </span>
        <button
          className="flex items-center px-3 hover:scale-105 transition-all hover:bg-zinc-200
            hover:dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300"
          onClick={handleCopyEmail}
          disabled={isCopying}
        >
          {isCopying ? (
            <BiSolidCheckCircle />
          ) : (
            <BiSolidCopy className="mr-1" />
          )}
        </button>
      </div>
    </div>
  )
}
