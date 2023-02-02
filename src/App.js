import { useEffect, useState } from 'react';
import './App.css';
// import Loader from './component/loader';
import Search from './component/search.js';
import LocalInfor from './component/localinfor';

function App() {

  const [listWeather,setListWeather]=useState([]);
  const [dataBaseCity,setDataBaseCity]=useState({});
  const [country,setCountry]=useState("ho%20chi%20minh");

  const API_KEY = 'd94bcd435b62a031771c35633f9f310a'
  const URL = "https://api.openweathermap.org/data/2.5/forecast/daily"
  let Api=`${URL}?q=${country}&units=metric&cnt=7&appid=${API_KEY}`;
  

  const getData= async()=>{
    const res=await fetch(Api);
    const jsonData=await res.json();
    setDataBaseCity(jsonData.city);
    setListWeather(jsonData.list);
    console.log(jsonData);
    
  }
  
  useEffect(() => {
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
    if(e.keyCode==13){
      setCountry(e.target.value)
      e.target.value="";  
    }
  }

  return (
    <div className="App">
      <Search handleSearch={handleSearch}/>
      <div className='container mt-5 text-center'>
      <div className='row  justify-content-around mt-sm-5'> 
        <div className='col-xl-5 col-sm-12 d-flex align-self-center flex-column' style={{padding:70+'px',background:'rgba(5,4,2,0.1)'}}>
          <div>
              <h1 >{dataBaseCity.name}, {dataBaseCity.country}</h1>
              <h3 >{date}</h3>
              <h4 >Population: {dataBaseCity.population}</h4>
          </div>
        </div>

      {listWeather.map((data,i)=>{
        if(i==0)
          return (      
        <div  key={i} className='col-xl-5 col-sm-12 pt-sm-3' style={{background:'rgba(5,4,2,0.1)'}}>
          <div className='row'>
              <div className='wrap-icon-weather'>
              <img alt="photo" src={`https://openweathermap.org/img/w/10d.png`} className="icon-weather"/>
              </div>
              <div className='tempature'>
                  <span>{data.temp.day}°C</span>
              </div>
              <div className='descript-weather'>
                {data.weather.map((data,i)=>{
                  return (<p key={i}>{data.main}, {data.description}</p>)
                })}
              </div>
          </div>


          <div className='row mt-2'>
              <div className='col-xl-4 col-4'>
              <img alt="photo" className='icon-sm-weather' src="https://monitor-weather.netlify.app/static/media/pressure.0cd81fbf.svg" />
              <p className='text-bold'>{data.pressure} hPa</p>
              </div>
              <div className='col-xl-4 col-4'>
              <img alt="photo" className='icon-sm-weather' src="https://monitor-weather.netlify.app/static/media/humidity.417c71ed.svg" />
              <p className='text-bold'>{data.humidity} %</p>
              </div>
              <div className='col-xl-4 col-4'>
              <img alt="photo" className='icon-sm-weather' src="https://monitor-weather.netlify.app/static/media/wind_speed.01467f7c.svg" />
              <p className='text-bold'>{data.speed} m/s N</p>
              </div>

          </div>
        </div>
        )}  
      )}

        </div>
      </div>

      <div className='container' style={{margin:'200px auto 50px auto',background:'rgba(5,4,2,0.1)'}}>
        <div className="holster">
          
          <div className="container2 x mandatory-scroll-snapping " dir="ltr">
            {listWeather.map((data,i)=>{
              return (
                <div key={i} className='d-flex align-self-center flex-column mt-2'>
                  <div className="p-1" style={{color: '#f44336',fontSize: 21+'px',fontWeight: 'bold'}}>
                    {i==0?'Today':new Date(data.dt * 1000).toLocaleString('en-US', { weekday: 'long'})}
                  </div>
                  <div className="p-1 wrap-icon-weather">
                    {data.weather.map((data,i)=>{
                      return (<img key={i} alt="photo" src={`https://openweathermap.org/img/w/${data.icon}.png`} className="icon-md-weather"/>)
                    })}
                  </div>
                  <div className="p-1" style={{fontSize: 24+'px'}}>{data.temp.min}-{data.temp.max} C</div>
                  <div className="p-1" style={{fontSize: 26+'px',fontWeight: '700'}}>
                    {data.weather.map((data,i)=>{
                      return (<p key={i}>{data.main}</p>)
                    })}
                  </div>
                  <div className="p-1" style={{fontSize: 18+'px'}}>
                    {data.weather.map((data,i)=>{
                      return (<p key={i}>{data.description  }</p>)
                    })}
                  </div>
                </div>
              )
            })}
            
          </div>
        </div>
      </div>
      </div>
      )
}

export default App();
