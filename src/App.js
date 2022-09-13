import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import TwentyTwentyTwo from './pages/TwentyTwentyTwo';
import TwentyTwentyOne from './pages/TwentyTwentyOne';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <ResponsiveAppBar/>
    <Routes>
      <Route path="/2021" element={<TwentyTwentyOne/>}/>
      <Route path="/2022" element={<TwentyTwentyTwo/>}/>
    </Routes>
    </div>
  );
}

export default App;
