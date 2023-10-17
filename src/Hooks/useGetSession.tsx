import { useEffect } from 'react'
import { useIntroduceSessionMutation } from '../__generated__/graphql'

export interface ISession {
  id: string,
  expiresAt: string,
  addresses: {
    address: string,
  }[],
}

function useGetSession() {
  let session: ISession | null

  try {
    const sessionData = localStorage.getItem('session') || ''
    session = JSON.parse(sessionData)
  } catch {
    session = null
  }

  if (session && session.expiresAt) {
    const now = new Date().getTime()
    const expireDate = new Date(session.expiresAt).getTime()

    if (expireDate > now) return session.addresses[0].address
  }

  const [mutateFunction, { data, loading }] = useIntroduceSessionMutation()

  useEffect(() => {
    mutateFunction()
  }, [])

  if (loading) return 'Loading email...'

  if (data?.introduceSession) {
    localStorage.setItem('session', JSON.stringify(data.introduceSession))
    localStorage.setItem('sessionId', data.introduceSession.id)
    const addresses = data?.introduceSession?.addresses 
    const address = addresses?.length ? addresses[0]?.address : ''
    return address || ''
  }

  return 'Error fetching email'
}

export default useGetSession
