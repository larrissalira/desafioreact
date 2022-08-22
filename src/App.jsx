import { useEffect, useState } from 'react'
import './App.css'
import About from './components/about/about'
import Header from './components/header/header'
import CardProduto from './components/cardsproduto/cardProduto'

function App() {
  const [data, setData] = useState([]);

  const [page, setPage] = useState(1)

  async function handleRequest() {
    const response = await fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`)

    const json = await response.json();
    setData([...data,...json.products])
    console.log(json);
  }

  const nextPage = () => {
    setPage(page+1)
  }

  useEffect(() => {
    handleRequest();
  }, [page]);

  return (
    <div className="App">
      <Header />
      <About />

      <main>
        {data.map((item) => {
          return (
            <CardProduto 
              key={item.id}
              img={item.image}
              name={item.name}
              description={item.description}
              listPrice={item.oldPrice}
              salePrice={item.price}
              installment={item.installments.count}
              value={item.installments.value}
            />
          )
        })}
        
      <button type='button' onClick={nextPage}>Ainda mais produtos aqui!</button>
      </main>
    </div>
  )
}

export default App