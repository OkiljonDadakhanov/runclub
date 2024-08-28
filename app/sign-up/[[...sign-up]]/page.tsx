import { SignUp } from '@clerk/nextjs'
const SignUpPage: React.FC = () => {
    return (
        <div className='flex justify-center p-5'>
            <SignUp />
        </div>
    )
}

export default SignUpPage