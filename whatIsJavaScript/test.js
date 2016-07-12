/**
 * Created by bld_aalarcon on 12/07/16.
 */

/* Function declaration
 ====================
 */
function SayHi(a,b,c){
    var person = {name: a, age: b, profession: c};
    return 'My name is ' + person.name + ' and am ' + person.age + ' years old. I am a ' + person.profession + '.';
}

/* Object definition
 =================
 */
var introducingMyself = document.querySelector('h3');
introducingMyself.textContent = SayHi('Gabriel', 33, 'programmer');