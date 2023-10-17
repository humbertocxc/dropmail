import { useState } from 'react'
import { BiBell, BiBellOff } from 'react-icons/bi'

export const AllowNotifications = () => {
  const [permissionStatus, setPermissionStatus] = useState(
    Notification.permission
  )
  const allowed = permissionStatus === 'granted'

  return (
    <button
      onClick={() =>
        Notification.requestPermission().then((status) =>
          setPermissionStatus(status)
        )
      }
      className="hover:underline"
      disabled={allowed}
    >
      {allowed
        ? <BiBell />
        : <BiBellOff />
      }
    </button>
  )
}
