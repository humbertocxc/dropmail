export default function InboxList() {
  return (
    <div className="h-full border-r-1 bg-white dark:border-zinc-700 dark:bg-zinc-900 col-span-1">
      <div className="p-3 border-b-1 border-zinc-300 dark:border-zinc-700">
        <p>Inbox</p>
      </div>
      <ul>
        <li className="flex flex-col p-1 border-b-1 dark:border-zinc-700 leading-3">
          <p className="font-semibold my-1.5">Hello</p>
          <span className="text-blue-600 text-sm font-semibold">Welcome</span>
          <span className="font-normal text-sm text-gray-500">Your temp e-mail address is ready...</span>
        </li>
      </ul>
    </div>
  )
}
