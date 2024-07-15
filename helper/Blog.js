const {v4 : uuidv4} = require('uuid')



let Blog = [
    {id : 1, title : "Blog 1", content : "Content 1" , account : "1"},
    {id : 2, title : "Blog 2", content : "Content 2" , account : "2"},
    {id : 3, title : "Blog 3", content : "Content 3" , account : "3"},
    {id : 4, title : "Blog 4", content : "Content 4" , account : "4"},
]


function extractNumbersFromUUID(uuid) {
    return uuid.replace(/\D/g, '');
  }


const getdata = (req , res ) => {
    res.json(Blog)
}


const getdataid = (req , res ) => {
    const id = req.params.id
    const data = Blog.findIndex(data => data.id == id)
    return res.json(Blog[data])
}


const postdata = (req , res ) => {
    const data = {
        id : extractNumbersFromUUID(uuidv4()),
        title : req.body.title,
        content : req.body.content ,
        account : req.decode.id
    }
    Blog.push(data)
    return res.json(Blog)
}


const myblog = (req , res ) => {
    const id = req.decode.id
    const data = Blog.filter(data => data.account == id)
    return res.json(data)
}

const blogdelete = (req , res ) => {
    const id = req.params.id
    const data = Blog.findIndex(data => data.id == id)
    Blog.splice(data , 1)
    return res.json(Blog)
}


const editblog = (req , res ) => {
    const id = req.params.id
    const data = Blog.findIndex(data => data.id == id)
    Blog[data] = {
        id : Blog[data].id,
        title : req.body.title,
        content : req.body.content ,
        account : Blog[data].account
    }
    return res.json(Blog)
}

module.exports = {
    getdata ,
    getdataid ,
    postdata ,
    myblog ,
    blogdelete ,
    editblog
}