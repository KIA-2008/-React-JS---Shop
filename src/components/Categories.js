import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: "all",
                    name: "Все"
                },
                 {
                    key: "armchair",
                    name: "Кресла"
                },
                 {
                    key: "table",
                    name: "Столы"
                },
                 {
                    key: "sofa",
                    name: "Диваны"
                },
                 {
                    key: "light",
                    name: "Лампы"
                },
                {
                    key: "bed",
                    name: "Кровати"
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories