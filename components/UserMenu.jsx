import classes from '../component-styles/UserMenu.module.scss'
import { signIn, signOut, useSession } from 'next-auth/react'



const UserMenu = () => {

    const { data: session } = useSession()

    if (session) {
      return (                
          <button onClick={() => signOut()} className="btn-primary">Sign out</button>
      )
    }

    return (
      <>        
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )
}

export default UserMenu



