import React,{useContext, useState} from 'react'
import {DataContext} from './DataProvider'
import './List.css';
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";


function List() {
    const [data, setData] = useContext(DataContext)
    const [arr, setArr] = useState([])
    const [isclicked, setIsClicked] = useState(true)
    function HandleClick(id){
        const fav = data.filter((data,index)=>{
            return data.id == id
        })
        setArr(arr.concat(fav))
    }
    arr.filter((arr)=> (
        arr.isFavourite = true
    ))
    console.log(arr)
   
    

    function Removeitem(id){
        console.log('called')
        const fav = data.filter((data,index)=> {
           return data.id == id
    })
        fav.filter((fav) => (
            fav.isFavourite = false
        ))
     console.log(fav)
        setArr(arr.filter((arr)=>(arr.id !== id)))
    }
    console.log(arr)
   

    return (
        <div className="list">
            {isclicked ? 
            (
                data.map((data) => (
                    <div className="card" key={data.id} >        
                    <h1>{data.name}</h1>
                     <p>id : {" "}{data.id}</p>
                     {data.isFavourite ? (
                     <FavoriteIcon fontSize="large" onClick={(e) => Removeitem(data.id)}/>
                           ) : (
                         <FavoriteBorderIcon
                           fontSize="large"
                           onClick={(e) => HandleClick(data.id)}
                             />
                           )}
                     </div>
                    ))                   
            )
            :
             arr.map((arr) => (
                 <div className="card" key={arr.id}>
                     <h1>{arr.name}</h1>
                     <p>id : {" "}{arr.id}</p>
                </div>
             ))
             }
        <button className="btn" onClick={() => setIsClicked(!isclicked)}>{isclicked ? "Fav-List" : "Edit-List"}</button>
        </div>
    )
}

export default List
