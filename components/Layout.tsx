import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, MapPin, Phone, Sun, ArrowLeft } from 'lucide-react';
import { NAV_ITEMS, COMPANY_INFO } from '../constants';
import FloatingWhatsApp from './FloatingWhatsApp';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6 h-24 flex items-center justify-between">
          {/* Logo Recreation */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center">
               <Sun size={48} className="text-brand-yellow fill-brand-yellow drop-shadow-md" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-brand-dark font-extrabold text-lg md:text-xl tracking-wide">
                EDUCANDÁRIO
              </span>
              <span className="text-brand-light font-black text-2xl md:text-3xl tracking-wider drop-shadow-sm" style={{ WebkitTextStroke: '0.5px #ffe600' }}>
                SODRÉ
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                {item.subItems ? (
                  <button className="font-medium text-gray-700 hover:text-brand-dark py-2 flex items-center gap-1 transition-colors">
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`font-medium py-2 transition-colors ${
                      location.pathname === item.path ? 'text-brand-dark font-bold' : 'text-gray-700 hover:text-brand-dark'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.subItems && (
                  <div className="absolute left-0 mt-0 w-56 bg-white border border-gray-100 shadow-lg rounded-md overflow-hidden hidden group-hover:block animate-in fade-in slide-in-from-top-2">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="block px-4 py-3 hover:bg-brand-light/10 text-gray-700 text-sm transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/login" className="px-5 py-2 bg-brand-dark text-white rounded-lg hover:bg-primary-600 transition font-medium text-sm shadow-md">
              Portal do Aluno
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-600 hover:text-brand-dark transition"
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-24 left-0 w-full bg-white border-b border-gray-200 shadow-xl py-4 px-4 flex flex-col gap-4 z-50">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="flex flex-col">
                {item.subItems ? (
                  <>
                    <span className="font-semibold text-gray-400 text-xs uppercase tracking-wider mb-2 mt-2">{item.label}</span>
                    <div className="pl-4 flex flex-col gap-3 border-l-2 border-brand-yellow">
                      {item.subItems.map(sub => (
                        <Link 
                          key={sub.path} 
                          to={sub.path} 
                          onClick={() => setIsMenuOpen(false)}
                          className="text-gray-700 hover:text-brand-dark"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-lg font-medium ${location.pathname === item.path ? 'text-brand-dark' : 'text-gray-800'}`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <hr className="my-2" />
            <Link 
              to="/login" 
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center px-4 py-3 bg-brand-dark text-white rounded-lg font-medium shadow-sm"
            >
              Portal do Aluno
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {location.pathname !== '/' && (
          <div className="container mx-auto px-4 pt-6 pb-2">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-brand-dark font-medium transition-colors bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100"
            >
              <ArrowLeft size={18} /> Voltar para Home
            </Link>
          </div>
        )}
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-dark text-gray-300 py-12">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
               <Sun size={24} className="text-brand-yellow fill-brand-yellow" />
               Educandário Sodré
            </h3>
            <p className="text-sm leading-relaxed mb-4 text-gray-200">
              "Qualidade de ensino e formação do caráter". <br/>
              Referência em educação em Salvador.
            </p>
            <div className="flex gap-4">
              <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-brand-yellow transition"><Instagram size={24} /></a>
              <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-brand-yellow transition"><Facebook size={24} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 border-b border-brand-light/30 inline-block pb-1">Links Úteis</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/nucleo-atendimento-especializado" className="hover:text-brand-yellow transition">Inclusão Escolar</Link></li>
              <li><Link to="/educacao-infantil" className="hover:text-brand-yellow transition">Educação Infantil</Link></li>
              <li><Link to="/ensino-medio" className="hover:text-brand-yellow transition">Ensino Médio</Link></li>
              <li><Link to="/contato" className="hover:text-brand-yellow transition">Trabalhe Conosco</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 border-b border-brand-light/30 inline-block pb-1">Localização</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="text-brand-yellow shrink-0" size={18} />
                <a href={COMPANY_INFO.googleMapsLink} target="_blank" rel="noreferrer" className="hover:text-white">
                  {COMPANY_INFO.address}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="text-brand-yellow shrink-0" size={18} />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="mt-4">
                <Link to="/contato" className="inline-block border border-brand-yellow text-brand-yellow px-4 py-2 rounded hover:bg-brand-yellow hover:text-brand-dark transition font-semibold">
                  Agendar Visita
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Educandário Sodré. Todos os direitos reservados.
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;