const root = ReactDOM.createRoot(document.querySelector('#root'));
let num = 0

const Counter =()=>{
  return (
    <div className="container">
      <div className="head">
      <h1>SUM = {num}</h1>
      <button  className="btnAd">Add Coumter</button>
      </div>
      <div className="content">
     <button  className="btn btn-1">+</button>
     <button  className="btn">{num}</button>
     <button  className="btn btn-3">-</button>
     <button  className="btn btn-4">C</button>
    </div>
    </div>
  )
}

const Show =()=>{
  return (
    <div >
    <Counter/>
    </div>

  )
}
root.render(<Show />)