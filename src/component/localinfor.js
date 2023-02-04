function LocalInfor({name,country,population,date}) {
    return (
        <div className='col-xl-5 col-sm-12' style={{height:370+'px',padding:70+'px',background:'rgba(5,4,2,0.1)'}}>
          <h1 >{name}, {country}</h1>
          <h3 >{date}</h3>
          <h4 >Population: {population}</h4>
        </div>
    );
  }
  
export default LocalInfor;
  