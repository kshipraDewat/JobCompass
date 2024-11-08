import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {BarLoader} from 'react-spinners'
const Onboarding = () => {
  const {user , isLoaded} = useUser()
  const navigate = useNavigate();

  const handleRoleSelection = async(role)=>{
    await user
    .update({unsafeMetadata:{role},})
    .then(()=>{
      navigate(role === 'recruiter' ? '/postjobs' : "/jobs")
    })
    .catch((err)=>{
      console.error('Error updating role: ', err)
    })
  }

  useEffect(()=>{
    if(user?.unsafeMetadata?.role){
      navigate(user?.unsafeMetadata?.role === 'recruiter'? '/postjobs' : "/jobs")
    }
  },[user])

  if(!isLoaded){
    return <BarLoader className='mb-4 ' width={'100%'} color='#36d7b7'/>
  }
  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <h2 className="gradient-title font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tighter p-5 text-center">
      Your journey starts here. Are you a...
      </h2>
      <div className="mt-5 sm:mt-10 flex items-center justify-center  gap-4 lg:gap-10 w-full px-10  ">
        <Button
          variant="blue"
          className="h-16 sm:h-20 w-80 text-xl md:text-2xl"
          onClick={() => handleRoleSelection("candidate")}
        >
          Candidate
        </Button>
        <h2 className='gradient-title font-extrabold  sm:text-2xl tracking-tighter'>OR</h2>
        <Button
          variant="destructive"
          className="h-16 sm:h-20  w-80 text-xl md:text-2xl"
          onClick={() => handleRoleSelection("recruiter")}
        >
          Recruiter
        </Button>
      </div>
    </div>
  )
}

export default Onboarding
