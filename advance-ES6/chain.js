const  users = [{id:1 , name:'apple',phone: 03445}]
console.log(users[0].name);

const data ={
    count : 5000,
    data: [
        {id: 1, name: 'abul', job: 'leader'},
        {id: 2, name: 'babul', job: 'member'}
    ]
}
console.log(data.data[0].job);

const user ={
    id: 550,
    name:'Reahana',
    skill:{
        frotend:{
            css: 'boostrap',
            js:'React'
        },
        database: 'mysql',
        backend: 'nodejs'
    }
}

const skillCss =user.skill.frotend.css;
console.log(skillCss);