export default function InboxDetails() {
  return (
    <div
      className="flex flex-col p-1 border-t-1 border-zinc-300 dark:border-zinc-700 mt-12 col-span-2"
    >
      <h3 className="font-semibold p-2">Welcome</h3>
      <div className="h-full rounded-md bg-white dark:bg-zinc-800 border-1.5 border-zinc-300 dark:border-zinc-700 p-3">
        <p className="h-full">
          Hi drf,
          Your temp e-mail address is ready
          If you need help read the information below and do not hesitate to contact us.

          All the best,
          DropMail
        </p>
      </div>
    </div>
  )
}
