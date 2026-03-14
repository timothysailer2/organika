const catalog = [

    {
        id:1,
        title:"Organic Honey",
        price:12.5,
        image:"/public/honey.jpg"
    },

    {
        id:2,
        title:"Almond Butter",
        price:9.99,
        image:"/public/almond.jpg"
    },

    {
        id:3,
        title:"Chia Seeds",
        price:6.75,
        image:"/public/chia.jpg"
    },

    {
        id:4,
        title:"Coconut Oil",
        price:14,
        image:"/public/coconut.jpg"
    }

];

export function getCatalog(){
    return catalog;
}
