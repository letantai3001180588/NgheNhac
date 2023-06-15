function Weather({listWeather}) {
    return (
        <>
            {listWeather.map((data,i)=>{
            if(i===0)
              return (
              <div  key={i} className='col-xl-5 col-sm-12 pt-sm-3' style={{background:'rgba(5,4,2,0.1)'}}>
                <div className='row'>
                    <div className='wrap-icon-weather'>
                      <img alt="h-0" src={`https://openweathermap.org/img/w/10d.png`} className="icon-weather"/>
                    <div className='tempature'>
                      <span>{data.temp.day}°C</span>
                    </div>
                    <div className='descript-weather'>
                      {data.weather.map((data,i)=>{
                        return (<p key={i}>{data.main}, {data.description}</p>)
                      })}
                    </div>
                    </div>
                </div>


                <div className='row mt-2'>
                  <div className='col-xl-4 col-4'>
                    <div className="rounded-circle box-icon" style={{margin:'auto'}}>
                      <img alt="h-1"  className='icon-sm-weather' src="https://monitor-weather.netlify.app/static/media/pressure.0cd81fbf.svg" />
                    </div>
                    <p className='text-bold'>{data.pressure} hPa</p>
                  </div>
                  <div className='col-xl-4 col-4'>
                    <div className="rounded-circle box-icon" style={{margin:'auto'}}>
                      <img alt="h-2" className='icon-sm-weather' src="https://monitor-weather.netlify.app/static/media/humidity.417c71ed.svg" />
                    </div>
                    <p className='text-bold'>{data.humidity} %</p>
                  </div>
                  <div className='col-xl-4 col-4'>
                    <div className="rounded-circle box-icon" style={{margin:'auto'}}>
                      <img alt="h-3" className='icon-sm-weather' src="https://monitor-weather.netlify.app/static/media/wind_speed.01467f7c.svg" />
                    </div>
                    <p className='text-bold'>{data.speed} m/s N</p>
                  </div>
                </div>
              </div>
            )}  
          )}
        </>
    )
}

export default Weather