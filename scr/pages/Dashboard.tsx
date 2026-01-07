import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { mockService } from '../services/mockService';
import { Message, Orientation } from '../types';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, FileText, User, LogOut, Send, Menu, Home } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'messages' | 'orientations' | 'profile'>('messages');
  const [messages, setMessages] = useState<Message[]>([]);
  const [orientations, setOrientations] = useState<Orientation[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    // Load mock data
    if (user) {
      mockService.getMessages(user.id).then(setMessages);
      mockService.getOrientations('student-456').then(setOrientations); // Using mock student ID
    }
  }, [isAuthenticated, user, navigate]);

  const handleSendMessage = async (e: React.FormEvent) => {
      e.preventDefault();
      if(!newMessage.trim()) return;
      const msg = await mockService.sendMessage(newMessage);
      setMessages([...messages, msg]);
      setNewMessage('');
  }

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar Mobile Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-20 lg:hidden" onClick={toggleSidebar}></div>
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 flex flex-col`}>
        <div className="p-6 border-b border-gray-100">
           <h2 className="text-xl font-bold text-gray-800">Área do Responsável</h2>
           <p className="text-sm text-gray-500">Bem-vindo, {user.nome.split(' ')[0]}</p>
        </div>
        <nav className="p-4 space-y-2 flex-1">
           <button 
             onClick={() => { setActiveTab('messages'); setIsSidebarOpen(false); }}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeTab === 'messages' ? 'bg-primary-50 text-brand-dark font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
           >
             <Mail size={20} /> Mensagens
           </button>
           <button 
             onClick={() => { setActiveTab('orientations'); setIsSidebarOpen(false); }}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeTab === 'orientations' ? 'bg-primary-50 text-brand-dark font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
           >
             <FileText size={20} /> Orientações NAE
           </button>
           <button 
             onClick={() => { setActiveTab('profile'); setIsSidebarOpen(false); }}
             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${activeTab === 'profile' ? 'bg-primary-50 text-brand-dark font-medium' : 'text-gray-600 hover:bg-gray-50'}`}
           >
             <User size={20} /> Perfil do Aluno
           </button>
           
           <hr className="my-2 border-gray-100" />
           
           <Link 
             to="/" 
             className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50 transition"
           >
             <Home size={20} /> Voltar para o Site
           </Link>
        </nav>
        <div className="p-4 border-t border-gray-100">
          <button onClick={() => { logout(); navigate('/'); }} className="flex items-center gap-2 text-red-500 hover:bg-red-50 w-full px-4 py-3 rounded-lg transition">
             <LogOut size={20} /> Sair
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-8 overflow-y-auto h-screen">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between mb-6">
           <button onClick={toggleSidebar} className="p-2 bg-white rounded-md shadow-sm">
             <Menu size={24} className="text-gray-600" />
           </button>
           <span className="font-bold text-gray-800">Menu</span>
        </div>

        {activeTab === 'messages' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Comunicação Escola & Família</h2>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-[600px]">
               {/* Messages List */}
               <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50 scrollbar-thin">
                  {messages.map((msg) => {
                     const isMe = msg.remetente_id === user.id;
                     return (
                        <div key={msg.id} className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
                           <div className={`max-w-[80%] p-4 rounded-2xl ${isMe ? 'bg-brand-dark text-white rounded-br-none' : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'}`}>
                              <p className="text-xs opacity-75 mb-1">{isMe ? 'Você' : msg.remetente_nome}</p>
                              <p>{msg.conteudo}</p>
                              <p className="text-[10px] text-right mt-2 opacity-70">{new Date(msg.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
                           </div>
                        </div>
                     )
                  })}
               </div>
               
               {/* Input Area */}
               <div className="p-4 bg-white border-t border-gray-200">
                  <form onSubmit={handleSendMessage} className="flex gap-2">
                     <input 
                        type="text" 
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Digite sua mensagem para a equipe..." 
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-light"
                     />
                     <button type="submit" className="bg-brand-dark text-white p-3 rounded-lg hover:bg-brand-dark/90 transition">
                        <Send size={20} />
                     </button>
                  </form>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'orientations' && (
           <div className="max-w-4xl mx-auto">
             <h2 className="text-2xl font-bold text-gray-800 mb-6">Orientações do Núcleo (NAE)</h2>
             <div className="grid gap-6">
                {orientations.map(ori => (
                   <div key={ori.id} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-brand-yellow">
                      <div className="flex justify-between items-start mb-4">
                         <div>
                            <h3 className="text-lg font-bold text-gray-900">{ori.titulo}</h3>
                            <span className="text-sm text-brand-dark font-medium">{ori.professional_nome}</span>
                         </div>
                         <span className="text-xs text-gray-400">{new Date(ori.created_at).toLocaleDateString()}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{ori.descricao}</p>
                   </div>
                ))}
             </div>
           </div>
        )}
        
        {activeTab === 'profile' && (
           <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Dados do Aluno</h2>
              <div className="space-y-4">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                       <p className="text-xs text-gray-500 uppercase">Nome</p>
                       <p className="font-semibold">Lucas Silva</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                       <p className="text-xs text-gray-500 uppercase">Data Nascimento</p>
                       <p className="font-semibold">20/05/2015</p>
                    </div>
                 </div>
                 <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <p className="text-xs text-brand-dark uppercase font-bold mb-1">Acompanhamento NAE</p>
                    <p className="text-gray-700">Diagnóstico de TEA nível 1 de suporte.</p>
                 </div>
              </div>
           </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;