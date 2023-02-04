function Weekly({listWeather}) {
    return (
        
      <div className='container' style={{margin:'200px auto 50px auto',background:'rgba(5,4,2,0.1)'}}>
      <div className="holster">
        
        <div className="container2 x mandatory-scroll-snapping " dir="ltr">
          {listWeather.map((data,i)=>{ 
            return (
              <div key={i} className='d-flex align-self-center flex-column mt-2'>
                <div className="p-1" style={{color: '#f44336',fontSize: 21+'px',fontWeight: 'bold'}}>
                  {i===0?'Today':new Date(data.dt * 1000).toLocaleString('en-US', { weekday: 'long'})}
                </div>
                <div className="p-1 wrap-icon-weather">
                  {data.weather.map((data,i)=>{
                    return (<img key={i} alt={'photo'+i} src={`https://openweathermap.org/img/w/${data.icon}.png`} className="icon-md-weather"/>)
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
    )
}

export default Weekly