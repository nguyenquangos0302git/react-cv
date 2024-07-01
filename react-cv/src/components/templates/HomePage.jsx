import React, { Fragment } from 'react';
import Footer from '../Footer/Footer';
import RightContent from '../RightContent/RightContent';
import AvatarWithName from '../molecules/AvatarWithName';
import PersonalContact from '../LeftContent/PersonalContact/PersonalContact';
import Ability from '../organisms/Ability';
import { datas } from '../../datas/datas';

const abilities = datas;

export default function HomePage() {
  return (
    <Fragment>
      <div className='w3-content w3-margin-top' style={{ maxWidth: 1400 }}>
        <div className='w3-row-padding'>
          <div className='w3-third'>
            <div className='w3-white w3-text-grey w3-card-4'>
              <div className='w3-display-container'>
                <AvatarWithName
                  src='https://images.unsplash.com/photo-1717684566059-4d16b456c72a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8'
                  width='100%'
                  alt='Avatar'
                  displayPosition='bottomleft'
                  container={true}
                  textColor='white'
                  personName='Jane Doe'
                />
              </div>
              <div className='w3-container'>
                <PersonalContact />
                <hr />
                <Ability
                  sizeIconAndText='large'
                  iconName='asterisk'
                  iconAndTextColor='teal'
                  abilityTitle='Skills'
                  skills={abilities.skills}
                  backgroundColor='light-grey'
                  roundSize='xlarge'
                  size='small'
                  container={true}
                  center={true}
                  isShowPercent={true}
                  color='teal'
                />
                <br />
                <Ability
                  textTheme='text-theme'
                  sizeIconAndText='large'
                  iconName='globe'
                  iconAndTextColor='teal'
                  abilityTitle='Languages'
                  skills={abilities.languages}
                  backgroundColor='light-grey'
                  roundSize='xlarge'
                  size='small'
                  color='teal'
                  height={24}
                />
                <br />
              </div>
            </div>
            <br />
          </div>
          <RightContent />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
