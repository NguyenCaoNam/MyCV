import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { ListExpertise } from './ListExpertise';
import styles from './Expertise.module.scss'

type Texpertise = {
    Img: string,
    Title?: string,
    Number: number,
}

const ExpertiseItem = ({Img, Title, Number}: Texpertise) => {

    const Stars = [1,2,3,4,5,6,7,8,9,10]
    return(
        <div className={styles.Wraper}>
            <div className={styles.Wrap}>
                <div className={styles.Title}>{Title}</div>
                <div className={styles.Img}>
                    <img src={Img} alt="" />
                </div>
            </div>
            <div className={styles.Star}>
                {Stars.map((Star)=>{
                    if (Star > Number){
                        return (
                            <span><FaRegStar /></span>
                        )
                    }
                    else {
                        return (
                            <span><FaStar /></span>
                        )
                    }
                    
                })}
            </div>
            
        </div>
    )
}


const Expertise = () => {
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
        {ListExpertise.map((Item)=>{
            return (
                <ExpertiseItem
                key={Item.id}
                Img={Item.Img}
                Title={Item.Title}
                Number={Item.Number}  
                />
            )
        })}
    </div>
    </>    
  )
}

export default Expertise