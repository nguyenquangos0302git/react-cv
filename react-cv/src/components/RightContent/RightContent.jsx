import Education from './Education/Education';
import WorkExperience from './WorkExperience/WorkExperience';

export default function RightContent() {
  return (
    <div className='w3-twothird'>
      <div className='w3-container w3-card w3-white w3-margin-bottom'>
        <WorkExperience />
      </div>
      <div className='w3-container w3-card w3-white'>
        <Education />
      </div>
    </div>
  );
}
