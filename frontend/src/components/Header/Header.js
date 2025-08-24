import React from 'react';

function Header() {
  return (
    <>
      <h1 className="text-white font-bold text-4xl mb-6">
        Recomendador de Produtos RD Station
      </h1>
      <div className="bg-primary w-full">
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
      </div>
    </>
  );
}

export default Header;