import { IMail } from '../../Hooks/useGetEmails'

interface IProps {
  email: IMail | undefined,
  notEmpty: boolean,
}

export default function InboxDetails({ email, notEmpty }: IProps) {
  return (
    <div
      className="flex flex-col p-1 border-t-1 border-zinc-300 dark:border-zinc-700 mt-12 col-span-2"
    >
      {notEmpty ?
        (
          <>
            <div className="flex flex-row justify-between items-center">
              <h3 className="font-semibold p-2">{email?.headerSubject}</h3>
              <span className="text-sm font-light">from {email?.fromAddr}</span>
            </div>
            <div className="h-full rounded-md bg-white dark:bg-zinc-800 border-1.5 border-zinc-300 dark:border-zinc-700 p-3">
              <p className="h-5/6">{email?.text}</p>
              <a className="float-right text-sm" href={email?.downloadUrl}>Download email</a>
            </div>
          </>
        ) : <p>No email selected</p>
      }
    </div>
  )
}
