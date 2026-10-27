"use client";
import Image from 'next/image';
import {useState} from 'react';
export default function Media({src,alt,priority=false,className=''}){const[failed,setFailed]=useState(false);return <div className={`media ${className}`} style={{position:"relative"}}><Image src={failed?'/retail.svg':src} alt={alt} fill sizes={priority ? "100vw" : "(max-width:700px) 100vw, (max-width:1100px) 50vw, 40vw"} priority={priority} onError={()=>setFailed(true)}/></div>}
