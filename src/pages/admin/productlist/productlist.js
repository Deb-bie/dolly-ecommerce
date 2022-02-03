import React, { useState, useEffect } from 'react';
import { DataGrid } from "@material-ui/data-grid";
import Navbar from "../../../components/navbar/navbar.js";
import { db } from '../../../firebase/config';
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore"; 
import { DeleteOutline, EditOutlined } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import "./productlist.css";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';







const ProductList = () => {

    const navigate = useNavigate();


    const [productList, setProductList] = useState([])


    useEffect(() => {
        const unsub = onSnapshot(collection(db, "Products"), 
        (snapshot) => {

            setProductList(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        });

        return unsub;
    }, []);


    const handleRowClick = (param, event) => {
        if (param.colIndex === 2) {
          event.stopPropagation();
        }
    };
      
    // const handleRowClick = async(id, img, title, description, stock, retailPrice, wholesalePrice) => {
    // };


    const handleCellClick = async(id, img, title, description, stock, retailPrice, wholesalePrice,) => {
      navigate("/details/" + id, {
        state: {
          id: id,
          img: img,
          title: title,
          description: description,
          stock: stock,
          retailPrice: retailPrice,
          wholesalePrice: wholesalePrice,
        }
      })   
    }

    const handleEdit = async(id, img, title, description, stock, retailPrice, wholesalePrice,) => {
        navigate("/productlist/" + id, {
          state: {
            id: id,
            img: img,
            title: title,
            description: description,
            stock: stock,
            retailPrice: retailPrice,
            wholesalePrice: wholesalePrice,
          }
        })   
    }


    const handleAdd = () => {
      navigate("/addproducts")   
  }


    const handleDelete = async(id) => {
        if (window.confirm('Do you want to delete this producr?')) {
          await deleteDoc(doc(db, "Products", id));
        } else {
          console.log('Thing was not saved to the database.');
        }
    }



    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 90,
        },

        {
            field: "productImg",
            headerName: "Product Image",
            width: 150,
            renderCell: (params) => {
              return (
                <div className="productListItem">
                  <img className="productListImg" src={params.row.productImg} alt="" />
                </div>
              );
            },
        },

        {
            field: "productTitle",
            headerName: "Product Title",
            width: 160,
            renderCell: (cellValues) => {
              return (
                <div style={{ color: "blue", fontSize: 18, width: "100%", textAlign: "left" }}>
                  {cellValues.value}
                </div>
              );
            }
        },

        {
            field: "productDescription",
            headerName: "Product Description",
            width: 160,
            renderCell: (cellValues) => {
              return (
                <div style={{ color: "black", fontSize: 18, width: "100%", textAlign: "left" }}>
                  {cellValues.value}
                </div>
              );
            }
        },


        {
            field: "stock",
            headerName: "Stock",
            // type: "number",
            width: 120,
            align: "center"
        },

        {
            field: "retailPrice",
            headerName: "Retail Price",
            width: 120,
            align: "center"
        },

        {
            field: "wholesalePrice",
            headerName: "Whosale Price",
            width: 120,
            align: "center"
        },


        {
            field: "edit",
            headerName: "Edit",
            width: 90,
            align: "center",
            renderCell: (params) => {
                return (
                    <EditOutlined className="productListEdit" onClick={() => handleEdit(
                        params.row.id, 
                        params.row.productImg,
                        params.row.productTitle, 
                        params.row.productDescription,
                        params.row.stock,
                        params.row.retailPrice,
                        params.row.wholesalePrice)}
                    />
                );
            },
        },


        {
            field: "delete",
            headerName: "Delete",
            width: 90,
            align: "center",
            renderCell: (params) => {
              return (
                <DeleteOutline
                  className="productListDelete"
                  onClick={() => handleDelete(params.row.id)}
                />
              );
            },
        },
    ];


    const rows = productList.map((product) => (
        {
          id: product.id,
          productImg: product.image,
          productTitle: product.title,
          productDescription: product.description,
          stock: product.stock,
          retailPrice: product.retailPrice,
          wholesalePrice: product.wholesalePrice,
          edit: product.id
        }
    ));




    return (
        <>
            <Navbar />

            <div className="add">

              <div className='add-icon'>
                <Fab color="primary" aria-label="add product" onClick={handleAdd} className="fab">
                  <AddIcon />
                </Fab>
              </div>

                <div style={{ height: 700, margin: "25px"}}>
                    <DataGrid
                        rowHeight={100}
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        checkboxSelection
                        onCellClick={handleCellClick}
                        onRowClick={handleRowClick}  
                    />
                </div>
            </div>

        </>
    )
}


export default ProductList;

