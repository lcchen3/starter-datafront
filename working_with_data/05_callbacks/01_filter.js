var list = [5,8,9,2,7,6,3,1,4];

// could pass this function instead of "callback" parameter in filter
function callback(list){
    // to be done, user provides function that acts on list
    var newlist = [];
    for(var i=0;i<list.length; i++){
        if(list[i]>5) newlist.push(list[i]); //put into array
    }
    return newlist;
}

function filter(list, callback){
    return callback(list); 
}
 
var filtered = filter(list, callback);
console.log(filtered);