import { useState, useEffect } from "react";
import TimerDisplay from "./TimerDisplay";
import ControlButtons from "./ControlButtons";

export default function PomodoroClock() {
	const [inputValue, setInputValue] = useState("");
	const [timerValue, setTimerValue] = useState(0);
	const [start, setStart] = useState(false);

	const resetTimer = () => {
		setInputValue(0);
		setTimerValue(0);
		setStart(false);
	};

    const startTimer = () => {
        if (timerValue === 0) {
            setTimerValue(inputValue*60);
        }
        setStart(true);
    };

	const changeTimer = () => {
		setTimerValue(inputValue * 60);
	};

	const pauseTimer = () => {
		setStart(false);
	};

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	useEffect(
		function myEffect() {
			let intervalId;
			if (start && timerValue > 0) {
				intervalId = setInterval(() => {
					setTimerValue((timerValue) => timerValue - 1);
				}, 1000);
			}

			return () => clearInterval(intervalId); // This clears the interval when the component unmounts
		},
		[start, timerValue]
	);

	return (
		<div
			style={{
				padding: "0px 15px",
				backgroundColor: "#F1F2F0",
				opacity: "0.7",
			}}
		>
			<h1 style={{ fontFamily: "Comic Sans MS", fontSize: "70px" }}>
				Pomodoro Clock
			</h1>

			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<h3 style={{ fontFamily: "Comic Sans MS", fontSize: "20px" }}>
					Enter time in minutes:{" "}
				</h3>
				<input
					type="number"
					value={inputValue}
					onChange={handleChange}
                    min={0}
					placeholder={0}
					style={{
						padding: "10px 10px",
						fontFamily: "Comic Sans MS",
						width: "50px",
						backgroundColor: "transparent",
						border: "1px solid #000",
					}}
				></input>
			</div>

			<div style={{ marginBottom: "20px" }}>
				<button className="button" onClick={changeTimer}>
					Submit
				</button>
			</div>
			<TimerDisplay seconds={timerValue} />
			<ControlButtons
				onStart={startTimer}
				onPause={pauseTimer}
				onReset={resetTimer}
			/>
		</div>
	);
}
