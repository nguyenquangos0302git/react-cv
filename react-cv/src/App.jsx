import { Fragment, useEffect, useState } from 'react';
import { ThemeContextProvider } from './Context';
// import { UserInfoProvider } from './UserInfoContext';
// import { PersonalContact } from './PersonalContact';
import RightContent from './components/RightContent/RightContent';
import Footer from './components/Footer/Footer';
import HomePage from './components/templates/HomePage';
import Form from './practice/Form';

// export const personalContacts = [
//   {
//     key: 1,
//     icon: 'fa-briefcase',
//     name: 'Designer',
//   },
//   {
//     key: 2,
//     icon: 'fa-home',
//     name: 'London, UK',
//   },
//   {
//     key: 3,
//     icon: 'fa-envelope',
//     name: 'ex@mail.com',
//   },
//   {
//     key: 4,
//     icon: 'fa-phone',
//     name: '1224435534',
//   },
// ];

// const personalSkills = [
//   {
//     key: 1,
//     skill: 'Adobe Photoshop',
//     percent: '90%',
//   },
//   {
//     key: 2,
//     skill: 'Photography',
//     percent: '80%',
//   },
//   {
//     key: 3,
//     skill: 'Illustrator',
//     percent: '75%',
//   },
//   {
//     key: 4,
//     skill: 'Media',
//     percent: '50%',
//   },
// ];

// export const personalLanguages = [
//   {
//     key: 1,
//     language: 'English',
//     percent: '100%',
//   },
//   {
//     key: 1,
//     language: 'Spanish',
//     percent: '55%',
//   },
//   {
//     key: 1,
//     language: 'German',
//     percent: '25%',
//   },
// ];

// function PersonalSkillInfo(props) {
//   const { skill, percent } = props.personalSkill;
//   return (
//     <Fragment>
//       <p>${skill}</p>
//       <div className='w3-light-grey w3-round-xlarge w3-small'>
//         <div
//           className='w3-container w3-center w3-round-xlarge w3-teal'
//           style={{ width: `${percent}` }}
//         >
//           <div className='w3-center w3-text-white'>{percent}</div>
//         </div>
//       </div>
//     </Fragment>
//   );
// }

// function PersonalSkill() {
//   return (
//     <Fragment>
//       <p className='w3-large'>
//         <b>
//           <i className='fa fa-asterisk fa-fw w3-margin-right w3-text-teal' />
//           Skills
//         </b>
//       </p>
//       {personalSkills.map((personalSkill) => {
//         return (
//           <PersonalSkillInfo
//             personalSkill={personalSkill}
//             key={personalSkill.key}
//           />
//         );
//       })}
//       <br />
//     </Fragment>
//   );
// }

