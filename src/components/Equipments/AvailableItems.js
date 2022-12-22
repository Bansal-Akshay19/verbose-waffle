import Card from '../UI/Card';
import CricketItem from './CricketItems';
import classes from './AvailableItems.module.css';

const DummyItems=[
    {
        id:'i1',
        name:'Cricket Bat',
        price:19999,
    },
    {
        id:'i2',
        name:'Cricket Ball',
        price:1399,
    },
    {
        id:'i3',
        name:'Leg Guard',
        price:4499,
    },
    {
        id:'i4',
        name:'Gloves',
        price:5999,
    },
    {
        id:'i5',
        name:'Cricket Helmet',
        price:4679,
    },
];

const AvailableItems=()=>{

    const itemsList=DummyItems.map(item=><CricketItem id={item.id} key={item.id} name={item.name} price={item.price}/>);

    return(
        <section className={classes.items}>
           <Card>
            <ul>
                {itemsList}
            </ul>
           </Card>
        </section>
    );
};

export default AvailableItems;