import clsx from "clsx";

export default function ProgressBar({
  backgroundColor,
  roundSize,
  size,
  container,
  center,
  percent,
  isShowPercent,
  color,
  height,
}) {
  return (
    <div
      className={clsx(
        backgroundColor && `w3-${backgroundColor}`,
        roundSize && `w3-round-${roundSize}`,
        size && `w3-${size}`
      )}
    >
      <div
        className={clsx(
          container && `w3-container`,
          center && `w3-center`,
          roundSize && `w3-round-${roundSize}`,
          color && `w3-${color}`
        )}
        style={
          height ? { height, width: `${percent}` } : { width: `${percent}` }
        }
      >
        {isShowPercent && percent}
      </div>
    </div>
  );
}
