import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layout/AppLayout'
import Landing from './pages/Landing'
import Onboarding from './pages/Onboarding'
import SavedJobs from './pages/SavedJobs'
import PostJobs from './pages/PostJobs'
import MyJobs from './pages/MyJobs'
import Jobs from './pages/Jobs'
import { ThemeProvider } from "./components/theme-provider";
import ProtectedRoute from './components/ProtectedRoute'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: '/onboarding',
        element:
          <ProtectedRoute>
            <Onboarding />

          </ProtectedRoute>
      },
      {
        path: '/jobs',
        element:
          <ProtectedRoute>
            <Jobs />
          </ProtectedRoute>
      },
      {
        path: '/jobs/:id',
        element:
          <ProtectedRoute>
            <Jobs />
          </ProtectedRoute>

      },
      {
        path: '/postjobs',
        element:
          <ProtectedRoute>
            <PostJobs />
          </ProtectedRoute>
      },
      {
        path: '/savedjobs',
        element:
          <ProtectedRoute>
            <SavedJobs />
          </ProtectedRoute>
      },
      {
        path: '/myjobs',
        element:
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
      }
    ]
  }
])

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />

    </ThemeProvider>
  )
}

export default App
