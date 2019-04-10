import React from 'react';

const Person=(prop)=>{
return <div>
    <p>hello,我是{prop.name},这是我的第{prop.count}作品</p>
     <p>{prop.children}</p>
</div>
}
export default Person;