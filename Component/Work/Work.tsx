import React from 'react'
import styles from './Work.module.scss'
import { ListWork } from './ListWork'
import { FaLeaf } from 'react-icons/fa'

type TWorkItem = {
    Title: string,
    Company: string,
    Start: string,
    End: string,
    Description: string
}
const WorkItem = ({Title, Company, Start, End, Description}: TWorkItem) => {
    return (
        <div className={styles.Wrap}>
            <div className={styles.Wraper}>
                <div className={styles.Title}>{Title}</div>
                <div className={styles.Time}>
                    <div className={styles.DateTime}>{Start}</div>
                    <div>-</div>
                    <div className={styles.DateTime}>{End}</div>
                </div>
            </div>
            <div className={styles.WrapContent}>
                <div className={styles.Company}>{Company}</div>
                <div className={styles.Description}>{Description}</div>
            </div>
        </div>
    )
}
const Work = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
        {ListWork.map((Item) => {
            return (
                <div>
                    <WorkItem
                        key={Item.id}
                        Title={Item.Title} 
                        Company={Item.Company} 
                        Start={Item.Start} 
                        End={Item.End} 
                        Description={Item.Description}                   
                        />
                </div>
            )
        })}
    </div>
  )
}

export default Work