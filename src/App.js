// import { BrowserRouter as  Route,Navigate,  Routes } from 'react-router-dom';
import Home from './pages/Home';
import ApiDocs from './pages/ApiDocs';
import Header from './components/header';
import Footer from './components/footer';
import {  Navigate, Route,Routes } from 'react-router-dom';
import { Suspense } from 'react';

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
            <Routes>
            <Route path="*" element={<Navigate to="/404"/>}/>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/apidocs" element={<ApiDocs/>} />
            
            </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
