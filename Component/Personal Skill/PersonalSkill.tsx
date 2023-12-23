
import { ListPersonalSkill } from './ListPersonalSkill'

const PersonalSkillItem = ({Content}: {Content: string})=>{
    return (
        <>
        <li style={{fontSize: 18, color:'#CBCACA', width: 400}}>{Content}</li>
        </>
    )
}

const PersonalSkill = () => {
  return (
    <>
    {ListPersonalSkill.map((Item)=>{
        return (
            <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
                <div style={{textAlign: 'left',}}>
                <PersonalSkillItem 
                    key={Item.id}
                    Content={Item.Content}
                />
                </div>
            </div>
        )
    })}
    </>
  )
}

export default PersonalSkill