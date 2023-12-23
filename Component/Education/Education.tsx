import styles from './Education.module.scss'
import { ListEducation } from './ListEducation';
type TEducationItem = {
    Title: string,
    Role: string,
    Start: number,
    End: string,
}
const EducationItem = ({Title, Role, Start, End}: TEducationItem) => {
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
            <div className={styles.Role}>{Role}</div>
        </div>
    )
}

const Education = () => {
  return (
    <div>
        {ListEducation.map((Item)=> {
            return (
                <div>
                    <EducationItem 
                        key={Item.id}
                        Title={Item.Title}
                        Role= {Item.Role}
                        Start={Item.Start}
                        End={Item.End}
                        />
                </div>
            )
        })}
    </div>
  )
}

export default Education