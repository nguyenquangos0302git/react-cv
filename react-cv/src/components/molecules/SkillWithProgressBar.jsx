import { Fragment } from 'react';
import ProgressBar from '../atoms/ProgressBar';

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
  height,
  ...props
}) {
  return (
    <Fragment>
      <p>{skill}</p>
      <ProgressBar {...props} />
    </Fragment>
  );
}
