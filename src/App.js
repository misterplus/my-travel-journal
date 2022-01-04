import './App.css';
import data from './data';
import Header from './components/Header';
import Card from './components/Card';

export default function App() {
  const cardElements = data.map(d => {
    return (
      <Card key={d.title} {...d} />
    )
  })
  return (
        <main>
          <Header />
          {cardElements}
        </main>
    )
}
