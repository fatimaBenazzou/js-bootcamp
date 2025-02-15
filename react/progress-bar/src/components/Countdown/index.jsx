import moment from "moment";
import { useEffect, useState } from "react";
import Card from "./Card";

function Countdown() {
    const [targetDate, setTargetDate] = useState("");
    const [isRunning, setIsRunning] = useState(false);
    const [timeLeft, setTimeLeft] = useState(null);

    useEffect(() => {
        if (!isRunning || !targetDate) return;
        const interval = setInterval(() => {
            const then = moment(targetDate, "YYYY-MM-DDTHH:mm");
            const now = moment();

            if (then.isBefore(now)) {
                clearInterval(interval);
                setIsRunning(false);
                return;
            }

            const duration = moment.duration(then.diff(now));
            console.log(duration);
            setTimeLeft({
                days: Math.floor(duration.asDays()),
                hours: duration.hours(),
                minutes: duration.minutes(),
                seconds: duration.seconds(),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning, targetDate]);

    useEffect(() => {
        if (!isRunning) {
            setTargetDate("");
        }
    }, [isRunning]);

    useEffect(() => {
        if (targetDate === "") {
            setTimeLeft(null);
        }
    }, [targetDate]);

    const startCountdown = () => {
        if (targetDate) {
            setIsRunning(true);
        }
    };
    const ResetCountdown = () => {
        setIsRunning(false);
    };

    const counters = [
        {
            label: "Days",
            value: timeLeft?.days,
            percentage: timeLeft?.days / 30,
        },
        {
            label: "Hours",
            value: timeLeft?.hours,
            percentage: timeLeft?.hours / 24,
        },
        {
            label: "Minutes",
            value: timeLeft?.minutes,
            percentage: timeLeft?.minutes / 60,
        },
        {
            label: "Seconds",
            value: timeLeft?.seconds,
            percentage: timeLeft?.seconds / 60,
        },
    ];

    return (
        <section>
            <h1>Countdown Timer</h1>
            <input
                type="datetime-local"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
            />

            <div>
                <button onClick={startCountdown}>Start</button>
                <button onClick={ResetCountdown}>Reset</button>
            </div>

            {timeLeft && (
                <div>
                    {counters.map((counter, i) => (
                        <Card key={counter.label + i} counter={counter} />
                    ))}
                </div>
            )}
        </section>
    );
}

export default Countdown;
