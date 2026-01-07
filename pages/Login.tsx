import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { mockService } from '../services/mockService';
import { GraduationCap, Lock, Mail, Loader2, ArrowLeft } from 'lucide-react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Mock login call
      const user = await mockService.login(email, password);
      login(user);
      navigate('/area-responsavel');
    } catch (error) {
      alert('Erro ao fazer login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 relative">
      <Link 
        to="/" 
        className="absolute top-6 left-4 md:top-8 md:left-8 flex items-center gap-2 text-gray-600 hover:text-brand-dark font-medium transition p-2 bg-white/50 rounded-lg"
      >
        <ArrowLeft size={20} /> <span className="hidden md:inline">Voltar para Home</span>
      </Link>
      
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-lg">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-primary-100 text-brand-dark rounded-full flex items-center justify-center mb-4">
             <GraduationCap size={24} />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">Área Restrita</h2>
          <p className="mt-2 text-sm text-gray-600">
            Acesso para responsáveis e profissionais
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                required
                className="block w-full pl-10 px-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent"
                placeholder="Endereço de e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                required
                className="block w-full pl-10 px-3 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-light focus:border-transparent"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-brand-dark focus:ring-brand-light border-gray-300 rounded" />
              <label className="ml-2 block text-sm text-gray-900">Lembrar-me</label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-brand-dark hover:text-brand-light">Esqueceu a senha?</a>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-brand-dark hover:bg-brand-dark/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-light transition disabled:opacity-70"
          >
            {isLoading ? <Loader2 className="animate-spin" /> : 'Entrar'}
          </button>
        </form>
        
        <div className="text-center mt-4">
           <p className="text-sm text-gray-600">Não tem acesso? <span className="text-brand-dark font-medium cursor-pointer">Solicite na secretaria</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;