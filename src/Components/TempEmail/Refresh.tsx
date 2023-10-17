import { useState } from 'react'
import { IoRefreshOutline } from 'react-icons/io5'
import useGetEmails from '../../Hooks/useGetEmails'
import delay from '../../utils/delay'
import Countdown from './Countdown'

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
      <div className="flex items-center gap-2">
        <span>Autorefresh in </span>
        <Countdown refetch={handleRefetch} />
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
