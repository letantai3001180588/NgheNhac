import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import Search from './component/search.js';
import LocalInfor from './component/localinfor';
import Weather from './component/weather';
import Weekly from './component/weekly'
import Loader from './component/loader';


export default function App() {

  const [listWeather,setListWeather]=useState([]);
  const [dataBaseCity,setDataBaseCity]=useState({});
  const [country,setCountry]=useState("ho%20chi%20minh");
  const [loading,setLoading]=useState(true);

  const API_KEY = 'd94bcd435b62a031771c35633f9f310a'
  const URL = "https://api.openweathermap.org/data/2.5/forecast/daily"
  let Api=`${URL}?q=${country}&units=metric&cnt=7&appid=${API_KEY}`;

  useEffect(() => {
    const getData= async()=>{
      const res=await fetch(Api);
      if(!res.ok)
        setLoading(false);
      else{
        const jsonData=await res.json();
          setDataBaseCity(jsonData.city);
          setListWeather(jsonData.list);
          setLoading(true)
      }
    }
    getData();
  }, [country]);
  
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'Nocvember',
    'December',
  ]

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const currentDate = new Date()
  const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;

  const handleSearch=(e)=>{
    if(e.keyCode===13){
      setCountry(e.target.value)
      e.target.value="";  
    }
  }

  return (
    <div className="App">
      <Search handleSearch={handleSearch}/>

      {loading
        ?<div>
          <div className='container mt-5 text-center'>
            <div className='row  justify-content-around'>
              <LocalInfor name={dataBaseCity.name} country={dataBaseCity.country} population={dataBaseCity.population} date={date}/>
              <Weather listWeather={listWeather}/>
            </div>
          </div>
    
          <Weekly listWeather={listWeather}/>
        </div>
        :<Loader/>
      }
    </div>
  )
}