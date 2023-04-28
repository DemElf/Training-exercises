const friends = [
    {name: 'Mango', online: false},
    {name: 'Kiwi', online: true},
    {name: 'Poly', online: true},
    {name: 'Ajax', online: false},
];

console.table(friends);

// ============ ЗАДАЧА: З МАСИВА ДРУЗІВ ОТРИМАТИ ІМЕНА ДРУЗІВ ============ //

// const getAllNames = function(allFriends) {
//     const names = [];

//     for (const friend of allFriends) {
//         console.log(friend.name);

//         names.push(friend.name);
//     }
//     return names;
// }
// console.log(getAllNames(friends));

// ============ ЗАДАЧА: ОТРИМАТИ ВСІХ ДРУЗІВ ОНЛАЙН ============ //
// const getOnlineFriends = function(allFriends) {
//     const onlineFriends = [];

//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.online);
//         if (friend.online) {
//             onlineFriends.push(friend)
//         }
//     }
//     return onlineFriends;
// }
// console.log(getOnlineFriends(friends));

// ============ ЗАДАЧА: ОТРИМАТИ ВСІХ ДРУЗІВ ОФЛАЙН ============ //
// const getOflineFriends = function(allFriends) {
//     const oflineFriends = [];

//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.online);
//         if (!friend.online) { 
//             oflineFriends.push(friend)
//         }
//     }
//     return oflineFriends;
// }
// console.log(getOflineFriends(friends));

// ============ ЗАДАЧА: ВИВЕСТИ ОНЛАЙН ДРУЗІВ В ОДИН МАСИВ, ОФЛАЙН В ДРУГИЙ ============ //

// const getFriendByOnlineStatus = function(allFriends) {
//     const friendsByStatus = {
//         online: [],
//         offline: []
//     }
//     for (const friend of allFriends) {
//         if (friend.online) {
//             friendsByStatus.online.push(friend)
//         } else {
//             friendsByStatus.offline.push(friend)
//         }

//     }
//     return friendsByStatus;
// }
// console.log(getFriendByOnlineStatus(friends));

// ============ як дізнатись кількість властивостей воб'єкті? ============ //

const x = {
    a: 1,
    b: 5,
    c: -5,
    d: 21
}

console.log(Object.keys(x).length);