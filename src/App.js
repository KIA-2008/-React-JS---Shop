import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Кресло",
          img: "Кресло.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "armchair",
          price: "199.99",
        },
        {
          id: 2,
          title: "Стол",
          img: "Стол.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "table",
          price: "299.99",
        },
        {
          id: 3,
          title: "Диван",
          img: "Диван.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "sofa",
          price: "549.99",
        },
        {
          id: 4,
          title: "Лампа",
          img: "Лампа.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "light",
          price: "25.00",
        },
        {
          id: 5,
          title: "Кровать",
          img: "Кровать.jpg",
          desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
          category: "bed",
          price: "799.99",
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Items items={this.state.items} onAdd={this.addToOrder}/>
        <Footer />
      </div>
    );
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
  
  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInArray = true
    })
    if(!isInArray)
    this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
