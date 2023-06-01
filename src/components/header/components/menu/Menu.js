import './Menu.css';
const items = [
  {
    title: 'Home',
    name: 'home',
  },
  {
    title: 'About',
    name: 'about',
  },
  {
    title: 'Education',
    name: 'education',
  },
  {
    title: 'Experience',
    name: 'experience',
  },
  {
    title: 'Projects',
    name: 'projects',
  },
];

function Menu() {
  return (
    <nav className="Menu-wrapper">
      {items.map((item) => (
        <a key={item.name} href={`#${item.name}`} className="Menu-item">
          {item.title}
        </a>
      ))}
    </nav>
  );
}

export default Menu;
