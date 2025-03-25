import { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-violet-900 text-white">
      {/* Header */}
      <header className="bg-violet-800 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Pistagnesi Marco</h1>
        <p className="text-xl">FullStack Web Developer</p>
      </header>

      {/* Navigation */}
      <nav className="bg-violet-700 shadow-sm">
        <ul className="flex justify-center space-x-8 p-4">
          <li>
            <button 
              onClick={() => setActiveSection('about')}
              className={`px-4 py-2 rounded transition-all ${activeSection === 'about' ? 'bg-violet-500 text-white font-medium' : 'hover:bg-violet-600'}`}
            >
              Acerca de mí
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveSection('skills')}
              className={`px-4 py-2 rounded transition-all ${activeSection === 'skills' ? 'bg-violet-500 text-white font-medium' : 'hover:bg-violet-600'}`}
            >
              Habilidades
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveSection('projects')}
              className={`px-4 py-2 rounded transition-all ${activeSection === 'projects' ? 'bg-violet-500 text-white font-medium' : 'hover:bg-violet-600'}`}
            >
              Proyectos
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveSection('education')}
              className={`px-4 py-2 rounded transition-all ${activeSection === 'education' ? 'bg-violet-500 text-white font-medium' : 'hover:bg-violet-600'}`}
            >
              Educación
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveSection('contact')}
              className={`px-4 py-2 rounded transition-all ${activeSection === 'contact' ? 'bg-violet-500 text-white font-medium' : 'hover:bg-violet-600'}`}
            >
              Contacto
            </button>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* About Section */}
        {activeSection === 'about' && (
          <section className="bg-violet-800 p-6 rounded-lg shadow-md mb-6 backdrop-blur-sm bg-opacity-80">
            <h2 className="text-2xl font-bold mb-4 text-violet-200">Acerca de mí</h2>
            <p className="mb-4">
              Full Stack web developer con experiencia en NodeJS, React, Redux, Laravel, Bootstrap, PostgreSQL, MySQL, ExpressJS y Github.
            </p>
            <p className="mb-4">
              Trabajé en el desarrollo de una aplicación Point Of Sale para la venta y organización de un Resto-Bar. 
              Tengo experiencia con desarrollo ágil SCRUM y nivel de inglés C1.
            </p>
            <p>
              Me apasiona programar, trabajar en equipo y soy muy resiliente. Me recibí de Técnico 
              universitario en desarrollo web en la <b> Universidad Nacional del 
              Comahue (UNCO)</b>
            </p>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section className="bg-violet-800 p-6 rounded-lg shadow-md mb-6 backdrop-blur-sm bg-opacity-80">
            <h2 className="text-2xl font-bold mb-4 text-violet-200">Habilidades</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Técnicas</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Redux', 'Express', 'Laravel', 'Bootstrap', 'PostgreSQL', 'MySQL', 'Tailwind', 'SCRUM', 'Github'].map(skill => (
                  <span key={skill} className="bg-violet-600 text-white px-3 py-1 rounded-full text-sm hover:bg-violet-500 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Soft skills</h3>
              <div className="flex flex-wrap gap-2">
                {['Autonomía', 'Liderazgo', 'Versatilidad', 'Adaptabilidad', 'Análisis de problemas', 'Empatía', 
                  'Autoconfianza', 'Comunicación eficaz', 'Cooperación', 'Proactividad', 
                  'Actitud positiva', 'Resiliencia', 'Carisma'].map(skill => (
                  <span key={skill} className="bg-violet-500 text-white px-3 py-1 rounded-full text-sm hover:bg-violet-400 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="bg-violet-800 p-6 rounded-lg shadow-md mb-6 backdrop-blur-sm bg-opacity-80">
            <h2 className="text-2xl font-bold mb-4 text-violet-200">Proyectos</h2>
            
            <div className="space-y-6">
              <div className="border-b border-violet-600 pb-4">
                <a className="[&>h3]:text-yellow-300 [&>h3]:hover:text-yellow-500 transition-colors" href="https://github.com/luchodelfuturo/pf-henry-point-of-sale"><h3 className="text-xl font-semibold mb-2">Aplicación Point Of Sale</h3> </a>
                <p className="mb-2">
                  Desarrollo de una aplicación para la venta y organización de un Resto-Bar (proyecto final en el bootcamp "Soy Henry").
                </p>
                <p className="mb-2"><strong className="text-violet-300">Funcionalidades:</strong> Paypal como método de pago, historial de pedidos, sistema de búsqueda, 
                  filtros combinados, creación de productos y pedidos, Login con Google y administración de usuarios.</p>
                <p className="mb-2"><strong className="text-violet-300">Tecnologías:</strong> React, Redux, NodeJS, Express, PostgreSQL, SCRUM</p>
              </div>

              <div className="border-b border-violet-600 pb-4">
                <a className="[&>h3]:text-yellow-300 [&>h3]:hover:text-yellow-500 transition-colors" href='https://github.com/nicodxlic/comilonaware'><h3 className="text-xl font-semibold mb-2">Comunicación interna de restaurante</h3> </a>
                <p className="mb-2">
                  Trabajo final de la carrera "Tecnicatura universitaria en desarrollo web" en la UNCO.
                </p>
                <p className="mb-2"><strong className="text-violet-300">Tecnologías:</strong> React, Laravel, MySQL</p>
              </div>
              
              <div>
                <a className="[&>h3]:text-yellow-300 [&>h3]:hover:text-yellow-500 transition-colors" href='https://github.com/elpista/PI-Countries-main'><h3 className="text-xl font-semibold mb-2">Página web de países</h3> </a>
                <p className="mb-2">
                  Proyecto individual en el bootcamp "Soy Henry" con sistema de búsqueda, filtros y ordenamientos combinados.
                </p>
                <p className="mb-2"><strong className="text-violet-300">Funcionalidades:</strong> Creación de actividad turística, búsqueda avanzada.</p>
                <p className="mb-2"><strong className="text-violet-300">Tecnologías:</strong> React, Redux, Express, PostgreSQL</p>
              </div>
              
            </div>
          </section>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <section className="bg-violet-800 p-6 rounded-lg shadow-md mb-6 backdrop-blur-sm bg-opacity-80">
            <h2 className="text-2xl font-bold mb-4 text-violet-200">Formación Académica</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Tecnicatura universitaria en desarrollo web</h3>
                <p className="text-violet-300">Universidad Nacional del Comahue (2022 - 2024)</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold">Full stack developer</h3>
                <p className="text-violet-300">SoyHenry Bootcamp (marzo 2022 - septiembre 2022)</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold">Técnico electrónico</h3>
                <p className="text-violet-300">Escuela Provincial de Educación Técnica N°14 (2016 - 2022)</p>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">Idiomas</h3>
              <ul className="list-disc pl-5 text-violet-200">
                <li>Español: Nativo</li>
                <li>Inglés: Nivel C1</li>
                <li>Portugués: Básico</li>
              </ul>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="bg-violet-800 p-6 rounded-lg shadow-md mb-6 backdrop-blur-sm bg-opacity-80">
            <h2 className="text-2xl font-bold mb-4 text-violet-200">Contacto</h2>
            
            <div className="space-y-3">
              <p><strong className="text-violet-300">Email:</strong> marcopistagnesi<span className="hidden">-no-spam</span>@gmail.com</p>
              <p>
                <strong className="text-violet-300">GitHub:</strong> 
                <a href="https://github.com/elpista" target="_blank" rel="noopener noreferrer" className="text-violet-200 hover:text-white hover:underline ml-2 transition-all">
                  github.com/elpista
                </a>
              </p>
              <p>
                <strong className="text-violet-300">LinkedIn:</strong> 
                <a href="https://www.linkedin.com/in/marco-pistagnesi-0a3993243/" target="_blank" rel="noopener noreferrer" className="text-violet-200 hover:text-white hover:underline ml-2 transition-all">
                  linkedin.com/in/marco-pistagnesi
                </a>
              </p>
              <p><strong className="text-violet-300">Ubicación:</strong> Neuquén Capital, Argentina</p>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-violet-900 text-violet-200 p-4 text-center border-t border-violet-700">
        <p>© {new Date().getFullYear()} Pistagnesi Marco - FullStack Developer</p>
      </footer>
    </div>
  );
}

export default App;