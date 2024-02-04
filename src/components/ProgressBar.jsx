import { useEffect, useState } from "react"

export default function ProgressBar({timeout, onTimeout}){
	const [remainingTime, setRemainingTime] = useState(timeout)

	useEffect(() => {
		setTimeout(onTimeout, timeout);
	}, [timeout, onTimeout])

	useEffect(() => {
		setInterval(() => {
			setRemainingTime((prev) => {
				return prev = prev - 100
			})
		}, 100)
	}, [])


	return (
	<>
		<progress id="guestion-time" max={timeout} value={remainingTime} />
	</>
	)
}
