import React from 'react';
import RecommendationList from '../RecommendationList/RecommendationList';
import BackButton from '../shared/BackButton/BackButton';

function RecommendationSection({ recommendations, onReset }) {
  return (
    <>
      <RecommendationList recommendations={recommendations} />
      <div className="mt-4 text-center">
        <BackButton onClick={onReset} />
      </div>
    </>
  );
}

export default RecommendationSection;