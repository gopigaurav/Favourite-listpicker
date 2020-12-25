import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios'
export const DataContext = createContext();

export const DataProvider= (props) => {
    const [data, setData] = useState([])
  //  const [showLoading, setShowLoading] = useState(true) if u want timer
// let timer1 = setTimeout(() => setShowLoading(false), 500)

    useEffect(()=>{
      async function fetchData(){
        const request = await axios.get('https://assignment-machstatz.herokuapp.com/planet')
        setData(request.data);
      }
      fetchData();
    },[])
    console.log(data)

    return (
        <DataContext.Provider value = {[data, setData]} >
            {props.children}
        </DataContext.Provider>
    )
}