import React from 'react';
import Form from './components/Form/Form';
import useRecommendationFlow from './state/hooks/useRecommendationsFlow';
import RecommendationSection from './components/RecommendationSection';
import Header from './components/Header/Header';

function App() {
  const { 
      recommendations,
      resetRecommendations,
      preferences,
      features,
      formData,
      handleChange,
      handleSubmit
   } = useRecommendationFlow();

  return (
    <div className="bg-primary flex flex-col items-center justify-center min-h-screen">
      <img src="/rd-station-white.svg" alt="RD Station Logo" className="w-40 mt-10" />
      <div className="max-w-[1200px] flex flex-col justify-center items-center text-white px-6 pb-20 mt-10">
        <Header />
        <div className="w-full">
          {recommendations.length > 0 ? (
            <RecommendationSection 
              recommendations={recommendations} 
              onReset={resetRecommendations} 
            />
          ) : (
            <Form
              preferences={preferences}
              features={features}
              formData={formData}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
