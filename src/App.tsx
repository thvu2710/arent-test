import MainLayout from 'layouts/MainLayout'
import Home from 'pages/Home'
import MyRecord from 'pages/MyRecord'
import MyColumn from 'pages/MyColumn'
import NotFound from 'pages/NotFound'
import { useEffect } from 'react'
import { useRoutes, useLocation, useSearchParams } from 'react-router-dom'

function App() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/my-record',
      element: <MyRecord />
    },
    {
      path: '/my-column',
      element: <MyColumn />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])
  const location = useLocation()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    console.log('searchParams', Object.fromEntries([...searchParams]))
  }, [searchParams])

  useEffect(() => {
    console.log('location', location)
  }, [location])
  return (
    <div className='App'>
      <MainLayout>{elements}</MainLayout>
    </div>
  )
}

export default App
