import Single from "../../components/Single/Single"
import { singleUser } from "../../data"


const User = () => {
  return (
    <div>
      <Single {...singleUser}/>
    </div>
  )
}

export default User
