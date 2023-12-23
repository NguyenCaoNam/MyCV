import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contact from './Component/Contact/Contact'
import Expertise from './Component/Expertise/Expertise'
import PersonalSkill from './Component/Personal Skill/PersonalSkill'
import Education from './Component/Education/Education'
import Work from './Component/Work/Work'
import { FaLeaf } from 'react-icons/fa'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div></div>
        <div style={{display:'flex', flexDirection: 'row', alignItems: 'start'}}>
          <div style={{display: 'flex', flexDirection: 'column', gap: 64, alignItems: 'center', padding:64, backgroundColor: '#3958A7', }}>
            <div style={{
              height: 350,
              width: 350,
              borderRadius: 200,
              overflow: 'hidden'
            }}>
              <img style={{
                width: 350,
                height: 'auto'
              }} src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.6435-9/169944525_1056068951465483_1610359305290817976_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeEpRl_o68h7vgIgs-f_dLazzv3ofD8aWPbO_eh8PxpY9i7cwQ4ehQogrZrlx0Z62xNfziwrgNOeaZXcfIMWt491&_nc_ohc=rQf_G11UU1QAX-mscNW&_nc_ht=scontent.fdad3-4.fna&oh=00_AfDniWX1Vsx3A9tiUuWUgCgAHOkQdnPEUYz4PVruWGpCvA&oe=65ABF9E3" alt="" />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'start'}}>
                <div style={{fontSize: 26, fontStyle: 'bold',color: 'white'}}>CONTACT</div>
                <Contact />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'start'}}>
              <div style={{fontSize: 26, fontStyle: 'bold',color: 'white'}}>EXPERTISE</div>
              <Expertise />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'start'}}>
              <div style={{fontSize: 26, fontStyle: 'bold',color: 'white'}}>PERSONAL SKILL</div>
              <PersonalSkill />
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 64, alignItems: 'center', padding: 64, backgroundColor: 'white'}}>
            <div  style={{
                height:350,
                alignItems: 'center',
              }}>
              <div style={{fontSize: 56, fontStyle: 'bold', width:500, textAlign: 'left', color: '#3958A7', lineHeight: 1}}><strong>NGUYEN CAO HAI</strong> NAM</div>
              <div style={{fontSize: 32, fontStyle: 'bold', width:500, textAlign: 'left', color: '#3958A7'}}>Product Designer</div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'start'}}>
              <div style={{fontSize: 26, fontStyle: 'bold'}}>ABOUT ME</div>
              <p style={{width: 500, textAlign: 'left', fontSize: 18}}>As a fourth-year student with one year of experience working as a UI/UX Designer, I've had the opportunity to contribute to dynamic and engaging design projects. During my time in this role, I've learned extensively about user interactions, optimizing user experiences, and the significance of aesthetically pleasing and user-friendly design.</p>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'start'}}>
              <div style={{fontSize: 26, fontStyle: 'bold'}}>EDUCATION</div>
              <Education />
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'start'}}>
              <div style={{fontSize: 26, fontStyle: 'bold'}}>WORK EXPERIENCE</div>
              <Work />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
