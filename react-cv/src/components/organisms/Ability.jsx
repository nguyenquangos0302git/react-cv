import { Fragment } from 'react';
import SkillWithProgressBar from '../molecules/SkillWithProgressBar';
import clsx from 'clsx';
import IconWithText from '../molecules/IconWithText';

export default function Ability({
  abilityTitle,
  sizeIconAndText,
  textTheme,
  iconName,
  iconAndTextColor,
  skills,
  backgroundColor,
  roundSize,
  size,
  container,
  center,
  isShowPercent,
  color,
  height,
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
          <IconWithText
            name={iconName}
            fullWidth={true}
            margin='right'
            color={iconAndTextColor}
            textName={abilityTitle}
          />
        </b>
      </p>
      {skills.map((skill, index) => {
        return (
          <SkillWithProgressBar
            key={index}
            skill={skill.name}
            backgroundColor={backgroundColor}
            roundSize={roundSize}
            size={size}
            container={container}
            center={center}
            percent={skill.percent}
            isShowPercent={isShowPercent}
            color={color}
            height={height}
          />
        );
      })}
    </Fragment>
  );
}
