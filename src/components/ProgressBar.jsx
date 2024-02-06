import { useEffect, useState } from "react"

export default function ProgressBar({timeout, onTimeout}){
	const [remainingTime, setRemainingTime] = useState(timeout)

	useEffect(() => {
		const to = setTimeout(onTimeout, timeout);

		return () => {
			clearTimeout(to);
		}
	}, [timeout, onTimeout])

	useEffect(() => {
		const interval = setInterval(() => {
			setRemainingTime((prev) => {
				return prev = prev - 100
			})
		}, 100)

		return () => {
			clearInterval(interval);
		}
	}, [])


	return (
	<>
		<progress id="guestion-time" max={timeout} value={remainingTime} />
	</>
	)
}
