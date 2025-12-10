import './App.css'
import One from './One'
import Two from './Two'
import Three from './Three'
import { DataProvider } from './context/DataContext'

function App() {
  return (
    <div className="App">
      <DataProvider>
        <div className="container">
          <One />
          <Two />
          <Three />
        </div>
      </DataProvider>
    </div>
  )
}

export default App