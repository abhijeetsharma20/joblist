
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import JobFetch from './pages/JobFetch';
import JobPost from './pages/JobPost';


function App() {
  return (
    <div className='app'>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobFetch />} />
        <Route path="/post" element={<JobPost />} />
      </Routes>


    </div>
  );
}

export default App;
