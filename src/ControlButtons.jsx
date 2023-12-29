export default function ControlButtons({ onStart, onPause, onReset }) {
    return (
        <div style={{ padding: '10px 20px' }}>
            <button className="button" onClick={onStart}>Start</button>
            <button className="button" onClick={onPause}>Pause</button>
            <button className="button" onClick={onReset}>Reset</button>
        </div>
    );
}