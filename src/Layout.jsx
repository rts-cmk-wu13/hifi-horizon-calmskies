
import { Outlet } from 'react-router'
import Header from './Components/Header'

function App() {


  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
