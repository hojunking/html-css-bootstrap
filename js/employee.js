//employee.js
//json=> obj : JSON.parse()
let json=`[{"id":1,"first_name":"Steward","last_name":"Battelle","email":"sbattelle0@cnbc.com","gender":"Agender"},
{"id":2,"first_name":"Timotheus","last_name":"Whiten","email":"twhiten1@flavors.me","gender":"Bigender"},
{"id":3,"first_name":"Terrie","last_name":"Charlotte","email":"tcharlotte2@seesaa.net","gender":"Female"},
{"id":4,"first_name":"Melitta","last_name":"Jerson","email":"mjerson3@bigcartel.com","gender":"Bigender"},
{"id":5,"first_name":"Antoni","last_name":"Ludovico","email":"aludovico4@cnet.com","gender":"Polygender"},
{"id":6,"first_name":"Colene","last_name":"Agutter","email":"cagutter5@weibo.com","gender":"Genderqueer"},
{"id":7,"first_name":"Jonis","last_name":"Biggadike","email":"jbiggadike6@java.com","gender":"Genderqueer"},
{"id":8,"first_name":"Maxy","last_name":"Presser","email":"mpresser7@edublogs.org","gender":"Genderqueer"},
{"id":9,"first_name":"Maggy","last_name":"Brychan","email":"mbrychan8@webeden.co.uk","gender":"Polygender"},
{"id":10,"first_name":"Barnard","last_name":"Pugsley","email":"bpugsley9@earthlink.net","gender":"Genderfluid"}]`

let obj = JSON.parse(json);
console.log(obj);

for(let row of obj){
    console.log(row);
}