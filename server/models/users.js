const data = [{name: 'Christopher', age: 25},{name: 'Biden', age: 78}]
async function getAll(){
    //throw { status: 501, message: "This is a fake error" }
    //await Promise.resolve()
    console.log("Called Get All")
    return data;
}

function add(name, age){
    data.push({name, age});
}

module.exports = { getAll, add, search: async q => data.filter(x=> x.name == q) }