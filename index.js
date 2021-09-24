var setLanguage = updateLanguage({
  degree: {
    pt: 'Formações',
    en: 'Degrees'
  },
  informationSystems: {
    pt: 'Sistemas da Informação',
    en: 'Information Systems'
  },
  fatec: {
    pt: 'Formado em sistemas da informação pela Fatec-SO de 2014 à 2016.',
    en: 'Bachelor in Computer information systems by Fatec-SO from 2014 to 2016.'
  },
  languages: {
    pt: 'Idiomas',
    en: 'Languages'
  },
  portuguese: {
    pt: 'Português',
    en: 'Portuguese'
  },
  english: {
    pt: 'Inglês',
    en: 'English'
  },
  native: {
    pt: 'Nativo',
    en: 'Native'
  },
  advanced: {
    pt: 'Avançado',
    en: 'Advanced'
  },
  profile: {
    pt: 'Perfil',
    en: 'Profile'
  },
  myself: {
    pt: 'Desenvolvedor Full Stack com 3 anos de experiência. Nestes anos acumulando experiência em diversas plataformas como o NodeJS,'
      + ' React, Redux, Docker, Kubernetes, Vue, Angular, ReactNative, Java, Python, C# e PHP. Assertivo em todos os projetos afetos à minha responsabilidade,'
      + ' cumprindo invariavelmente os prazos estabelecidos, bem como alinhamento com as metas, diretrizes e estratégia da empresa.',
    en: 'Full Stack developer with 3 years of experience. In these years accumulating experience in several platforms like NodeJS,'
      + ' React, Redux, Docker, Kubernetes, Vue, Angular, ReactNative, Java, Python, C# and PHP. Always eager to learn and create, allowing'
      + ' me to add value in whichever project I work.'
  },
  professional: {
    pt: 'Experiencias Profissionais',
    en: 'Professional Experiences'
  },
  dextra: {
    pt: 'Desenvolvimento Frontend.',
    en: 'Frontend Development.'
  },
  angellira: {
    pt: 'Criação do ambiente Web usando as tecnologias Kubernetes e Docker para implantação e integração contínua, NodeJS e React para desenvolvimento e'
      + ' Elastic Stack para gerenciamento de log.',
    en: 'Creation of Web environment using the technologies Kubernetes and Docker for deployment and continuous integration, NodeJS'
      + ' and React for development and Elastic Stack for logging management.'
  },
  tegra: {
    pt: 'Desenvolvimento de diversos softwares trabalhando com tecnologias Mobile, Backend e Frontend. Incluído nestas tecnologias'
      + ' estão JavaScript, NodeJS, React, ReactNative, VueJS, Angular, Java e PHP.',
    en: 'Development of serveral softwares working with Mobile, Backend and Frontend technologies. Included in these technologies'
      + ' are JavaScript, NodeJS, React, ReactNative, VueJS, Angular, Java and PHP.'
  },
  bezzeraDeMeneses: {
    pt: 'Estágio desenvolvendo aplicativos móveis usando Ionic / Angular e ExpressJS.',
    en: 'Internship developing mobile application using Ionic/Angular and ExpressJS.'
  }
})

function getLanguage() {
  return (location.href.match(/lang=([^&]*)/) || [])[1] || navigator.language.slice(0, 2)
}

setLanguage(getLanguage())

window.onpopstate = function onpopstate() {
  setLanguage(getLanguage())
}