// function PageContainer() {
//   return (
//     <Fragment>
//       {/* Page Container */}
//       <div className='w3-content w3-margin-top' style={{ maxWidth: 1400 }}>
//         {/* The Grid */}
//         <div className='w3-row-padding'>
//           {/* Left Column */}
//           <div className='w3-third'>
//             <div className='w3-white w3-text-grey w3-card-4'>
//               <PersonalInfo />
//               <div className='w3-container'>
//                 <PersonalContact />
//                 <hr />
//                 <PersonalSkill />
//                 <PersonalLanguages />
//                 <hr />
//               </div>
//             </div>
//             <br />
//             {/* End Left Column */}
//           </div>
//           {/* Right Column */}
//           <div className='w3-twothird'>
//             <div className='w3-container w3-card w3-white w3-margin-bottom'>
//               <h2 className='w3-text-grey w3-padding-16'>
//                 <i className='fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal' />
//                 Work Experience
//               </h2>
//               <div className='w3-container'>
//                 <h5 className='w3-opacity'>
//                   <b>Front End Developer / w3schools.com</b>
//                 </h5>
//                 <h6 className='w3-text-teal'>
//                   <i className='fa fa-calendar fa-fw w3-margin-right' />
//                   Jan 2015 -{' '}
//                   <span className='w3-tag w3-teal w3-round'>Current</span>
//                 </h6>
//                 <p>
//                   Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel
//                   in deserunt aspernatur est reprehenderit sunt hic. Nulla
//                   tempora soluta ea et odio, unde doloremque repellendus iure,
//                   iste.
//                 </p>
//                 <hr />
//               </div>
//               <div className='w3-container'>
//                 <h5 className='w3-opacity'>
//                   <b>Web Developer / something.com</b>
//                 </h5>
//                 <h6 className='w3-text-teal'>
//                   <i className='fa fa-calendar fa-fw w3-margin-right' />
//                   Mar 2012 - Dec 2014
//                 </h6>
//                 <p>
//                   Consectetur adipisicing elit. Praesentium magnam consectetur
//                   vel in deserunt aspernatur est reprehenderit sunt hic. Nulla
//                   tempora soluta ea et odio, unde doloremque repellendus iure,
//                   iste.
//                 </p>
//                 <hr />
//               </div>
//               <div className='w3-container'>
//                 <h5 className='w3-opacity'>
//                   <b>Graphic Designer / designsomething.com</b>
//                 </h5>
//                 <h6 className='w3-text-teal'>
//                   <i className='fa fa-calendar fa-fw w3-margin-right' />
//                   Jun 2010 - Mar 2012
//                 </h6>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.{' '}
//                 </p>
//                 <br />
//               </div>
//             </div>
//             <div className='w3-container w3-card w3-white'>
//               <h2 className='w3-text-grey w3-padding-16'>
//                 <i className='fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal' />
//                 Education
//               </h2>
//               <div className='w3-container'>
//                 <h5 className='w3-opacity'>
//                   <b>W3Schools.com</b>
//                 </h5>
//                 <h6 className='w3-text-teal'>
//                   <i className='fa fa-calendar fa-fw w3-margin-right' />
//                   Forever
//                 </h6>
//                 <p>Web Development! All I need to know in one place</p>
//                 <hr />
//               </div>
//               <div className='w3-container'>
//                 <h5 className='w3-opacity'>
//                   <b>London Business School</b>
//                 </h5>
//                 <h6 className='w3-text-teal'>
//                   <i className='fa fa-calendar fa-fw w3-margin-right' />
//                   2013 - 2015
//                 </h6>
//                 <p>Master Degree</p>
//                 <hr />
//               </div>
//               <div className='w3-container'>
//                 <h5 className='w3-opacity'>
//                   <b>School of Coding</b>
//                 </h5>
//                 <h6 className='w3-text-teal'>
//                   <i className='fa fa-calendar fa-fw w3-margin-right' />
//                   2010 - 2013
//                 </h6>
//                 <p>Bachelor Degree</p>
//                 <br />
//               </div>
//             </div>
//             {/* End Right Column */}
//           </div>
//           {/* End Grid */}
//         </div>
//         {/* End Page Container */}
//       </div>
//     </Fragment>
//   );
// }

// function App() {
//   const [theme, setTheme] = useState('aqua');
//   const [userInfo, setUserInfo] = useState(null);
//   useEffect(() => {
//     fetch('https://randomuser.me/api/')
//       .then((response) => {
//         return response.json();
//       })
//       .then((response) => setUserInfo(response.results[0]))
//       .catch((error) => console.log(error));
//   }, []);

//   if (!userInfo) {
//     return <div>Loading</div>;
//   }

//   return (
//     <ThemeContextProvider value={{ theme, setTheme }}>
//       <UserInfoProvider value={{ userInfo, setUserInfo }}>
//         <Fragment>
//           <PageContainer />
//           <Footer />
//         </Fragment>
//       </UserInfoProvider>
//     </ThemeContextProvider>
//   );
// }

function App() {
  // return <HomePage />;
  return <Form />;
}

export default App;
