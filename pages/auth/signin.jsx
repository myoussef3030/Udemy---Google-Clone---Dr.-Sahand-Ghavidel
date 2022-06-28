import { getProviders, signIn } from "next-auth/react"

const SigninPage = ({providers}) => {


    return (
        <div>

            {Object.values(providers).map(provider => (
                <div key={provider.name} className="flex flex-col items-center mt-40">
                    <img src="https://i.dlpng.com/static/png/6561851_preview.png" className="w-52 object-cover"/>

                    <button onClick={() => signIn(provider.id, {callbackUrl: '/'})} className="btn-primary">Sign in with {provider.name}</button>
                </div>
            ))}


        </div>
    )
}

export async function getServerSideProps(){

    const providers = await getProviders()

    console.log(providers)

    return {
        props: {
            providers: providers
        }
    }

}

export default SigninPage
