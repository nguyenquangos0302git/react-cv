import { Fragment } from "react";

const personalContacts = [
  {
    key: 1,
    icon: "fa-briefcase",
    name: "Designer",
  },
  {
    key: 2,
    icon: "fa-home",
    name: "London, UK",
  },
  {
    key: 3,
    icon: "fa-envelope",
    name: "ex@mail.com",
  },
  {
    key: 4,
    icon: "fa-phone",
    name: "1224435534",
  },
];

const personalSkills = [
  {
    key: 1,
    skill: "Adobe Photoshop",
    percent: "90%",
  },
  {
    key: 2,
    skill: "Photography",
    percent: "80%",
  },
  {
    key: 3,
    skill: "Illustrator",
    percent: "75%",
  },
  {
    key: 4,
    skill: "Media",
    percent: "50%",
  },
];

const personalLanguages = [
  {
    key: 1,
    language: "English",
    percent: "100%",
  },
  {
    key: 1,
    language: "Spanish",
    percent: "55%",
  },
  {
    key: 1,
    language: "German",
    percent: "25%",
  },
];

function PersonalInfo() {
  return (
    <div className="w3-display-container">
      <img
        src="https://www.w3schools.com/w3images/avatar_hat.jpg"
        style={{ width: "100%" }}
        alt="Avatar"
      />
      <div className="w3-display-bottomleft w3-container w3-text-black">
        <h2>Jane Doe</h2>
      </div>
    </div>
  );
}

function PersonalContactDetail(props) {
  const { icon, name } = props.personalContext;
  return (
    <Fragment>
      <p>
        <i
          className={`fa ${icon} fa-fw w3-margin-right w3-large w3-text-teal`}
        />
        {name}
      </p>
    </Fragment>
  );
}

function PersonalContact() {
  return (
    <Fragment>
      {personalContacts.map((personalContext) => {
        return (
          <PersonalContactDetail
            personalContext={personalContext}
            key={PersonalContact.key}
          />
        );
      })}
    </Fragment>
  );
}

function PersonalSkillInfo(props) {
  const { skill, percent } = props.personalSkill;
  return (
    <Fragment>
      <p>${skill}</p>
      <div className="w3-light-grey w3-round-xlarge w3-small">
        <div
          className="w3-container w3-center w3-round-xlarge w3-teal"
          style={{ width: `${percent}` }}
        >
          <div className="w3-center w3-text-white">{percent}</div>
        </div>
      </div>
    </Fragment>
  );
}

function PersonalSkill() {
  return (
    <Fragment>
      <p className="w3-large">
        <b>
          <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal" />
          Skills
        </b>
      </p>
      {personalSkills.map((personalSkill) => {
        return (
          <PersonalSkillInfo
            personalSkill={personalSkill}
            key={personalSkill.key}
          />
        );
      })}
      <br />
    </Fragment>
  );
}

function PersonalLanguageInfo(props) {
  const { language, percent } = props.personalLanguage;
  return (
    <Fragment>
      <p>{language}</p>
      <div className="w3-light-grey w3-round-xlarge">
        <div
          className="w3-round-xlarge w3-teal"
          style={{ height: 24, width: `${percent}` }}
        />
      </div>
    </Fragment>
  );
}

function PersonalLanguages() {
  return (
    <Fragment>
      <p className="w3-large w3-text-theme">
        <b>
          <i className="fa fa-globe fa-fw w3-margin-right w3-text-teal" />
          Languages
        </b>
      </p>
      {personalLanguages.map((personalLanguage) => {
        return (
          <PersonalLanguageInfo
            personalLanguage={personalLanguage}
            key={personalLanguage.key}
          />
        );
      })}
    </Fragment>
  );
}

function PageContainer() {
  return (
    <Fragment>
      {/* Page Container */}
      <div className="w3-content w3-margin-top" style={{ maxWidth: 1400 }}>
        {/* The Grid */}
        <div className="w3-row-padding">
          {/* Left Column */}
          <div className="w3-third">
            <div className="w3-white w3-text-grey w3-card-4">
              <PersonalInfo />
              <div className="w3-container">
                <PersonalContact />
                <hr />
                <PersonalSkill />
                <PersonalLanguages />
                <hr />
              </div>
            </div>
            <br />
            {/* End Left Column */}
          </div>
          {/* Right Column */}
          <div className="w3-twothird">
            <div className="w3-container w3-card w3-white w3-margin-bottom">
              <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
                Work Experience
              </h2>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Front End Developer / w3schools.com</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right" />
                  Jan 2015 -{" "}
                  <span className="w3-tag w3-teal w3-round">Current</span>
                </h6>
                <p>
                  Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel
                  in deserunt aspernatur est reprehenderit sunt hic. Nulla
                  tempora soluta ea et odio, unde doloremque repellendus iure,
                  iste.
                </p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Web Developer / something.com</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right" />
                  Mar 2012 - Dec 2014
                </h6>
                <p>
                  Consectetur adipisicing elit. Praesentium magnam consectetur
                  vel in deserunt aspernatur est reprehenderit sunt hic. Nulla
                  tempora soluta ea et odio, unde doloremque repellendus iure,
                  iste.
                </p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>Graphic Designer / designsomething.com</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right" />
                  Jun 2010 - Mar 2012
                </h6>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                </p>
                <br />
              </div>
            </div>
            <div className="w3-container w3-card w3-white">
              <h2 className="w3-text-grey w3-padding-16">
                <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
                Education
              </h2>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>W3Schools.com</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right" />
                  Forever
                </h6>
                <p>Web Development! All I need to know in one place</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>London Business School</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right" />
                  2013 - 2015
                </h6>
                <p>Master Degree</p>
                <hr />
              </div>
              <div className="w3-container">
                <h5 className="w3-opacity">
                  <b>School of Coding</b>
                </h5>
                <h6 className="w3-text-teal">
                  <i className="fa fa-calendar fa-fw w3-margin-right" />
                  2010 - 2013
                </h6>
                <p>Bachelor Degree</p>
                <br />
              </div>
            </div>
            {/* End Right Column */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Page Container */}
      </div>
    </Fragment>
  );
}

function Footer() {
  return (
    <footer className="w3-container w3-teal w3-center w3-margin-top">
      <p>Find me on social media.</p>
      <i className="w3-margin-right fa fa-facebook-official w3-hover-opacity" />
      <i className=" w3-margin-right fa fa-instagram w3-hover-opacity" />
      <i className="w3-margin-right fa fa-snapchat w3-hover-opacity" />
      <i className="w3-margin-right fa fa-pinterest-p w3-hover-opacity" />
      <i className="w3-margin-right fa fa-twitter w3-hover-opacity" />
      <i className="w3-margin-right fa fa-linkedin w3-hover-opacity" />
      <p>
        Powered by{" "}
        <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">
          w3.css
        </a>
      </p>
    </footer>
  );
}

function App() {
  return (
    <Fragment>
      <PageContainer />
      <Footer />
    </Fragment>
  );
}

export default App;
