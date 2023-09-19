import "./DataTable.scss";
import {
    DataGrid,
    GridToolbar,
  } from "@mui/x-data-grid";
  
import { Link } from "react-router-dom";
import view from "../../img/view.svg";
import delet from "../../img/delete.svg"



const DataTable = ({columns, rows, slug}) => {

    const handleDelete = (id) => {
        //delete the item
        console.log("id", id)
      };

      const actionColumn = {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="action">
              <Link to={`/${slug}/:${params.row.id}`}>
                <img src={view} alt="" />
              </Link>
              <div className="delete" onClick={() => handleDelete(params.row.id)}>
                <img src={delet} alt="" />
              </div>
            </div>
          );
        },
      };


  return (
    <div className="dataTable">
       <DataGrid  className="dataGrid"
        rows={rows}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default DataTable