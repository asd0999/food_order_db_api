orders = [{
        user_id: "jordan111",
        delivery: true,
        order: [{
            item_id: "5fb599967dc6502a003e2f29",
            quantity: 2,
        }, ],
        createdAt: 2,
    },

    {
        user_id: "bob222",
        delivery: true,
        order: [{
                item_id: "bb",
                quantity: 2,
            },
            {
                item_id: "bd",
                quantity: 1,
            },
        ],
        createdAt: 1,
    },

    {
        user_id: "sara123",
        delivery: false,
        order: [{
                item_id: "ce",
                quantity: 1,
            },
            {
                item_id: "ca",
                quantity: 3,
            },
            {
                item_id: "cb",
                quantity: 7,
            },
        ],
        createdAt: 3,
    },

    {
        user_id: "sara123",
        delivery: true,
        order: [{
                item_id: "5fb599967dc6502a003e2f29",
                quantity: 1,
            },
            {
                item_id: "5fb5bdef55b25233f9b3b97b",
                quantity: 3,
            },
        ],
        createdAt: 3,
    },

    {
        user_id: "sara123",
        delivery: true,
        order: [{
            item_id: "ad",
            quantity: 1,
        }, ],
        createdAt: 3,
    },
];

module.exports = orders;