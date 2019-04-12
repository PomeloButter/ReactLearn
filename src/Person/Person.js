import React from 'react';
import './Person.css';
const Person=(prop)=>{
return <div className="Person">
    <p onClick={prop.secondOnclick}>hello,我是{prop.name},这是我的第{prop.count}作品</p>
     <p>{prop.children}</p>
     <input type="text" onChange={prop.changed} defaultValue={prop.name}></input>
</div>
}
export default Person;