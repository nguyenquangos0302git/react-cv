import PersonAvatar from "./PersonalAvatar/PersonalAvatar";
import PersonalContact from "./PersonalContact/PersonalContact";
import PersonalLanguage from "./PersonalLanguage/PersonalLanguage";
import PersonalSkill from "./PersonalSkill/PersonalSkill";

export default function LeftContent() {
  return (
    <div className="w3-third">
      <div className="w3-white w3-text-grey w3-card-4">
        <div className="w3-display-container">
          <PersonAvatar />
        </div>
        <div className="w3-container">
          <PersonalContact />
          <hr />
          <PersonalSkill />
          <br />
          <PersonalLanguage />
          <br />
        </div>
      </div>
      <br />
    </div>
  );
}
