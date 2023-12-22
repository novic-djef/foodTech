 const restaurantData = [
  {
    id: 1,
    name: 'Glacier Moderne',
    location: 'En face l\'hotel kystal palace',
    chef: 'Chef Pierre',
    rating: '4.7',
    quartier: 'Akwa',
    deliveryTime: '30-45 minutes',
    thumbnail: require('../../assets/images/glacier.jpg'),
        plats: [
          {
            id: 1001,
            name: 'Filet Mignon',
            ingredients: ['Filet de bœuf', 'Sauce aux champignons', 'Légumes grillés'],
            price: 2500,
            thumbnail: require('../../assets/images/1.jpg'),
            chef: 'Tonleu Jean',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
          },
          {
            id: 1002,
            name: 'Salade César',
            ingredients: ['Laitue romaine', 'Croûtons', 'Poulet grillé', 'Sauce César'],
            price: 1500,
            thumbnail: require('../../assets/images/aa.jpg'),
            chef: 'Tonleu Jean',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
          },
          {
            id: 1003,
            name: 'Filet Mignon',
            ingredients: ['Filet de bœuf', 'Sauce aux champignons', 'Légumes grillés'],
            price: 2500,
            thumbnail: require('../../assets/images/1.jpg'),
            chef: 'Tonleu Jean',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
          },
          {
            id: 1004,
            name: 'Salade César',
            ingredients: ['Laitue romaine', 'Croûtons', 'Poulet grillé', 'Sauce César'],
            price: 1500,
            thumbnail: require('../../assets/images/6.jpeg'),
            chef: 'Tonleu Jean',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
          },
          {
            id: 1005,
            name: 'Filet Mignon',
            ingredients: ['Filet de bœuf', 'Sauce aux champignons', 'Légumes grillés'],
            price: 2500,
            thumbnail: require('../../assets/categories/a.jpg'),
            chef: 'Tonleu Jean',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
          },
          {
            id: 1006,
            name: 'Salade César',
            ingredients: ['Laitue romaine', 'Croûtons', 'Poulet grillé', 'Sauce César'],
            price: 1500,
            thumbnail: require('../../assets/categories/baha.jpg'),
            chef: 'Tonleu Jean',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
          },

          {
            id: 1007,
            name: 'Homard Thermidor',
            ingredients: ['Homard', 'Sauce Thermidor', 'Pommes de terre au four'],
            price: 4000,
            thumbnail: require('../../assets/categories/bai.jpg'),
            chef: 'Tonleu Jean',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
          },
          {
            id: 1008,
            name: 'Crème Brûlée',
            ingredients: ['Crème', 'Sucre', 'Vanille'],
            price: 1850,
            thumbnail: require('../../assets/categories/bas.jpg'),
            chef: 'Tonleu Jean',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
          },
          {
            id: 1009,
            name: 'Homard Thermidor',
            ingredients: ['Homard', 'Sauce Thermidor', 'Pommes de terre au four'],
            price: 4000,
            thumbnail: require('../../assets/categories/b.jpg'),
            chef: 'Tonleu Jean',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
          },
          {
            id: 10000,
            name: 'Crème Brûlée',
            ingredients: ['Crème', 'Sucre', 'Vanille'],
            price: 1850,
            thumbnail: require('../../assets/categories/c.jpg'),
            chef: 'Tonleu Jean',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
          },
        ],
      },

    {
    id: 2,
        name: 'Tchop Et Yamo',
        location: 'A cote anciene mairi',
        chef: 'Chef Novic',
        rating: '4.5',
        quartier: 'Bonamoussadi',
        deliveryTime: '20-35 minutes',
        thumbnail: require('../../assets/images/l.jpg'),
        
            plats: [
            {
                id: 1001,
                name: 'Filet Mignon',
                ingredients: ['Filet de bœuf', 'Sauce aux champignons', 'Légumes grillés'],
                price: 2500,
                thumbnail: require('../../assets/images/1.jpg'),
                chef: 'Novic-Djef',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
            },
            {
                id: 1002,
                name: 'Salade César',
                ingredients: ['Laitue romaine', 'Croûtons', 'Poulet grillé', 'Sauce César'],
                price: 1500,
                thumbnail: require('../../assets/images/aa.jpg'),
                chef: 'Stephane',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
            },
            {
                id: 1003,
                name: 'Filet Mignon',
                ingredients: ['Filet de bœuf', 'Sauce aux champignons', 'Légumes grillés'],
                price: 2500,
                thumbnail: require('../../assets/images/1.jpg'),
                chef: 'Novic-Djef',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
            },
            {
                id: 1004,
                name: 'Salade César',
                ingredients: ['Laitue romaine', 'Croûtons', 'Poulet grillé', 'Sauce César'],
                price: 1500,
                thumbnail: require('../../assets/images/6.jpeg'),
                chef: 'Novic-Djef',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
            },
            {
                id: 1005,
                name: 'Filet Mignon',
                ingredients: ['Filet de bœuf', 'Sauce aux champignons', 'Légumes grillés'],
                price: 2500,
                thumbnail: require('../../assets/categories/a.jpg'),
                chef: 'Novic-Djef',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
            },
            {
                id: 1006,
                name: 'Salade César',
                ingredients: ['Laitue romaine', 'Croûtons', 'Poulet grillé', 'Sauce César'],
                price: 1500,
                thumbnail: require('../../assets/categories/baha.jpg'),
                chef: 'Novic-Djef',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
            },
           

            {
                id: 1007,
                name: 'Homard Thermidor',
                ingredients: ['Homard', 'Sauce Thermidor', 'Pommes de terre au four'],
                price: 4000,
                thumbnail: require('../../assets/categories/bai.jpg'),
                chef: 'Novic-Djef',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
            },
            {
                id: 1008,
                name: 'Crème Brûlée',
                ingredients: ['Crème', 'Sucre', 'Vanille'],
                price: 1850,
                thumbnail: require('../../assets/categories/bas.jpg'),
                chef: 'Novic-Djef',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
            },
            {
                id: 1009,
                name: 'Homard Thermidor',
                ingredients: ['Homard', 'Sauce Thermidor', 'Pommes de terre au four'],
                price: 4000,
                thumbnail: require('../../assets/categories/b.jpg'),
                chef: 'Novic-Djef',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
            },
            {
                id: 10000,
                name: 'Crème Brûlée',
                ingredients: ['Crème', 'Sucre', 'Vanille'],
                price: 1850,
                thumbnail: require('../../assets/categories/c.jpg'),
                chef: 'Novic-Djef',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
            },
          ]
        },
          
{
    id: 3,
    name: 'Lepop',
    location: 'A cote station total',
    chef: 'Chef Stephane',
    rating: '3.9',
    quartier: 'Akwa',
    deliveryTime: '30-45 minutes',
    thumbnail: require('../../assets/images/glacier.jpg'),
        plats: [
          {
            id: 1001,
            name: 'Filet Mignon',
            ingredients: ['Filet de bœuf', 'Sauce aux champignons', 'Légumes grillés'],
            price: 2500,
            thumbnail: require('../../assets/images/1.jpg'),
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
          },
          {
            id: 1002,
            name: 'Salade César',
            ingredients: ['Laitue romaine', 'Croûtons', 'Poulet grillé', 'Sauce César'],
            price: 1500,
            thumbnail: require('../../assets/images/aa.jpg'),
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
          },
          {
            id: 1003,
            name: 'Filet Mignon',
            ingredients: ['Filet de bœuf', 'Sauce aux champignons', 'Légumes grillés'],
            price: 2500,
            thumbnail: require('../../assets/images/1.jpg'),
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
          },
          {
            id: 1004,
            name: 'Salade César',
            ingredients: ['Laitue romaine', 'Croûtons', 'Poulet grillé', 'Sauce César'],
            price: 1500,
            thumbnail: require('../../assets/images/6.jpeg'),
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
          },
          {
            id: 1005,
            name: 'Filet Mignon',
            ingredients: ['Filet de bœuf', 'Sauce aux champignons', 'Légumes grillés'],
            price: 2500,
            thumbnail: require('../../assets/categories/a.jpg'),
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
          },
          {
            id: 1006,
            name: 'Salade César',
            ingredients: ['Laitue romaine', 'Croûtons', 'Poulet grillé', 'Sauce César'],
            price: 1500,
            thumbnail: require('../../assets/categories/baha.jpg'),
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
          },
 
          {
            id: 1007,
            name: 'Homard Thermidor',
            ingredients: ['Homard', 'Sauce Thermidor', 'Pommes de terre au four'],
            price: 4000,
            thumbnail: require('../../assets/categories/bai.jpg'),
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
          },
          {
            id: 1008,
            name: 'Crème Brûlée',
            ingredients: ['Crème', 'Sucre', 'Vanille'],
            price: 1850,
            thumbnail: require('../../assets/categories/bas.jpg'),
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
          },
          {
            id: 1009,
            name: 'Homard Thermidor',
            ingredients: ['Homard', 'Sauce Thermidor', 'Pommes de terre au four'],
            price: 4000,
            thumbnail: require('../../assets/categories/b.jpg'),
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
          },
          {
            id: 10000,
            name: 'Crème Brûlée',
            ingredients: ['Crème', 'Sucre', 'Vanille'],
            price: 1850,
            thumbnail: require('../../assets/categories/c.jpg'),
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
          },
        ],
      },
    {
    id: 4,
        name: 'Loic Food',
        location: 'En face ecole publique ',
        chef: 'Chef Djef',
        rating: '3.6',
        quartier: 'Bonamoussadi',
        deliveryTime: '20-35 minutes',
        thumbnail: require('../../assets/images/loic.jpg'),
        
            plats: [
            {
                id: 1001,
                name: 'Filet Mignon',
                ingredients: ['Filet de bœuf', 'Sauce aux champignons', 'Légumes grillés'],
                price: 2500,
                thumbnail: require('../../assets/images/1.jpg'),
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
            },
            {
                id: 1002,
                name: 'Salade César',
                ingredients: ['Laitue romaine', 'Croûtons', 'Poulet grillé', 'Sauce César'],
                price: 1500,
                thumbnail: require('../../assets/images/aa.jpg'),
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
            },
            {
                id: 1003,
                name: 'Filet Mignon',
                ingredients: ['Filet de bœuf', 'Sauce aux champignons', 'Légumes grillés'],
                price: 2500,
                thumbnail: require('../../assets/images/1.jpg'),
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
            },
            {
                id: 1004,
                name: 'Salade César',
                ingredients: ['Laitue romaine', 'Croûtons', 'Poulet grillé', 'Sauce César'],
                price: 1500,
                thumbnail: require('../../assets/images/6.jpeg'),
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
            },
            {
                id: 1005,
                name: 'Filet Mignon',
                ingredients: ['Filet de bœuf', 'Sauce aux champignons', 'Légumes grillés'],
                price: 2500,
                thumbnail: require('../../assets/categories/a.jpg'),
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
            },
            {
                id: 1006,
                name: 'Salade César',
                ingredients: ['Laitue romaine', 'Croûtons', 'Poulet grillé', 'Sauce César'],
                price: 1500,
                thumbnail: require('../../assets/categories/baha.jpg'),
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
            },
 
            {
                id: 1007,
                name: 'Homard Thermidor',
                ingredients: ['Homard', 'Sauce Thermidor', 'Pommes de terre au four'],
                price: 4000,
                thumbnail: require('../../assets/categories/bai.jpg'),
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
            },
            {
                id: 1008,
                name: 'Crème Brûlée',
                ingredients: ['Crème', 'Sucre', 'Vanille'],
                price: 1850,
                thumbnail: require('../../assets/categories/bas.jpg'),
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
            },
            {
                id: 1009,
                name: 'Homard Thermidor',
                ingredients: ['Homard', 'Sauce Thermidor', 'Pommes de terre au four'],
                price: 4000,
                thumbnail: require('../../assets/categories/b.jpg'),
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
            },
            {
                id: 10000,
                name: 'Crème Brûlée',
                ingredients: ['Crème', 'Sucre', 'Vanille'],
                price: 1850,
                thumbnail: require('../../assets/categories/c.jpg'),
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem doloribus animi consequatur harum fuga, dicta, similique nulla nemo, aliquid reiciendis mollitia architecto!'
            },
            ],
        },
];

export default restaurantData
  