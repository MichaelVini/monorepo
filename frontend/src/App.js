import React, { useState } from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  const [recommendations, setRecommendations] = useState([]);
  
  const updateRecommendations = (newRecommendations) => {
    setRecommendations(newRecommendations);
  };
  
  const resetRecommendations = () => {
    setRecommendations([]);
  };

  return (
    <div className="bg-[#075B6F] flex items-center justify-center min-h-screen">
      <div className="max-w-[1200px] flex flex-col justify-center items-center text-white p-6">
        <h1 className="text-white font-bold text-3xl mb-6">
          Recomendador de Produtos RD Station
        </h1>
        <div className="bg-[#075B6F] w-full">
          <div className="col-span-2 mb-8">
            <p className="text-lg">
              Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode
              encontrar uma variedade de produtos da RD Station, cada um projetado
              para atender às necessidades específicas do seu negócio. De CRM a
              Marketing, de Conversas a Inteligência Artificial, temos uma solução
              para ajudar você a alcançar seus objetivos. Use o formulário abaixo
              para selecionar suas preferências e funcionalidades desejadas e
              receba recomendações personalizadas de produtos que melhor atendam
              às suas necessidades.
            </p>
          </div>
          <div>
            {recommendations.length > 0 ? (
              <>
                <RecommendationList recommendations={recommendations} />
                <div className="mt-4 text-center">
                  <button 
                    onClick={resetRecommendations}
                    className="border-2  hover:bg-white 
                    hover:text-black text-white font-bold py-2 px-4 uppercase focus:outline-none focus:shadow-outline"
                  >
                    Voltar
                  </button>
                </div>
              </>
            ) : (
              <Form onUpdateRecommendations={updateRecommendations} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
