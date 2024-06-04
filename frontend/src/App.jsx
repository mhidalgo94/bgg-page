import Header from "./component/Header/Header"
import NavBar from "./component/NavBar/NavBar"
import Presentaton from "./component/Sections/Presentations/Presentaton"
import Mission from "./component/Sections/Mission/Mission"
import OurImpact from "./component/Sections/OurImpact/OurImpact"
import ContactUs from "./component/Sections/ContactUs/ContactUs"
import Footer from './component/Footer/Footer'
function App() {

  return (
    <div className="App-Base">
      <NavBar />
      <Header />
      <Presentaton />
      <Mission />
      <OurImpact />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App
