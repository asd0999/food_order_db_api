orders = [
    {
        user_id: 'jordan111',
        email: 'jordan.abu23@gmail.com',
        phoneNumber: 6052169075,
        delivery: true,
        order: [
            { 
            item_id: 'aa', 
            quantity: 2,
            }
        ],
        createdAt: 2
    },  


    {
        user_id: 'Bob222',
        email: 'Bob123@gmail.com',
        phoneNumber: 4567890123,
        delivery: true,
        order: [
            { 
            item_id: 'bb', 
            quantity: 2,
            },
            { 
            item_id: 'bd', 
            quantity: 1,
            }
        ],
        createdAt: 1
    },


    {
        user_id: 'sara123',
        email: 'sara456@gmail.com',
        phoneNumber: 1233214567,
        delivery: false,
        order: [
            { 
            item_id: 'ce', 
            quantity: 1,
            },
            { 
            item_id: 'ca', 
            quantity: 3,
            },
            { 
            item_id: 'cb', 
            quantity: 7,
            }
        ],
        createdAt: 3
    },
]

module.exports = orders