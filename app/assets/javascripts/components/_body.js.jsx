class Body extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        fruits: []
      };
      this.handleFormSubmit = this.handleFormSubmit.bind(this)
      this.addNewFruit = this.addNewFruit.bind(this)
      this.handleDelete = this.handleDelete.bind(this)
      this.deleteFruit = this.deleteFruit.bind(this)
      this.handleUpdate = this.handleUpdate.bind(this)
      this.updateFruit = this.updateFruit.bind(this)

    }

    handleFormSubmit(name, description){
      let body = JSON.stringify({fruit: {name: name, description:   description} })
    fetch('http://localhost:3005/api/v1/fruits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body,
      }).then((response) => {return response.json()})
      .then((fruit)=>{
        this.addNewFruit(fruit)
      })
      this.handleEdit = this.handleEdit.bind(this)

    }
    addNewFruit(fruit){
      this.setState({
        fruits: this.state.fruits.concat(fruit)
      })
    }

    handleDelete(id){
      fetch(`http://localhost:3005/api/v1/fruits/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.deleteFruit(id)
        })
    }

    deleteFruit(id){
      newFruits = this.state.fruits.filter((fruit) => fruit.id !== id)
      this.setState({
        fruits: newFruits
      })
    }

    handleUpdate(fruit){
      fetch(`http://localhost:3005/api/v1/fruits/${fruit.id}`,
      {
        method: 'PUT',
        body: JSON.stringify({fruit: fruit}),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
          this.updateFruit(fruit)
        })
    }
    updateFruit(fruit){
      let newFruits = this.state.fruits.filter((f) => f.id !== fruit.id)
      newFruits.push(fruit)
      this.setState({
        fruits: newFruits
      })
    }

  componentDidMount(){
      fetch('/api/v1/fruits.json')
        .then((response) => {return response.json()})
        .then((data) => {this.setState({ fruits: data }) });
    }
  render(){
      return(
        <div>
          <NewFruit handleFormSubmit={this.handleFormSubmit} />
          <AllFruits fruits={this.state.fruits} handleDelete={this.handleDelete} handleUpdate = {this.handleUpdate}/>
        </div>
      )
    }
  }


const AllFruits = (props) => {

      var fruits = props.fruits.map((fruit) => {
        return(
          <div key={fruit.id}>
           <Fruit fruit={fruit} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
          </div>
        )
      })
    return(
          <div>
            {fruits}
          </div>
        )
  }

  // renderTableData() {
  //   return this.state.fruits.map((fruits, index) => {
  //      const { id, name,description} = fruits //destructuring
  //      return (
  //         <tr key={id}>
  //            <td>{id}</td>
  //            <td>{name}</td>
  //            <td>{age}</td>
  //            <td>{email}</td>
  //         </tr>
  //      )
  //   })


