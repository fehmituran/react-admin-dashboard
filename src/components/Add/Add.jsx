import "./Add.scss";



const Add = ({slug, columns, setOpen}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    
        //add new item
        setOpen(false)
      };


  return (
   <div className="add">
    <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>X</span>
       <h1>Add New {slug}</h1>
       <form onSubmit={handleSubmit}>
          {columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="item">
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Send</button>
        </form>
    </div>
   </div>
  )
}

export default Add