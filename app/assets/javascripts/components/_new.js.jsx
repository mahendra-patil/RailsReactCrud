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
