/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import { useGetEmailsLazyQuery } from '../__generated__/graphql'

export type IMail = ({
  __typename?: 'Mail' | undefined;
  rawSize: number;
  fromAddr: string;
  toAddr: string;
  downloadUrl: any;
  text?: string | null | undefined;
  headerSubject?: string | null | undefined;
} | null)

function useGetEmails() {
  const [getEmails, { data, refetch }] = useGetEmailsLazyQuery()
  let emails: IMail[] = []


  useEffect(() => {
    const sessionId = localStorage.getItem('sessionId') || ''
    getEmails({ variables: { id: sessionId } })
  }, [])

  if (data?.session?.mails) {
    const emails = data.session.mails
    localStorage.setItem('emails', JSON.stringify(emails))
    return { emails, refetch }
  }

  try {
    const emailsData = localStorage.getItem('emails') || ''
    emails = JSON.parse(emailsData)
  } catch {
    emails = []
  }

  return { emails, refetch }
}

export default useGetEmails
