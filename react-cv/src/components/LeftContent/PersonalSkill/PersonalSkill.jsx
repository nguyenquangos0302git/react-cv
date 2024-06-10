import { Fragment } from "react";
import SkillWithProgressBar from "../../molecules/SkillWithProgressBar";

export default function PersonalSkill() {
  return (
    <Fragment>
      <p className="w3-large">
        <b>
          <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal" />
          Skills
        </b>
      </p>
      <SkillWithProgressBar
        skill="Adobe Photoshop"
        backgroundColor="light-grey"
        roundSize="round-xlarge"
        size="small"
        container={true}
        center={true}
        percent="90%"
        isShowPercent={true}
        color="teal"
      />
      <p>Photography</p>
      <div className="w3-light-grey w3-round-xlarge w3-small">
        <div
          className="w3-container w3-center w3-round-xlarge w3-teal"
          style={{ width: "80%" }}
        >
          <div className="w3-center w3-text-white">80%</div>
        </div>
      </div>
      <p>Illustrator</p>
      <div className="w3-light-grey w3-round-xlarge w3-small">
        <div
          className="w3-container w3-center w3-round-xlarge w3-teal"
          style={{ width: "75%" }}
        >
          75%
        </div>
      </div>
      <p>Media</p>
      <div className="w3-light-grey w3-round-xlarge w3-small">
        <div
          className="w3-container w3-center w3-round-xlarge w3-teal"
          style={{ width: "50%" }}
        >
          50%
        </div>
      </div>
    </Fragment>
  );
}
