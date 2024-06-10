import { Fragment } from "react";
import ProgressBar from "../atoms/ProgressBar";

export default function SkillWithProgressBar({
  skill,
  backgroundColor,
  roundSize,
  size,
  container,
  center,
  percent,
  isShowPercent,
  color,
}) {
  return (
    <Fragment>
      <p>{skill}</p>
      <ProgressBar
        backgroundColor={backgroundColor}
        roundSize={roundSize}
        size={size}
        container={container}
        center={center}
        percent={percent}
        isShowPercent={isShowPercent}
        color={color}
      />
    </Fragment>
  );
}
