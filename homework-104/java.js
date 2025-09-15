const user = {
    Vladimir: {
        age: 30,
        weight: 78,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    }
}

console.log(user)
user.Vladimir.sayHello('Vladimir')

/* ================================================================================================== */



const users = [
    {
        name: 'Alex',
        age: 23,
        isAdmin: false
    },

    {
        name: 'Tom',
        age: 22,
        isAdmin: true
    },

    {
        name: 'Christina',
        age: 18,
        isAdmin: true
    },

    {
        name: 'John',
        age: 21,
        isAdmin: false
    },

    {
        name: 'Tj',
        age: 25,
        isAdmin: false
    }

]

let regularUsersCount = 0;

for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        regularUsersCount++;
    }
}

console.log("Количество простых пользователей:", regularUsersCount);


