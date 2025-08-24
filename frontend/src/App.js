import React from 'react';
import Form from './components/Form/Form';
import useRecommendationFlow from './state/hooks/useRecommendationsFlow';
import RecommendationSection from './components/shared/RecommendationSection';
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
    <div className="bg-primary flex items-center justify-center min-h-screen">
      <div className="max-w-[1200px] flex flex-col justify-center items-center text-white px-6 py-20">
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
