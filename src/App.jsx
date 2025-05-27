import './App.css'
import PageBoard from './components/PageBoard'
import data from './upcoming-events.json'

function App() {


  return (
    <>
      <PageBoard events={data}/>
    </>
  )
}

export default App
