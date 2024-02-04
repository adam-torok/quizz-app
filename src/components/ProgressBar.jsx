import { useEffect, useState } from "react"
const TIMER = 15000;
// For every question we have 15 seconds to answer
// If the timer expires, than skip to the next question

export default function ProgressBar(){
	const [expireTimer, setExpireTimer] = useState(TIMER);

	useEffect(() => {
		let timer = setInterval(() => {
			setExpireTimer((prev) => {
				return prev -= 10
			}, TIMER)
		})
	}, [])

	return <progress max={TIMER} value={expireTimer} />
}
