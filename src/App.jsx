import { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [language, setLanguage] = useState('es'); // 'es' for Spanish, 'en' for English

  const translations = {
    es: {
      about: {
        title: "Acerca de mí",
        content: [
          "Full Stack web developer con experiencia en NodeJS, React, Redux, Laravel, Bootstrap, PostgreSQL, MySQL, ExpressJS y Github.",
          "Trabajé en el desarrollo de una aplicación Point Of Sale para la venta y organización de un Resto-Bar. Tengo experiencia con desarrollo ágil SCRUM y nivel de inglés C1.",
          "Me apasiona programar, trabajar en equipo y soy muy resiliente. Me recibí de Técnico universitario en desarrollo web en la Universidad Nacional del Comahue (UNCO)."
        ]
      },
      skills: {
        title: "Habilidades",
        technical: "Técnicas",
        soft: "Soft skills",
        techSkills: ['React', 'Redux', 'Express', 'Laravel', 'Bootstrap', 'PostgreSQL', 'MySQL', 'Tailwind', 'SCRUM', 'Github'],
        softSkills: ['Autonomía', 'Liderazgo', 'Versatilidad', 'Adaptabilidad', 'Análisis de problemas', 'Empatía', 'Autoconfianza', 'Comunicación eficaz', 'Cooperación', 'Proactividad', 'Actitud positiva', 'Resiliencia', 'Carisma']
      },
      projects: {
        title: "Proyectos",
        posApp: {
          title: "Aplicación Point Of Sale",
          description: "Desarrollo de una aplicación para la venta y organización de un Resto-Bar (proyecto final en el bootcamp 'Soy Henry').",
          features: "Funcionalidades: Paypal como método de pago, historial de pedidos, sistema de búsqueda, filtros combinados, creación de productos y pedidos, Login con Google y administración de usuarios.",
          tech: "Tecnologías: React, Redux, NodeJS, Express, PostgreSQL, SCRUM"
        },
        restaurantCom: {
          title: "Comunicación interna de restaurante",
          description: "Trabajo final de la carrera 'Tecnicatura universitaria en desarrollo web' en la UNCO.",
          tech: "Tecnologías: React, Laravel, MySQL"
        },
        countries: {
          title: "Página web de países",
          description: "Proyecto individual en el bootcamp 'Soy Henry' con sistema de búsqueda, filtros y ordenamientos combinados.",
          features: "Funcionalidades: Creación de actividad turística, búsqueda avanzada.",
          tech: "Tecnologías: React, Redux, Express, PostgreSQL"
        }
      },
      education: {
        title: "Educación",
        degrees: [
          {
            name: "Tecnicatura universitaria en desarrollo web",
            institution: "Universidad Nacional del Comahue (2022 - 2024)"
          },
          {
            name: "Full stack developer",
            institution: "SoyHenry Bootcamp (marzo 2022 - septiembre 2022)"
          },
          {
            name: "Técnico electrónico",
            institution: "EPET N°14 (2016 - 2022)"
          }
        ],
        languages: "Idiomas",
        languageList: [
          "Español: Nativo",
          "Inglés: Nivel C1",
          "Portugués: Básico"
        ]
      },
      contact: {
        title: "Contacto",
        email: "Email:",
        github: "GitHub:",
        linkedin: "LinkedIn:",
        location: "Ubicación:",
        locationValue: "Neuquén Capital, Argentina"
      },
      nav: {
        about: "Acerca de mí",
        skills: "Habilidades",
        projects: "Proyectos",
        education: "Educación",
        contact: "Contacto"
      },
      header: {
        title: "Pistagnesi Marco",
        subtitle: "FullStack Web Developer"
      },
      footer: "© {year} Pistagnesi Marco - FullStack Developer"
    },
    en: {
      about: {
        title: "About Me",
        content: [
          "Full Stack web developer with experience in NodeJS, React, Redux, Laravel, Bootstrap, PostgreSQL, MySQL, ExpressJS and Github.",
          "I worked on developing a Point Of Sale application for sales and organization of a Resto-Bar. I have experience with agile SCRUM development and C1 English level.",
          "I'm passionate about programming, teamwork and I'm very resilient. I graduated as a University Technician in Web Development from the National University of Comahue (UNCO)."
        ]
      },
      skills: {
        title: "Skills",
        technical: "Technical",
        soft: "Soft skills",
        techSkills: ['React', 'Redux', 'Express', 'Laravel', 'Bootstrap', 'PostgreSQL', 'MySQL', 'Tailwind', 'SCRUM', 'Github'],
        softSkills: ['Autonomy', 'Leadership', 'Versatility', 'Adaptability', 'Problem analysis', 'Empathy', 'Self-confidence', 'Effective communication', 'Cooperation', 'Proactivity', 'Positive attitude', 'Resilience', 'Charisma']
      },
      projects: {
        title: "Projects",
        posApp: {
          title: "Point Of Sale Application",
          description: "Development of an application for sales and organization of a Resto-Bar (final project in the 'Soy Henry' bootcamp).",
          features: "Features: Paypal as payment method, order history, search system, combined filters, product and order creation, Google Login and user management.",
          tech: "Technologies: React, Redux, NodeJS, Express, PostgreSQL, SCRUM"
        },
        restaurantCom: {
          title: "Restaurant Internal Communication",
          description: "Final project of the 'University Technician in Web Development' degree at UNCO.",
          tech: "Technologies: React, Laravel, MySQL"
        },
        countries: {
          title: "Countries Website",
          description: "Individual project in the 'Soy Henry' bootcamp with search system, filters and combined sorting.",
          features: "Features: Tourist activity creation, advanced search.",
          tech: "Technologies: React, Redux, Express, PostgreSQL"
        }
      },
      education: {
        title: "Education",
        degrees: [
          {
            name: "University Technician in Web Development",
            institution: "National University of Comahue (2022 - 2024)"
          },
          {
            name: "Full stack developer",
            institution: "SoyHenry Bootcamp (March 2022 - September 2022)"
          },
          {
            name: "Electronics Technician",
            institution: "EPET N°14 (2016 - 2022)"
          }
        ],
        languages: "Languages",
        languageList: [
          "Spanish: Native",
          "English: C1 Level",
          "Portuguese: Basic"
        ]
      },
      contact: {
        title: "Contact",
        email: "Email:",
        github: "GitHub:",
        linkedin: "LinkedIn:",
        location: "Location:",
        locationValue: "Neuquén Capital, Argentina"
      },
      nav: {
        about: "About Me",
        skills: "Skills",
        projects: "Projects",
        education: "Education",
        contact: "Contact"
      },
      header: {
        title: "Pistagnesi Marco",
        subtitle: "FullStack Web Developer"
      },
      footer: "© {year} Pistagnesi Marco - FullStack Developer"
    }
  };

  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <div className="min-h-screen bg-violet-900 text-white">
      {/* Header */}
      <header className="bg-violet-800 text-white p-6 shadow-md text-center">
        <button 
          onClick={toggleLanguage}
          className="bg-violet-600 hover:bg-violet-500 px-3 py-1 rounded text-sm transition-colors"
        >
          {language === 'es' ? 'EN' : 'ES'}
        </button>
        <div className="flex justify-between items-start">
          <div className="mx-auto"> {/* Este div centrará el contenido */}
            <h1 className="text-3xl font-bold">{t.header.title}</h1>
            <p className="text-xl">{t.header.subtitle}</p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-violet-700 shadow-sm">
        <ul className="flex justify-center space-x-8 p-4">
          <li>
            <button 
              onClick={() => setActiveSection('about')}
              className={`px-4 py-2 rounded transition-all ${activeSection === 'about' ? 'bg-violet-500 text-white font-medium' : 'hover:bg-violet-600'}`}
            >
              {t.nav.about}
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveSection('skills')}
              className={`px-4 py-2 rounded transition-all ${activeSection === 'skills' ? 'bg-violet-500 text-white font-medium' : 'hover:bg-violet-600'}`}
            >
              {t.nav.skills}
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveSection('projects')}
              className={`px-4 py-2 rounded transition-all ${activeSection === 'projects' ? 'bg-violet-500 text-white font-medium' : 'hover:bg-violet-600'}`}
            >
              {t.nav.projects}
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveSection('education')}
              className={`px-4 py-2 rounded transition-all ${activeSection === 'education' ? 'bg-violet-500 text-white font-medium' : 'hover:bg-violet-600'}`}
            >
              {t.nav.education}
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveSection('contact')}
              className={`px-4 py-2 rounded transition-all ${activeSection === 'contact' ? 'bg-violet-500 text-white font-medium' : 'hover:bg-violet-600'}`}
            >
              {t.nav.contact}
            </button>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* About Section */}
        {activeSection === 'about' && (
          <section className="bg-violet-800 p-6 rounded-lg shadow-md mb-6 backdrop-blur-sm bg-opacity-80">
            <h2 className="text-2xl font-bold mb-4 text-violet-200">{t.about.title}</h2>
            {t.about.content.map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section className="bg-violet-800 p-6 rounded-lg shadow-md mb-6 backdrop-blur-sm bg-opacity-80">
            <h2 className="text-2xl font-bold mb-4 text-violet-200">{t.skills.title}</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{t.skills.technical}</h3>
              <div className="flex flex-wrap gap-2">
                {t.skills.techSkills.map(skill => (
                  <span key={skill} className="bg-violet-600 text-white px-3 py-1 rounded-full text-sm hover:bg-violet-500 transition-all">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">{t.skills.soft}</h3>
              <div className="flex flex-wrap gap-2">
                {t.skills.softSkills.map(skill => (
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
            <h2 className="text-2xl font-bold mb-4 text-violet-200">{t.projects.title}</h2>
            
            <div className="space-y-6">
              <div className="border-b border-violet-600 pb-4">
                <a className="[&>h3]:text-yellow-300 [&>h3]:hover:text-yellow-500 transition-colors" href="https://github.com/luchodelfuturo/pf-henry-point-of-sale"><h3 className="text-xl font-semibold mb-2">{t.projects.posApp.title}</h3> </a>
                <p className="mb-2">{t.projects.posApp.description}</p>
                <p className="mb-2"><strong className="text-violet-300">{t.projects.posApp.features.split(':')[0]}:</strong> {t.projects.posApp.features.split(':')[1]}</p>
                <p className="mb-2"><strong className="text-violet-300">{t.projects.posApp.tech.split(':')[0]}:</strong> {t.projects.posApp.tech.split(':')[1]}</p>
              </div>

              <div className="border-b border-violet-600 pb-4">
                <a className="[&>h3]:text-yellow-300 [&>h3]:hover:text-yellow-500 transition-colors" href='https://github.com/nicodxlic/comilonaware'><h3 className="text-xl font-semibold mb-2">{t.projects.restaurantCom.title}</h3> </a>
                <p className="mb-2">{t.projects.restaurantCom.description}</p>
                <p className="mb-2"><strong className="text-violet-300">{t.projects.restaurantCom.tech.split(':')[0]}:</strong> {t.projects.restaurantCom.tech.split(':')[1]}</p>
              </div>
              
              <div>
                <a className="[&>h3]:text-yellow-300 [&>h3]:hover:text-yellow-500 transition-colors" href='https://github.com/elpista/PI-Countries-main'><h3 className="text-xl font-semibold mb-2">{t.projects.countries.title}</h3> </a>
                <p className="mb-2">{t.projects.countries.description}</p>
                <p className="mb-2"><strong className="text-violet-300">{t.projects.countries.features.split(':')[0]}:</strong> {t.projects.countries.features.split(':')[1]}</p>
                <p className="mb-2"><strong className="text-violet-300">{t.projects.countries.tech.split(':')[0]}:</strong> {t.projects.countries.tech.split(':')[1]}</p>
              </div>
            </div>
          </section>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <section className="bg-violet-800 p-6 rounded-lg shadow-md mb-6 backdrop-blur-sm bg-opacity-80">
            <h2 className="text-2xl font-bold mb-4 text-violet-200">{t.education.title}</h2>
            
            <div className="space-y-4">
              {t.education.degrees.map((degree, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold">{degree.name}</h3>
                  <p className="text-violet-300">{degree.institution}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2">{t.education.languages}</h3>
              <ul className="list-disc pl-5 text-violet-200">
                {t.education.languageList.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section className="bg-violet-800 p-6 rounded-lg shadow-md mb-6 backdrop-blur-sm bg-opacity-80">
            <h2 className="text-2xl font-bold mb-4 text-violet-200">{t.contact.title}</h2>
            
            <div className="space-y-3">
              <p><strong className="text-violet-300">{t.contact.email}</strong> marcopistagnesi<span className="hidden">-no-spam</span>@gmail.com</p>
              <p>
                <strong className="text-violet-300">{t.contact.github}</strong> 
                <a href="https://github.com/elpista" target="_blank" rel="noopener noreferrer" className="text-violet-200 hover:text-white hover:underline ml-2 transition-all">
                  github.com/elpista
                </a>
              </p>
              <p>
                <strong className="text-violet-300">{t.contact.linkedin}</strong> 
                <a href="https://www.linkedin.com/in/marco-pistagnesi-0a3993243/" target="_blank" rel="noopener noreferrer" className="text-violet-200 hover:text-white hover:underline ml-2 transition-all">
                  linkedin.com/in/marco-pistagnesi
                </a>
              </p>
              <p><strong className="text-violet-300">{t.contact.location}</strong> {t.contact.locationValue}</p>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-violet-900 text-violet-200 p-4 text-center border-t border-violet-700">
        <p>{t.footer.replace('{year}', new Date().getFullYear())}</p>
      </footer>
    </div>
  );
}

export default App;