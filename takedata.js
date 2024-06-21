conn.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else {
        console.log("C O N E C T E D    MYSQL");
    }
});
//======

//++++++
let query="SELECT * FROM persons"
let persons
conn.query(query,  (err, result, field)=> {   
    persons=result    
    return persons
})

console.log('persons = ',persons)

// //////////////////////////////////////////

function allSpec(chatId) {
    let i, len
    for (i = 0, len = persons.length; i < len;++i) {
        const personButton = {
            reply_markup: JSON.stringify({
                inline_keyboard: [
                    [{text:'информация',callback_data:'specialist_'+persons[i].id},{text:'Запись',callback_data: 'writeToCalenda'}]
                    //[{text: persons[i].speciality+ ':' + persons[i].l_name+'.'+ persons[i].f_name[0]+'.'+ persons[i].s_name[0], callback_data: 'specialist'+persons[i].id}],
                ]
            })
        }
        bot.sendMessage(chatId, persons[i].l_name+' '+ persons[i].f_name+' '+ persons[i].s_name , personButton)
    }
}