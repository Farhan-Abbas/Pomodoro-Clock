function secondsToTime(secs) {
	let hours = Math.floor(secs / (60 * 60));

	let divisor_for_minutes = secs % (60 * 60);
	let minutes = Math.floor(divisor_for_minutes / 60);

	let divisor_for_seconds = divisor_for_minutes % 60;
	let seconds = Math.ceil(divisor_for_seconds);

	let obj = {
		h: hours.toString().padStart(2, "0"), // Add leading zero to hours
		m: minutes.toString().padStart(2, "0"), // Add leading zero to minutes
		s: seconds.toString().padStart(2, "0"), // Add leading zero to seconds
	};
	return obj;
}

export default function TimerDisplay({ seconds }) {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					padding: "10px",
					width: "350px",
					height: "100px",
					fontSize: "73px",
				}}
			>
				{secondsToTime(seconds).h} : {secondsToTime(seconds).m} :{" "}
				{secondsToTime(seconds).s}
			</div>
		</div>
	);
}
