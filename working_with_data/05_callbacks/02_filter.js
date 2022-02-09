var list = [5,8,9,2,7,6,3,1,4];

function callback(item){
    // return true for included items
    return item > 5;
}

var filtered = list.filter(callback); //filter returns ID of elements for true
console.log(filtered);

//call this script with loader.html - in same directory