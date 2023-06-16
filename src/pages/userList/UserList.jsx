import "./userlist.css";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from "../../DummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserList = () => {
 const[data, setData] = useState(userRows); 

 const handleDelete = (id) =>{
  setData(data.filter((item) => item.id !== id));
 };


 const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'user', headerName: 'User', width: 200, renderCell: (params)=>{
   return(
    <div className="userListUser">  
    <img src={params.row.avatar} alt="" className="userListImg" />
    {params.row.username}
    </div>
   )
  } },
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'status',
    headerName: 'status',
    width: 120,
  },

  {
   field: 'transaction',
   headerName: 'Transaction Volume',
   width: 160,
 },

 {
  field: 'action',
  headerName: 'Action',
  width: 150,
  renderCell: (params) =>{
   return(
    <>
    <Link to={"/user/"+params.row.id}>
    <button className="userListEdit">Edit</button>
    </Link>
    <DeleteOutlineIcon className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
    </>
   )
  }
},
];


 return ( 
 <div className="userList">
<DataGrid
        rows={data}
        columns={columns}
        disableRowSelectionOnClick
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
 </div>
  );
}
 
export default UserList;