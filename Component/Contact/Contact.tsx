import React from 'react'
import styles from './Contact.module.scss'
import {ListContact} from './ListContact'

type Tcontact= {
    Title: string,
    Subtitle: string,
}

const ContactItem = ({Title, Subtitle}: Tcontact) => {
    return(
        <>
            <li className={styles.Wrap}>
                <div className={styles.Title}>{Title}</div>
                <div className={styles.Subtitle}>{Subtitle}</div>
            </li>
        </>
    )
}

const Contact = () => {
  return (
    <>
        <div style={{display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'start'}}>
                {ListContact.map((Item)=>{
                return(
                <ContactItem 
                    key={Item.id}
                    Title={Item.Title}
                    Subtitle={Item.Subtitle}
                />
                )
                })}
        </div>
    </>
  )
}
export default Contact