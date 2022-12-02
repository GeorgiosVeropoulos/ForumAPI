import { Route, Routes } from 'react-router'
import HomePage from './page/HomePage'
// import MakePost from './page/MakePost'
// import './App.css'

function App() {

  return (
    <Routes className="App">
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/create-new-post" element={<MakePost />} /> */}
    </Routes>
  )
}

export default App
