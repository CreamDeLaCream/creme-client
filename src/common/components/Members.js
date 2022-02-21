
import React from 'react'
import MembersData from '../Team/MembersData';

export const Members = () => {

  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || '';

  function TeamMeber(props) {
    return (
      <MemberCard>
        <img
          alt=""
          src={process.env.PUBLIC_URL + `/Image/image${props.}.png`}
          width="400px"/>
          <p>
            포지션, 이름, 할 일
          </p>
      </MemberCard>
    )
  }
  return (
  
  )
}
