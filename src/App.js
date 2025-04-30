import RandomWords from './components/RandomWords';
import TitleBar from './components/TitleBar';


export default function MyApp() {
  return (
    <div>
      <TitleBar />
      <h2> Générateur de mots français </h2>
      <RandomWords />
    </div>
  );
}