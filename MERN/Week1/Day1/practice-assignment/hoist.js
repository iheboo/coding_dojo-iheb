// var hello = 'world';
// console.log(hello);                                   
//  hello = 'world';                                 



//  var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// var needle 
// function test(){
//     var needle = 'magnet';
//      needle = 'magnet';
//     console.log(needle);
// }
//  needle = 'haystack';
// test();

// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// var brendan 
// function print(){
//     var  brendan = 'only okay';
//      brendan = 'only okay';
//     console.log(brendan);
// }
// brendan = 'super cool';
// console.log(brendan);

// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);


// var brendan 
// function print(){
//     var brendan = 'only okay';
//     brendan = 'only okay';
//     console.log(brendan);
// }
//  brendan = 'super cool';
// console.log(brendan);

// var food 
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
//  food = 'chicken';
// console.log(food);
// eat();

// var food
// function  mean() {
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }
// console.log(food);
// mean();



// var genre 
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
//  genre = "disco";
//  console.log(genre);
// rewind();
// console.log(genre);


// var dojo 
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo);
// learn();
// console.log(dojo);


function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
    dojo.hiring = true;
    }
    else if(dojo.students <= 0){
    dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
makeDojo( students)








 
 