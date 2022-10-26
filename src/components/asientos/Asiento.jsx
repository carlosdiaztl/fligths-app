import React from 'react'
import '../asientos/style.scss'
const Asiento = () => {
   const  listaA=['A1','A2','A3','A4']
    const listaB=['B1','B2','B3','B4']
    const getAsiento=(asiento)=>{
        
        console.log(asiento);

    }
  return (
    <div>Selecciona tu asiento...
    <h1>selecciona tus asientos</h1>
    <div className='div'>
    <section className='divjet'> 
    {listaA.map((item,index)=>(
        <button onClick={()=>{getAsiento(item)} } key={index}>{item} </button>

    ))}
    
    </section>
    <section className='divjet'> 
    {listaB.map((item,index)=>(
        <button onClick={()=>{getAsiento(item)} } key={index}>{item} </button>

    ))}
    
    </section>

     </div>
    
    </div>
    
  )
}

export default Asiento