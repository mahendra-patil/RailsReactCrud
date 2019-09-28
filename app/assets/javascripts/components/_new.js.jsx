const NewFruit = (props) => {
  let formFields = {}
  return(
    <div>
      <form class="form-inline col-sm-10" onSubmit={ (e) => { props.handleFormSubmit(formFields.name.value, formFields.description.value); e.target.reset();}
  }>
        <div class="form-group col-sm-3">
          <label class="text-primary">Enter Name : </label>
          <input ref={input => formFields.name = input} placeholder='Enter the name of the item' class="form-control" />
        </div>
        &nbsp;
        <div class="form-group col-sm-3.5">
          <label class="text-primary">Enter Description : </label>
          <input ref={input => formFields.description = input} placeholder='Enter a description' class="form-control"/>
        </div>
        &nbsp;
        &nbsp;
          <button  class="btn btn-success">Submit</button>
      </form>
    </div>

  )

}


// <form>
//   <div class="form-group">
//     <label for="exampleInputEmail1">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
//     <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
//   </div>
//   <div class="form-group form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1">
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>
