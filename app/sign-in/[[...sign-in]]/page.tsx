import { SignIn } from '@clerk/nextjs'
const SignInPage: React.FC = () => {
    return (
        <div className='flex justify-center p-5'>
            <SignIn />
        </div>
    )
}

export default SignInPage