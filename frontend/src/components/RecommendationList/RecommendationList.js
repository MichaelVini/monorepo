import React from 'react';
import illustration from '../../ilustra.png';

function RecommendationList({ recommendations }) {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20tirar%20dúvidas%20sobre%20os%20produtos%20recomendados.";

  return (
    <div className="bg-[#FCF5E8] p-10 text-black flex justify-between">
      <div className='w-full lg:max-w-[60%]'>
          <h2 className="text-3xl font-bold mb-4">Os produtos recomendados para você são:</h2>
          {recommendations.length === 0 && <p>Nenhuma recomendação encontrada.</p>}

          <ul>
            {recommendations.map((recommendation, index) => (
              <li key={index} className="text-xl mb-2 list-disc list-inside">
                <a 
                  href={recommendation.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#075B6F] font-bold hover:underline cursor-pointer"
                >
                  {recommendation.name}
                </a>
              </li>
            ))}
          </ul>

          <p className='mt-4'>
            Explore os produtos indicados e descubra como cada um deles pode apoiar o crescimento e os resultados do seu negócio. Nossas soluções foram pensadas para tornar seus processos mais eficientes, melhorar a experiência dos seus clientes e oferecer os recursos necessários para que sua empresa alcance novos patamares de performance.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ECB135] hover:bg-[#EFBD4D] uppercase cursor-pointer text-md mt-6 font-bold py-2 px-4 max-w-[480px] inline-block text-center"
          >
            Tirar dúvidas sobre os produtos recomendados
          </a>
        </div>
        <img src={illustration} alt="Ilustração" className="mt-6 w-full max-w-[300px] mr-10 hidden lg:block" />
      </div>
  );
}

export default RecommendationList;
