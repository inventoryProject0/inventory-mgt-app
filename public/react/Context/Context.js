import React, { useState, useEffect } from 'react';
import apiURL from '../api';
import { margin } from '@mui/system';
console.log(apiURL)
const AppContext = React.createContext();


const InventoryAppProvider = ({children})=>{
    const [items, setItems] = useState([]);
	const [isItemListDisplay, setIsItemListDisplay] = useState(true);
	const [isEditClicked, setIsEditClicked]= useState(false);
	const [itemUpdate, setItemUpdate] = useState({name:'', description: '', price:'', category:'', imageUrl:'' });
	const [selectedId, setSelectedId] = useState();
	const [addItemClicked, setAddItemClicked] = useState(false);
	const [addNewItem, setAddNewItem]=useState({})
	const [detailViewClicked, setDetailViewClicked] = useState(false);
	const [detailId, setDetailId] = useState();
	const [singleItemData, setSingleItemData] = useState({});
	const [selectedCategory, setSelectedCategory] = useState('')
	const [itemsByCategory, setItemsByCategory] =useState([]);
    const [isSingleCatClicked, SetIsSingleCatClicked] = useState(false)
	const [allOrderClicked, setAllOrderClicked] = useState(false);
	const [allOrders, setAllOrders] = useState([]);
	const [usersClicked, setUsersClicked] = useState(false);
	const [allUsers, setAllUsers] = useState([]);

// 
    async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemData = await response.json();
			
			setItems(itemData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function fetchSingleItem(id){
		try {
			const response = await fetch(`${apiURL}/items/${id}`);
			const itemData = await response.json();
			
			setSingleItemData(itemData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function fetchItemsByCategory(cat){
		try {
			const response = await fetch(`${apiURL}/items/category/${cat}`);
			const itemData = await response.json();
			setItemsByCategory(itemData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function deleteItem(id){ 
	const response = await fetch(`${apiURL}/items/${id}`,{
		method: 'DELETE'
	});
	const data = await response.json()
	location.reload()
	}

	async function updateItem(id){ 
		const updatedItem = await fetch(`${apiURL}/items/${id}`, {
			method: 'PUT',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(itemUpdate)
		  })
		  const data = await updateItem.json();
	}

	async function postItem(){ 
		const newItem = await fetch(`${apiURL}/items`, {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json'
			},
			body: JSON.stringify(addNewItem)
		  })
		  const data = await newItem.json();

	}

	async function fetchOrders(){
		try {
			const response = await fetch(`${apiURL}/orders`);
			const orderData = await response.json();
			setAllOrders(orderData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}
	
	async function fetchUsers(){
		try {
			const response = await fetch(`${apiURL}/users`);
			const userData = await response.json();
			
			setAllUsers(userData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

    const currentDate = new Date();
	const ThisYear = currentDate.getFullYear();

	useEffect(() => {
		fetchItems();
	}, []);

    return <AppContext.Provider value={{
             items,
             isItemListDisplay,
             isEditClicked,
             itemUpdate, 
             selectedId,
             addItemClicked,
             addNewItem,
             detailViewClicked,
             detailId,
             singleItemData,
             selectedCategory,
             itemsByCategory,
             allOrderClicked,
             allOrders,
             usersClicked,
             allUsers,
             isSingleCatClicked,
             fetchItems,
             fetchSingleItem,
             fetchItemsByCategory,
             deleteItem,
             updateItem,
             updateItem,
             postItem,
             fetchOrders,
             fetchUsers,
             ThisYear,
             setIsItemListDisplay,
             setIsEditClicked,
             setItemUpdate,setSelectedId,
             setAddItemClicked,
             setAddNewItem,
             setDetailViewClicked,
             setDetailId,
             setSingleItemData,
             setSelectedCategory,
             setItemsByCategory,
             setAllOrderClicked,
             setUsersClicked,
             SetIsSingleCatClicked,
            }}>
              {children}
           </AppContext.Provider>
}

export {AppContext, InventoryAppProvider}