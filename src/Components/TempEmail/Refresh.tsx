import { useState } from 'react'
import { IoRefreshOutline } from 'react-icons/io5'
import useGetEmails from '../../Hooks/useGetEmails'
import delay from '../../utils/delay'

export default function Refresh() {
  const { refetch } = useGetEmails()
  const [isRefetching, setIsRefetching] = useState(false)

  const handleRefetch = async () => {
    setIsRefetching(true)
    refetch()
    await delay()
    setIsRefetching(false)
  }

  return (
    <div className="flex items-center gap-5 justify-center">
      <div className="flex gap-2">
        <span>Autorefresh in </span>
        <span className="flex items-center justify-center p-2 rounded-full w-6 h-6 border-1.5 border-blue-500">
          5
        </span>
      </div>
      <button
        className="flex flex-row items-center justify-center hover:scale-105 transition-all"
        onClick={handleRefetch}
        disabled={isRefetching}
      >
        <IoRefreshOutline className="mr-1"/>
        <span>{isRefetching ? 'Refetching...' : 'Refetch'}</span>
      </button>
    </div>
  )
}
