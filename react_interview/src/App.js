import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import CardDetails from './components/CardDetails';

function App() {

  useEffect(() => {
    fetchPost();
  }, []);

  const fetchPost = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setCads(data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [Cards, setCads] = useState([])

  const [selectedCard, setSelectedCard] = useState()
  const [filter, setFilter] = useState("")

  return (
    <div className="App">



      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="favorite">favorite</option>
      </select>

      <div className='main'>
        {filter === "favorite" ?

          Cards.filter(x => x.isFav === true).map((data) => {
            return (
              <Card
                data={data}
                setSelectedCard={setSelectedCard}
                Cards={Cards}
                setCads={setCads}
                
              />
            )
          })

          :

          Cards.map((data) => {
            return (
              <Card
                data={data}
                setSelectedCard={setSelectedCard}
                Cards={Cards}
                setCads={setCads}
              />
            )
          })
        }

      </div>
      {selectedCard && (
        <CardDetails>
          {selectedCard}
        </CardDetails>
      )}
    </div>
  );
}

export default App
