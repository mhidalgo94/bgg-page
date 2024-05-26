import Header from "./component/Header/Header"
import NavBar from "./component/NavBar/NavBar"
import Presentaton from "./component/Sections/Presentations/Presentaton"
import HowWork from "./component/Sections/How-work/HowWork"
function App() {

  return (
    <div className="App-Base">
      <NavBar />
      <Header />
      <Presentaton />
      <HowWork />
    </div>
  )
}

export default App
