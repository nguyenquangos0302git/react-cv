import { Fragment } from "react";
import SkillWithProgressBar from "../molecules/SkillWithProgressBar";
import clsx from "clsx";

export default function Ability({
  ability,
  sizeIconAndText,
  textTheme,
  iconName,
  iconAndTextColor,
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
      <p
        className={clsx(
          sizeIconAndText && `w3-${sizeIconAndText}`,
          textTheme && `w3-${textTheme}`
        )}
      >
        <b>
          <i
            className={clsx(
              "fa",
              iconName && `w3-${iconName}`,
              "fa-fw",
              "w3-margin-right",
              iconAndTextColor && `w3-text-${iconAndTextColor}`
            )}
          />
          {ability}
        </b>
      </p>
      <SkillWithProgressBar
        skill={skill}
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
