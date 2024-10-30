import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Button } from "@/components/ui/button"
import AppLayout from './layout/AppLayout'
import Landing from './pages/Landing'
import Onboarding from './pages/Onboarding'
import SavedJobs from './pages/SavedJobs'
import PostJobs from './pages/PostJobs'
import JobListing from './pages/JobListing'
import MyJobs from './pages/MyJobs'
import Jobs from './pages/Jobs'

const router  = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element: <Landing/>
      },
      {
        path:'/onboarding',
        element: <Onboarding/>
      },
      {
        path:'/jobs',
        element: <Jobs/>
      },
      {
        path:'/jobs/:id',
        element: <Jobs/>
      },
      {
        path:'/postjobs',
        element: <PostJobs/>
      },
      {
        path:'/savedjobs',
        element: <SavedJobs/>
      },
      {
        path:'/myjobs',
        element: <MyJobs/>
      }
    ]
  }
])

function App() {

  return (
    <div className=' text-2xl '>
      <RouterProvider router={router}/>
      
    </div>
  )
}

export default App
