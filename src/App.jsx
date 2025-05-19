
import './App.css'
import Fotter from './assets/components/Fotter'
import Header from './assets/components/Header'
import { Learn } from './assets/components/Learn'
import Navber from './assets/components/Navber'
import Premium from './assets/components/Premium'
import Subscribe from './assets/components/Subscribe'
import Track from './assets/components/Track'
import Track2 from './assets/components/Track2'
import What from './assets/components/What'

function App() {

  return (
    <>
     <div className="font-primary ">
        <Navber/>
        <Header/>
        <Learn/>
        <Track/>
        <Premium/>
        <What/>
        <Track2/>
        <Subscribe/>
        <Fotter/>
      </div>
     
    </>
  )
}

export default App
