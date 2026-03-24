import type { Project } from '@/types'

export const projects: Project[] = [
  // ── Featured (shown on home page) ─────────────────────────────────
  {
    title: 'Trippd.',
    description: 'Plan trips collaboratively with friends in real-time.',
    emoji: '✈️',
    tags: ['Vue', 'Real-time', 'Collaborative', '🚧 Under Construction'],
    tagVariants: ['primary', 'secondary', 'accent', 'neutral'],
    featured: true,
  },

  // ── Uni projects (shown on /projects page) ────────────────────────
  {
    title: 'WeSurf',
    description:
      'A cross-platform crowdsourcing mobile app (Android & iOS) for surfers in NSW. Users save surf locations, get real-time surf info, create accounts, validate community-uploaded data, and assess danger levels of a spot.',
    emoji: '🏄',
    tags: ['Flutter', 'Dart', 'Firebase'],
    tagVariants: ['primary', 'secondary', 'accent'],
    repoUrl: 'https://gitfront.io/r/saarahp/c99f325622777be3520704531729b6738cd663fb/WeSurf/',
    imgSrc: 'https://cdn.glitch.com/ec05c6ce-7fe4-42b0-839f-11cde141480f%2Fwesurf2.JPG?v=1617740048192',
    featured: false,
  },
  {
    title: 'Kmart Testing Tool',
    description:
      'Automated functional testing tool for the Kmart website using Java Selenium and jUnit. Runs tests verifying categories, filters, cart updates and more — passing when behaviour meets spec, failing when it doesn\'t.',
    emoji: '🧪',
    tags: ['Java', 'Selenium', 'jUnit'],
    tagVariants: ['primary', 'secondary', 'accent'],
    repoUrl: 'https://github.com/saarahpackeer/testing_tool',
    imgSrc: 'https://cdn.glitch.com/ec05c6ce-7fe4-42b0-839f-11cde141480f%2Fkmart.JPG?v=1617740070673',
    featured: false,
  },
  {
    title: 'ARTTool',
    description:
      'Compares the FSCS-ART non-numeric testing algorithm against traditional random testing. Results showed ART hits failure regions more accurately than random testing, though with longer runtime.',
    emoji: '📊',
    tags: ['Java', 'JavaFX', 'FSCS-ART'],
    tagVariants: ['primary', 'secondary', 'accent'],
    repoUrl: 'https://gitfront.io/r/saarahp/129c85b5d5afe5f6cce884fa2d41e0bfb25f36a8/ARTTool/',
    imgSrc: 'https://cdn.glitch.com/ec05c6ce-7fe4-42b0-839f-11cde141480f%2Farttool.png?v=1617740061063',
    featured: false,
  },
  {
    title: 'TravelHelper',
    description:
      'A CRUD Android app that calculates total fuel cost for cross-state travel. Users input start/end destinations and fuel consumption; trips can be saved to SQLite or discarded.',
    emoji: '🚗',
    tags: ['Java', 'SQLite', 'Android'],
    tagVariants: ['primary', 'secondary', 'accent'],
    repoUrl: 'https://github.com/saarahpackeer/travelhelperapp',
    imgSrc: 'https://cdn.glitch.com/ec05c6ce-7fe4-42b0-839f-11cde141480f%2Ftravelhelper2.png?v=1617740069065',
    featured: false,
  },
  {
    title: 'Library System',
    description:
      'A library system with Student, Librarian, and Admin user types. Data is stored in text files acting as a database. Users can register, log in, and view/reserve books; admins can edit and delete.',
    emoji: '📚',
    tags: ['Java'],
    tagVariants: ['primary'],
    repoUrl: 'https://github.com/saarahpackeer/Library_System',
    imgSrc: 'https://cdn.glitch.com/ec05c6ce-7fe4-42b0-839f-11cde141480f%2FAll%20the%20makeup%2C%20clothes%2C%20and%20music%20I\'ve%20been%20loving(3).png?v=1617993976070',
    featured: false,
  },
  {
    title: 'Tourism Website Prototype',
    description:
      'A prototype tourism website built with HTML, CSS and JavaScript. Currently under construction.',
    emoji: '🌏',
    tags: ['HTML', 'CSS', 'JavaScript'],
    tagVariants: ['primary', 'secondary', 'accent'],
    imgSrc: 'https://cdn.glitch.com/ec05c6ce-7fe4-42b0-839f-11cde141480f%2Ftourism.png?v=1617993682212',
    featured: false,
  },
  {
    title: '2019 Election Twitter Sentiment Analysis',
    description:
      'A sentiment analysis on the 2019 Australian Federal Election using the Naïve Bayes Classifier. Tweets were extracted, sentiments assessed, and polarity used to predict results against real outcomes.',
    emoji: '🗳️',
    tags: ['Naïve Bayes', 'ML', 'Sentiment Analysis'],
    tagVariants: ['primary', 'secondary', 'accent'],
    repoUrl: 'https://cdn.glitch.com/ec05c6ce-7fe4-42b0-839f-11cde141480f%2FAustralian%20Federal%202019%20Election%20Twitter%20Sentiment%20Analysis%20with%20the%20Na%C3%AFve%20Bayes%20Classifier.pdf?v=1618420603424',
    imgSrc: 'https://uc-r.github.io/public/images/analytics/naive_bayes/naive_bayes_icon.png',
    featured: false,
  },
  {
    title: 'ANNs in the Medical Industry — Literature Review',
    description:
      'A literature review on Artificial Neural Networks in the medical industry, exploring how ANNs are applied, their strengths and limitations, and patterns found across the studies reviewed.',
    emoji: '🧠',
    tags: ['ANN', 'Machine Learning', 'Literature Review'],
    tagVariants: ['primary', 'secondary', 'accent'],
    repoUrl: 'https://cdn.glitch.com/ec05c6ce-7fe4-42b0-839f-11cde141480f%2FA%20literature%20review%20of%20the%20application%20of%20Artificial%20Neural%20Networks%20(ANN)%20in%20the%20medical%20industry.pdf?v=1618420503664',
    imgSrc: 'https://www.researchgate.net/profile/Facundo-Bre/publication/321259051/figure/fig1/AS:614329250496529@1523478915726/Artificial-neural-network-architecture-ANN-i-h-1-h-2-h-n-o.png',
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const uniProjects = projects.filter((p) => !p.featured)