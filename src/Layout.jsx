
import { Outlet } from 'react-router'
import Header from './Components/Header'
import Grid from './Components/Grid'

function App() {

  return (
    <>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
       
        <footer>
        </footer>
      </div>
    </>
  )
}

export default App
