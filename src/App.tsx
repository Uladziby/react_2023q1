/** @format */
import './App.css';
import Header from './components/Header/Header';
import AboutPage from './routes/AboutPage/AboutPage';
import { FormPage } from './routes/FormPage/FormPage';
import { MainPage } from './routes/MainPage/MainPage';
import NotFoundPage from './routes/NotFoundPage/NotFoundPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App" data-testid="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} index />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/forms" element={<FormPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
