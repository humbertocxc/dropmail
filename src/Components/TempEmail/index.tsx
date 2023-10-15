import Refresh from './Refresh'
import Email from './Email'

export default function TempEmail() {
  return (
    <div className="pb-10 bg-white dark:bg-zinc-900">
      <Email />
      <Refresh />
    </div>
  )
}
