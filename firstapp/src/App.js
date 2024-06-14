import './App.css';
//import Component1 from './Component1'
import Product from './Product'
import products from './products'


function App() {
  const names = ['Simone', 'Giovanni', 'Maria'];
  //ITERARE ARRAY:
  /* <section>{
        names.map(name =>
          <h2>{name}</h2>
        )}</section>
  */

  //ITERARE ARRAY DI OGGETTI:
  /*
  products.map((product) => {
            return <Product {...product} />
          }
          )
  */

  return (
    <div className="App">
      <h2>First Card</h2>
      <section>
        {
          products.map((product) => {
            const {id} = product;
            return <Product key={id} {...product} />
          })}
      </section>
      {/* <Component1 /> */}


    </div>
  );
}



export default App;
