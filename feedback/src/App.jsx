import './App.css'
import { Home } from './Home'
import Search from './Search'
import AddPost from './AddPost'
import { DataProvider } from './context/DataContext'

function App() {
  return (
    <DataProvider>
      <Search />
      <hr />
      <AddPost />
      <Home />
    </DataProvider>
  )
}

export default App    