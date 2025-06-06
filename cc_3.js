let customers = [{
    "name": "Joe R",
    "email":"joer@gmail.com",
    "purchases":["books", "pens", "notebook",],
    },
                 {
                  "name": "Mary B",
                     "email": "maryb@outlook.com", 
                     "purchases":["candles", "socks", "shoes"],
                 },
                 {
                     "name": "John E",
                     "email": "johne@yahoo.com", 
                    "purchases": ["tools", "laptop", "phone"],
                 },
                ]
                console.log(customers)
                console.log('---------------------------')

                customers.push({
                    "name": "Mark S",
                    "email": "marks@gmail.com",
                    "purchases": ["sponges", "soap", "water",]
                })
                console.log(customers)
                console.log('---------------------------')

                customers.shift(0)
                console.log(customers)
                console.log('---------------------------')

                customers[0].email = "maryb@earthlink.com"
                customers[2].purchases.push("eggs")
                console.log(customers)
                console.log('---------------------------')

                customers.forEach(function(customers){
                    console.log(`name: ${customers.name}`);
                    console.log(`email: ${customers.email}`);
                    console.log(`total purchases: ${customers.purchases.length}`);
                    console.log('-----------------------------')
                }
            );         