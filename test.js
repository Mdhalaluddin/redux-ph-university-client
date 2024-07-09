const adminPaths2 = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: "Admin_Dashboard",
        children: [
            {
                name: "Create Admin",
                path: "create-admin",
                element: "Create_Amin",
            },
            {
                name: "Create Faculty",
                path: "create-faculty",
                element: "Create_Faculty",
            },
            {
                name: "Create Student",
                path: "create-student",
                element: "Create_Student",
            },
        ],
    },
];


const newArr = adminPaths2.reduce((acc, item) => {

    if (item.path && item.name) {
        acc.push({
            kay: item.name,
            label: 'NAVLINGK'
        })
    }

    if (item.children) {
        acc.push({
            kay: item.name,
            label: item.name,
            children: item.children.map((child) => ({
                kay: child.name,
                label: 'NAVLINK'
            })
            )
        })
    }

    return acc;
}, [])

// const newArr = adminPaths2.reduce((acc, item) => {

//     if (item.path && item.element) {
//         acc.push({
//             path: item.path,
//             element: item.element
//         })
//     }

//     if (item.children) {
//         item.children.forEach((child) => {
//             acc.push({
//                 path: c.path,
//                 element: item.element
//             })
//         })
//     }

//     return acc;
// }, [])
console.log(newArr)