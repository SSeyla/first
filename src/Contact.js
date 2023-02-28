import React from "react"

export default function	Contact(props){
    return(
        <div className='color-all'>
           <div className='img-mountfuji'>
             <img src={props.img}/>
           </div>
           <div className='icon-map'>
             <span class="material-symbols-outlined" >pin_drop</span>
           </div>
           <p className='japan'>{props.location}</p>
           <p className='map'>{props.map}</p>
           <h3 className='fuji'>{props.title}</h3>
           <p className='date'>{props.date}</p>
           <p className='description'>{props.description}</p>
        </div>
    )
}