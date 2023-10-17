/* eslint-disable @typescript-eslint/no-explicit-any */
import { IMail } from '../../Hooks/useGetEmails'

interface IProps {
  emails: IMail[] | any[],
  handleSelectEmail: (id: number) => void,
}

export default function InboxList({ emails, handleSelectEmail }: IProps) {
  return (
    <div className="h-full border-r-1 bg-white dark:border-zinc-700 dark:bg-zinc-900 col-span-1">
      <div className="p-3 border-b-1 border-zinc-300 dark:border-zinc-700">
        <p>Inbox</p>
      </div>
      <ul>
        {emails?.length
          ? emails.map((mail, id) => (
            <li key={id} className="flex flex-col p-1 border-b-1 dark:border-zinc-700 leading-3">
              <button onClick={() => handleSelectEmail(id)}>
                <p className="font-semibold my-1.5">{mail?.headerSubject}</p>
                <span className="text-blue-600 text-sm font-semibold">{mail?.fromAddr}</span>
              </button>
            </li>
          )) : (
            <li className="p-1">
              <p>Empty inbox</p>
            </li>
          )}
      </ul>
    </div>
  )
}
