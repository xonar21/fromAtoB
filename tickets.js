//Билеты на событие 
// Задача 1

const table = [
    {
        id: 1,
        event_id: 003,
        event_id: '2021-08-21 13:00:00',
        ticket_adult_price: 700,
        ticket_adult_quantity: 1,
        ticket_kid_price: 450,
        ticket_kid_quantity: 0,
        ticket_preferential_price: 0,
        ticket_preferential_quantity: 0,
        ticket_group_price: 0,
        ticket_group_quantity: 0,
        barcode: 11111111,
        user_id: 00451,
        equal_price: 700,
        created: '2021-01-11 13:22:09'
    },
    {
        id: 2,
        event_id: 006,
        event_id: '2021-07-29 18:00:00',
        ticket_adult_price: 1000,
        ticket_adult_quantity: 0,
        ticket_kid_price: 800,
        ticket_kid_quantity: 2,
        ticket_preferential_price: 0,
        ticket_preferential_quantity: 0,
        ticket_group_price: 0,
        ticket_group_quantity: 0,
        barcode: 22222222,
        user_id: 00364,
        equal_price: 1600,
        created: '2021-01-12 16:62:08'
    },
    {
        id: 3,
        event_id: 003,
        event_id: '2021-08-15 17:00:00',
        ticket_adult_price: 700,
        ticket_adult_quantity: 4,
        ticket_kid_price: 450,
        ticket_kid_quantity: 3,
        ticket_preferential_price: 0,
        ticket_preferential_quantity: 0,
        ticket_group_price: 0,
        ticket_group_quantity: 0,
        barcode: 33333333,
        user_id: 00015,
        equal_price: 4150,
        created: '2021-01-13 10:08:45'
    },
    {
        id: 4,
        event_id: 007,
        event_id: '2022-09-15 16:00:00',
        ticket_adult_price: 800,
        ticket_adult_quantity: 2,
        ticket_kid_price: 400,
        ticket_kid_quantity: 1,
        ticket_preferential_price: 200,
        ticket_preferential_quantity: 2,
        ticket_group_price: 1200,
        ticket_group_quantity: 1,
        barcode: 44444444,
        user_id: 00020,
        equal_price: 3600,
        created: '2022-01-13 11:08:45'
    }
]

//  Теперь внутри таблицы появились столбцы
//  с информацией о цене и количесте оформленных 
//  групповых и льготных билетов, соответственно 
//  если событие не подразумевает данные билеты 
//  то их значения равны нулю.


// Задача 2


const table2 = [
    {
        id: 1,
        event_id: 003,
        event_id: '2021-08-21 13:00:00',
        ticket_adult_price: 700,
        ticket_adult_quantity: {
            quantity: 1,
            barcodes: [
                {
                    barcodeId: 1,
                    barcode: 12345678
                }
            ]
        },
        ticket_kid_price: 450,
        ticket_kid_quantity: {
            quantity: 0,
            barcode: 0
        },
        ticket_preferential_price: 0,
        ticket_preferential_quantity: {
            quantity: 0,
            barcode: 0
        },
        ticket_group_price: 0,
        ticket_group_quantity: {
            quantity: 0,
            barcode: 0
        },
        barcode: 11111111,
        user_id: 00451,
        equal_price: 700,
        created: '2021-01-11 13:22:09'
    },
    {
        id: 2,
        event_id: 006,
        event_id: '2021-07-29 18:00:00',
        ticket_adult_price: 1000,
        ticket_adult_quantity: {
            quantity: 0,
            barcode: 0
        },
        ticket_kid_price: 800,
        ticket_kid_quantity: {
            quantity: 2,
            barcodes: [
                {
                    barcodeId: 1,
                    barcode: 23456789
                },
                {
                    barcodeId: 2,
                    barcode: 34567890
                }
            ]
        },
        ticket_preferential_price: 0,
        ticket_preferential_quantity: {
            quantity: 0,
            barcode: 0
        },
        ticket_group_price: 0,
        ticket_group_quantity: {
            quantity: 0,
            barcode: 0
        },
        barcode: 22222222,
        user_id: 00364,
        equal_price: 1600,
        created: '2021-01-12 16:62:08'
    },
    {
        id: 3,
        event_id: 003,
        event_id: '2021-08-15 17:00:00',
        ticket_adult_price: 700,
        ticket_adult_quantity: {
            quantity: 4,
            barcodes: [
                {
                    barcodeId: 1,
                    barcode: 23456789
                },
                {
                    barcodeId: 2,
                    barcode: 34567890
                },
                {
                    barcodeId: 3,
                    barcode: 45678901
                },
                {
                    barcodeId: 4,
                    barcode: 56789012
                }
            ]
        },
        ticket_kid_price: 450,
        ticket_kid_quantity: {
            quantity: 3,
            barcodes: [
                {
                    barcodeId: 1,
                    barcode: 67890123
                },
                {
                    barcodeId: 2,
                    barcode: 78901234
                },
                {
                    barcodeId: 3,
                    barcode: 89012345
                }
            ]
        },
        ticket_preferential_price: 0,
        ticket_preferential_quantity: {
            quantity: 0,
            barcode: 0
        },
        ticket_group_price: 0,
        ticket_group_quantity: {
            quantity: 0,
            barcode: 0
        },
        barcode: 33333333,
        user_id: 00015,
        equal_price: 4150,
        created: '2021-01-13 10:08:45'
    },
    {
        id: 4,
        event_id: 007,
        event_id: '2022-09-15 16:00:00',
        ticket_adult_price: 800,
        ticket_adult_quantity: {
            quantity: 2,
            barcodes: [
                {
                    barcodeId: 1,
                    barcode: 90123456
                },
                {
                    barcodeId: 2,
                    barcode: 01234567
                }
            ]
        },
        ticket_kid_price: 400,
        ticket_kid_quantity: {
            quantity: 1,
            barcodes: [
                {
                    barcodeId: 1,
                    barcode: 11223344
                }
            ]
        },
        ticket_preferential_price: 200,
        ticket_preferential_quantity: {
            quantity: 2,
            barcodes: [
                {
                    barcodeId: 1,
                    barcode: 22334455
                },
                {
                    barcodeId: 2,
                    barcode: 33445566
                }
            ]
        },
        ticket_group_price: 1200,
        ticket_group_quantity: {
            quantity: 2,
            barcodes: [
                {
                    barcodeId: 1,
                    barcode: 44556677
                }
            ]
        },
        barcode: 44444444,
        user_id: 00020,
        equal_price: 3600,
        created: '2022-01-13 11:08:45'
    }
]


// Теперь в данной таблице в значениях 
// количества купленного типа билета есть 
// объект который несет в себе информацию 
// о количестве купленных билетов данного 
// типа их айди и массив с уникальным 
// баркодом каждого билета, 
// если билет не выбран то значение 
// соответсвенно равно нулю.

