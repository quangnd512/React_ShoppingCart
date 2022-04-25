import React from 'react';
import data from './data/data.json';
import Products from './components/Products';

class App extends React.Component {
  render() {
    this.state = {
      products: data.products,

    }
    return (
      <div className="grid-container">
        <header className="header">
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">
              Cart Item
            </div>
          </div>
        </main>
        <footer>
          All right is reserved
        </footer>
      </div>
    );
  }
}

export default App;
