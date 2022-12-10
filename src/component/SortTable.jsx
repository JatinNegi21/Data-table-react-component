import { useEffect , useState , useCallback} from "react";
import {data} from "../data.js";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Box from '@mui/material/Box';


function SortTable() { 
  
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'first_name',
      headerName: 'First name',
      width: 150,
      editable: true,
      sortable:true,
    },
    {
      field: 'last_name',
      headerName: 'Last name',
      width: 150,
      editable: true,
      sortable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 110,
      editable: true,
      sortable:true,
    },
    {
      field: 'gender',
      headerName: 'Gender',
      width: 150,
      editable: true,
      sortable:true,
    },
    {
      field: 'ip_address',
      headerName: 'IP Address',
      width: 150,
      editable: true,
      sortable:true,
    },
    {
      field: 'time',
      headerName: 'Time',
      width: 150,
      editable: true,
      sortable:true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      editable: true,
      sortable:true,
    },
    {
      field: 'mobile',
      headerName: 'Mobile',
      width: 150,
      editable: true,
      sortable:true,
    },
    {
      field: 'area',
      headerName: 'Area',
      width: 150,
      editable: true,
      sortable:true,
    },
    {
      field: 'show',
      headerName: 'Show',
      width: 150,
      editable: true,
      sortable:true,
    },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 150,
      editable: true,
      sortable:true,
    },
  ];
    

  const headers = [

    
    { key: "id", label: "ID" },
    { key: "first_name", label: "First name" },
    { key: "last_name", label: "Last name" },
    { key: "email", label: "Email" },
    { key: "gender", label: "Gender" },
    { key: "ip_address", label: "IP address" },
    { key: "time", label: "Time" },
    { key: "status", label: "Status" },
    { key: "mobile", label: "Mobile" },
    { key: "area", label: "Area" },
    { key: "show", label: "Show" },
    { key: "edit", label: "Edit" },
  ];

  
  return (
    <>

    <Box sx={{ height: '100vh', width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={17}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    </>
  );
}

export default SortTable;