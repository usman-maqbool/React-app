import React from 'react'

const Rainbow =(Wrappedcomponent) =>{

    const colors=['red' ,'pink','orange' ,'blue' ,'green' ,'yellow'];
    const randomColors=colors[Math.floor(Math.random() *5) ];
    
    const className=randomColors+'-text';
    // console.log(className);
    // const className=`${randomColors}-text`;
    return(props)=>{

        return(
            <div className={className}>
                <Wrappedcomponent {...props} />

            </div>
        )

    }


}
export default Rainbow;