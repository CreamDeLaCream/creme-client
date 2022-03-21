// import React, { useState } from 'react';
// import styled from 'styled-components';

// // components
// import { Keywords } from '../../common/components';
// import MembersData from './MembersData';

// const Members = () => {
//   const [membersData, setMemberData] = useState(MembersData);

//   function TeamMeberlist({ membersdatas }) {
//     return (
//       <TeamInfoCard>
//         <TeamContentContainer>
//           <TeamContent>
//             <p>PetPeople</p>
//             <MemberName>
//               {membersdatas.position}
//               <br /> <b style={{ color: 'var(--main)' }}>{membersdatas.name}</b>
//             </MemberName>
//             <KeywordWrapper>
//               {membersdatas.character.map((memberscharacter, i) => {
//                 return <Keywords typekeywords={memberscharacter} />;
//               })}
//             </KeywordWrapper>
//             <TeamInfo>
//               {membersdatas.info} <br /> {membersdatas.github}
//             </TeamInfo>
//           </TeamContent>
//         </TeamContentContainer>
//         <MembersImage>
//           <img
//             alt=""
//             src={process.env.PUBLIC_URL + `/Image/image${membersdatas.id}.png`}
//             width="300px"
//             height="300px"
//           />
//         </MembersImage>
//       </TeamInfoCard>
//     );
//   }
//   return (
//     <>
//       {membersData.map((membersdatas, i) => {
//         return <TeamMeberlist membersdatas={membersdatas} />;
//       })}
//     </>
//   );
// };

// const TeamInfoCard = styled.div`
//   width: 100%;
//   height: 320px;
//   display: flex;
//   justify-content: space-between;
//   margin-top: 20px;
//   background-color: var(--lightcream);
//   border: solid 1px var(--cream);
//   border-radius: 15px;
// `;

// const MembersImage = styled.div`
//   width: 280px;
//   height: 280px;
//   border-radius: 50%;
//   border: 13px solid var(--cream);
//   background-color: var(--main);
//   overflow: hidden;
//   // positon: absolute;
//   // vertical-align: middle;
//   margin-right: 50px;
//   margin-top: 17px;
// `;

// const TeamContentContainer = styled.div`
//   width: 500px;

//   color: var(--main);

//   p {
//     margin-top: 30px;
//     font-size: 20px;
//     width: 440px;
//   }
// `;

// const TeamContent = styled.div`
//   margin-left: 30px;
// `;

// const MemberName = styled.div`
//   width: 440px;
//   font-size: 30px;
//   color: var(—darkcream);
// `;

// const KeywordWrapper = styled.div`
//   width: 440px;
//   margin-top: 20px;
// `;

// const TeamInfo = styled.div`
//   width: 440px;
//   color: var(—darkcream);
//   margin-top: 20px;
//   cursor: pointer;
// `;

// export default Members;
