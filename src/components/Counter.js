// src/components/Counter.jsx
import CountUp from "react-countup";

export default function Counter({ end = 100, decimals = 0, extraClass = "" }) {
  return (
    <CountUp
      end={end}
      duration={3}
      decimals={decimals}
      enableScrollSpy
      scrollSpyOnce
    >
      {({ countUpRef }) => (
        <span
          className={`count-text ${extraClass}`}
          data-from="0"
          data-to={end}
          ref={countUpRef}
        />
      )}
    </CountUp>
  );
}

