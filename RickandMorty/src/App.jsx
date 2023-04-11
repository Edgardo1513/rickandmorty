
import './App.css'
import header from "./assets/img/banner.svg"
import Rickandmorty from './components/RickandMorty'


function App() {


  return (
    <div className="App">   
    
       <img src={header} alt="" />  
       <div className='conteiner'>    
      <Rickandmorty />  
      </div>     
    </div>
  )
}

export default App
