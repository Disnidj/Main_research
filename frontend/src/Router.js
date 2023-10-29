// Import necessary components and libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import Home from "./components/Home";
import Age2Months from "./components/TwoMonths";
import Age4Months from "./components/FourMonths";
import Age6Months from "./components/SixMonths";
import Age9Months from "./components/NineMonths";
import Age12Months from "./components/TwelveMonths";
import Age15Months from "./components/FifteenMonths";
import Age18Months from "./components/EighteenMonths";
import Age30Months from "./components/ThirtyMonths";
import Age2Years from "./components/TwoYears";
import Age3Years from "./components/ThreeYears";
import Age4Years from "./components/FourYears";
import Age5Years from "./components/FiveYears";
import Predict from "./components/PredictGrowth";
import GrowthGraph from "./components/Graph";


// Disni
import Chatbot from './components/Chatbot';
import ViewChat from './components/ViewChat'; // Import your ViewChat component

import ImageUploadForm from "./components/ImageUplaodForm";
import PredictionResultRashType from "./components/PredictionResultRashType"
import PredictionResultNormalAbnormal from "./components/PredictionResultNormalAbnormal";
import UploadedImagesViewer from "./components/UploadedImagesViewer";


import HomeMain from "./components/HomeMain"


//Anodya

import VideoRecorder from "./components/VideoUpload"
import InfantBehaviorPrediction from "./components/InfantBehaviorPrediction"  
import Guidelines from "./components/Guidelines"    
import VideoHistory from "./components/VideoHostory"




export default function AppRouter() {
    return (
    <div>
     <Router>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/2months" element={<Age2Months />} />
          <Route path="/4months" element={<Age4Months />} />
          <Route path="/6months" element={<Age6Months />} />
          <Route path="/9months" element={<Age9Months />} />
          <Route path="/12months" element={<Age12Months />} />
          <Route path="/15months" element={<Age15Months />} />
          <Route path="/18months" element={<Age18Months />} />
          <Route path="/30months" element={<Age30Months />} />
          <Route path="/2years" element={<Age2Years />} />
          <Route path="/3years" element={<Age3Years />} />
          <Route path="/4years" element={<Age4Years />} />
          <Route path="/5years" element={<Age5Years />} />
          <Route path="/predict" element={<Predict />} />
          <Route path="/graph" element={<GrowthGraph />} />

          {/* disni */}
          <Route path="/abc" element={<HomeMain />} />
          <Route path="/upload" element={<ImageUploadForm />} />
          <Route path="/result-rash-type" element={<PredictionResultRashType />} />
          <Route path="/result-normal-abnormal" element={<PredictionResultNormalAbnormal />} />
          <Route path="/view-images" element={<UploadedImagesViewer />} />

          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/viewchat" element={<ViewChat />} />


          {/* Anodya */}
          <Route  exact path="/" element={<Guidelines />} />
          <Route  path="/recording" element={<VideoRecorder />} />
          <Route  path="/FileUpload" element={<InfantBehaviorPrediction />} />  
          <Route  path="/VideoHistory" element={<VideoHistory />} />  

        

        </Routes>
    
      </Router>
      <ToastContainer />
    </div>
  );
}
