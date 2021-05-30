function jk(name,callback){
    console.log('hii'+''+name);
    callback();
}
function callme(){

    console.log('i am callback function');
}

jk('jay',callme);
