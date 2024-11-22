import React from 'react';
import { ArrowRight, Code2, Rocket, Shield } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforme suas ideias em
              <span className="text-blue-600"> realidade</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Desenvolva projetos incríveis com nossa plataforma moderna e intuitiva.
              Comece sua jornada hoje mesmo.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700 transition-colors">
                Começar agora
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">
                Saiba mais
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Por que escolher nossa plataforma?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos as melhores ferramentas e recursos para impulsionar seu sucesso.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Rocket className="w-8 h-8 text-blue-600" />}
              title="Performance Otimizada"
              description="Garanta velocidade e eficiência em todos os seus projetos."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-600" />}
              title="Segurança Avançada"
              description="Proteção robusta para seus dados e aplicações."
            />
            <FeatureCard
              icon={<Code2 className="w-8 h-8 text-blue-600" />}
              title="Código Limpo"
              description="Desenvolva com as melhores práticas de programação."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de desenvolvedores que já estão criando o futuro.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Criar conta gratuita
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 Nossa Plataforma. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;