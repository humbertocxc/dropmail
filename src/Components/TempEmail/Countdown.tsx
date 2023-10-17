import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface IProps {
  refetch: () => void,
}

export default function Countdown({ refetch }: IProps) {
  return (
    <CountdownCircleTimer
      isPlaying
      duration={15}
      colors={['#004777', '#F7B801', '#A30000']}
      colorsTime={[15, 10, 0]}
      size={30}
      strokeWidth={2}
      onComplete={() => {
        refetch()
        return { shouldRepeat: true, delay: 1 }
      }}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  )
}
