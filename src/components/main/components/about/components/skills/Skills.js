import './Skills.css';

const items = [
  {
    name: 'HTML',
    icon: 'html',
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    name: 'CSS',
    icon: 'css',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    name: 'JavaScript',
    icon: 'js',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'TypeScript',
    icon: 'ts',
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'React',
    icon: 'react',
    url: 'https://react.dev/',
  },
  {
    name: 'Next.js',
    icon: 'nextjs',
    url: 'https://nextjs.org/',
  },
  {
    name: 'Tailwind CSS',
    icon: 'tailwind_css',
    url: 'https://tailwindcss.com/',
  },
  {
    name: 'Webpack',
    icon: 'webpack',
    url: 'https://webpack.js.org/',
  },
  {
    name: 'Less',
    icon: 'less',
    url: 'https://lesscss.org/',
  },
  {
    name: 'Node.js',
    icon: 'nodejs',
    url: 'https://nodejs.org/',
  },
  {
    name: 'AdonisJS',
    icon: 'adonis',
    url: 'https://adonisjs.com/',
  },
  {
    name: 'Git / GitHub',
    icon: 'git',
    url: 'https://git-scm.com/',
  },
  {
    name: 'PHP',
    icon: 'php',
    url: 'https://www.php.net/',
  },
  {
    name: 'Laravel',
    icon: 'laravel',
    url: 'https://laravel.com/',
  },
  {
    name: 'MySQL',
    icon: 'mysql',
    url: 'https://www.mysql.com/',
  },
  {
    name: 'SQLite',
    icon: 'sqlite',
    url: 'https://sqlite.org/',
  },
  {
    name: 'React Native',
    icon: 'react_native',
    url: 'https://reactnative.dev/',
  },
  {
    name: 'Android',
    icon: 'android',
    url: 'https://www.android.com/',
  },
];

function Skills() {
  return (
    <div className="Skills-wrapper">
      {items.map((item) => (
        <a
          key={item.name}
          href={item.url}
          className="Skills-item"
          target="_blank"
          rel="noreferrer"
        >
          <img src={`/skills/${item.icon}.svg`} alt={item.name} />
          <span>{item.name}</span>
        </a>
      ))}
    </div>
  );
}

export default Skills;
