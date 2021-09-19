import './styles/app.css'
import './styles/inputbox.css'
import './styles/header.css'
import Header from './components/Header'
import InputBox from './components/InputBox'

function App() {
  return (
    <div className="page">
      <Header />
      <InputBox />
    </div>
  )
}

export default App;
