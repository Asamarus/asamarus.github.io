import Top from './components/top';
import About from './components/about';
import Education from './components/education';
import Experience from './components/experience';
import Projects from './components/projects';
import Container from '../common/container/Container';

function Main() {
  return (
    <main>
      <Container>
        <Top />
        <About />
        <Education />
        <Experience />
        <Projects />
      </Container>
    </main>
  );
}

export default Main;
