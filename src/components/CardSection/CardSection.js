import React from 'react';
import Card from '../Card/Card';

const cardDetails=[{
    id:1,
        img:"/images/note-icon.png",
        title:"Fabric Dyeing",
        desc:"Duis pellentesque mi nec iaculis sed convallis. Cras sed tellus ipsum."
    },{
        id:2,
        img:"/images/threat-icon.png",
        title:"Satin Weaving",
        desc:"Duis pellentesque mi nec iaculis sed convallis. Cras sed tellus ipsum."
    },{
        id:3,
        img:"/images/pillow-icon.png",
        title:"Fabric Printing",
        desc:"Duis pellentesque mi nec iaculis sed convallis. Cras sed tellus ipsum."
    },{
        id:4,
        img:"/images/machine-icon.png",
        title:"Garment Stitching",
        desc:"Duis pellentesque mi nec iaculis sed convallis. Cras sed tellus ipsum."
    },{
        id:5,
        img:"/images/dontKnow-icon.png",
        title:"Linen Weaving",
        desc:"Duis pellentesque mi nec iaculis sed convallis. Cras sed tellus ipsum."
    },{
        id:6,
        img:"/images/tshirt-icon.png",
        title:"Custom Apparel",
        desc:"Duis pellentesque mi nec iaculis sed convallis. Cras sed tellus ipsum."
    },
]

const CardSection = () => {
    return (
        <div className='flex'>
            {
                cardDetails.map((card)=><Card key={card.id} img={card.img} title={card.title} desc={card.desc}/>)
            }
        </div>
    );
};

export default CardSection;