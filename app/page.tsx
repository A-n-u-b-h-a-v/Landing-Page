import React from 'react'
import FormPage from './components/FormPage';
import LeveragePage from './components/LeveragePage';
import UniversityPage from './components/UniversityPage';
import SuccessPage from './components/SuccessPage';
import FlipCard from './components/FlipCard';


const HomePage = () => {
  return (
    <div>
      {/* <Home /> */}
      <FormPage/>
      <LeveragePage/>
      <UniversityPage/>
      <SuccessPage/>
      
    </div>
  )
}

export default HomePage 