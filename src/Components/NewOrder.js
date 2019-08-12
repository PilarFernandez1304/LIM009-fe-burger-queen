import React from 'react';


const NewOrder=(props)=>{

    return (
        <div className="orderForm">
            <form>
  <fieldset>
    <legend>Create Order</legend>
   
    <div className="form-group">
      <label>Name Client:</label>
      <input type="text" className="form-control" name="Cliente" id="exampleInputEmail1" value={props.valueCliente} placeholder="Enter Name" onChange={props.createPedido}/>
    </div>
    <div className="form-group">
      <label>Table</label>
      <select className="form-control" name="Mesa" id="exampleSelect1" value={props.valueTable} onChange={props.createPedido}>
        <option >1</option>
        <option >2</option>
        <option >3</option>
        <option >4</option>
        <option >5</option>
      </select>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </fieldset>
</form>
        </div>
    )
}

export default NewOrder;