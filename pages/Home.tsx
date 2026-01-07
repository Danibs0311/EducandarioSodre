import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, BookOpen, MapPin, Wifi, Coffee, Trophy, Layout, GraduationCap, ArrowRight, Star, ExternalLink } from 'lucide-react';
import { CONTENT, COMPANY_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-dark text-white py-24 lg:py-32 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-light/10 transform skew-x-12 translate-x-20"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/10 border border-white/20 text-brand-yellow text-sm font-bold tracking-wider mb-6 uppercase backdrop-blur-sm">
            <MapPin size={14} /> Águas Claras - Salvador
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Educandário Sodré
          </h1>
          <p className="text-xl md:text-3xl font-light text-brand-light mb-8 max-w-3xl mx-auto">
            Qualidade de ensino e <span className="text-brand-yellow font-semibold">formação do caráter</span>.
          </p>
          
          <div className="bg-yellow-400/20 backdrop-blur-md border border-yellow-400/30 p-4 rounded-2xl mb-10 max-w-2xl mx-auto inline-block transform hover:scale-105 transition-transform duration-300">
             <Link to="/bolsas" className="flex items-center gap-3 text-brand-yellow font-bold group">
                <div className="bg-brand-yellow text-brand-dark p-2 rounded-lg group-hover:rotate-12 transition-transform">
                  <GraduationCap className="animate-pulse" />
                </div>
                <span className="text-lg">Bolsas de até 50% pelo <span className="underline decoration-wavy">Educa Mais Brasil</span>!</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contato" className="w-full sm:w-auto px-8 py-4 bg-brand-yellow hover:bg-yellow-400 text-brand-dark rounded-xl font-bold shadow-lg shadow-yellow-500/20 transition transform hover:-translate-y-1 text-lg">
              Agende sua Visita
            </Link>
            <Link to="/bolsas" className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/30 text-white hover:bg-white hover:text-brand-dark rounded-xl font-bold backdrop-blur-sm transition transform hover:-translate-y-1 text-lg flex items-center justify-center gap-2">
              Bolsas & Parcerias <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* NEW PROMINENT SCHOLARSHIP BANNER */}
      <div className="relative z-20 -mt-8 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 border-t-4 border-brand-yellow">
          <div className="w-20 h-20 bg-brand-light/20 rounded-2xl flex items-center justify-center shrink-0">
             <Star className="text-brand-dark fill-brand-yellow" size={40} />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-2xl font-black text-brand-dark mb-1 tracking-tight">Parceria Educa Mais Brasil</h3>
            <p className="text-gray-600 font-medium leading-tight">Garantimos sua vaga com descontos exclusivos para novos alunos em Águas Claras.</p>
          </div>
          <Link to="/bolsas" className="shrink-0 bg-brand-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-light hover:text-brand-dark transition-all shadow-md flex items-center gap-2 group whitespace-nowrap">
             Ver Bolsas Disponíveis <ExternalLink size={18} className="group-hover:scale-110" />
          </Link>
        </div>
      </div>

      {/* Intro Text */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="inline-block p-4 bg-brand-light/20 rounded-full mb-6 text-brand-dark shadow-sm">
            <Heart size={36} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{CONTENT.home.title}</h2>
          <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
            {CONTENT.home.text}
          </p>
        </div>
      </section>

      {/* Structure Highlights Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Estrutura Completa</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Investimos em um ambiente seguro e equipado para garantir o aprendizado e o bem-estar do seu filho.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
             {[
               { icon: Layout, title: "Pátio Coberto", desc: "Espaço amplo para recreação e eventos." },
               { icon: BookOpen, title: "Biblioteca", desc: "Acervo diversificado para incentivar a leitura." },
               { icon: Trophy, title: "Quadra", desc: "Esporte e atividades físicas." },
               { icon: Users, title: "Parquinho", desc: "Diversão segura para a educação infantil." },
               { icon: Coffee, title: "Refeitório", desc: "Alimentação e socialização." },
               { icon: Wifi, title: "Internet", desc: "Conectividade para pesquisa e ensino." },
             ].map((item, idx) => (
               <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 border border-gray-100 flex flex-col items-center text-center group">
                 <div className="bg-brand-light/20 text-brand-dark p-4 rounded-full mb-4 group-hover:scale-110 transition duration-300">
                   <item.icon size={32} />
                 </div>
                 <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                 <p className="text-gray-600 text-sm">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
               <span className="text-brand-yellow font-bold uppercase tracking-wider mb-2 block">Acessibilidade & Bolsas</span>
               <h2 className="text-3xl md:text-5xl font-bold mb-6">Educação de Qualidade ao seu Alcance</h2>
               <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                 O Educandário Sodré acredita que a educação transforma vidas. Por isso, mantemos parcerias sólidas com o <span className="font-bold text-white">Educa Mais Brasil</span> para oferecer bolsas de estudo e descontos especiais nas mensalidades.
               </p>
               <div className="flex flex-wrap gap-4">
                 <div className="bg-white/10 backdrop-blur border border-white/20 px-6 py-3 rounded-lg font-semibold border-l-4 border-l-brand-yellow flex items-center gap-2">
                   <div className="w-2 h-2 bg-brand-yellow rounded-full animate-pulse"></div>
                   Educa Mais Brasil
                 </div>
                 <div className="bg-white/10 backdrop-blur border border-white/20 px-6 py-3 rounded-lg font-semibold border-l-4 border-l-brand-yellow">
                   Quero Bolsa
                 </div>
               </div>
               <div className="mt-8 flex gap-4">
                 <Link to="/bolsas" className="inline-block px-8 py-4 bg-white text-brand-dark font-bold rounded-lg hover:bg-gray-100 transition shadow-lg">
                   Saiba Como Conseguir
                 </Link>
               </div>
             </div>
             <div className="relative">
                <div className="absolute -inset-4 bg-brand-light/30 rounded-full blur-3xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600&h=600" 
                  alt="Estudantes felizes" 
                  className="relative rounded-2xl shadow-2xl transform md:rotate-3 hover:rotate-0 transition duration-500 border-4 border-white/10"
                />
             </div>
          </div>
        </div>
      </section>

      {/* CTA Map */}
      <section className="py-0">
        <div className="bg-gray-100 h-96 w-full relative">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.629339371725!2d-38.4552097!3d-12.9315277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716107386000001%3A0x0!2sEstr.%20do%20Matadouro%2C%20Salvador%20-%20BA!5e0!3m2!1spt-BR!2sbr!4v1709228492859!5m2!1spt-BR!2sbr" 
             width="100%" 
             height="100%" 
             style={{border:0}} 
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             title="Mapa Educandário Sodré"
           ></iframe>
           <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-6 py-4 rounded-xl shadow-xl text-center max-w-sm w-[90%] border-t-4 border-brand-yellow">
              <p className="font-bold text-gray-900">Educandário Sodré</p>
              <p className="text-sm text-gray-600">Estrada do Matadouro, Águas Claras</p>
              <a href={COMPANY_INFO.googleMapsLink} target="_blank" rel="noreferrer" className="text-brand-dark text-xs font-bold uppercase mt-2 inline-block hover:underline">
                Traçar Rota
              </a>
           </div>
        </div>
      </section>
    </>
  );
};

export default Home;