const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json())
app.use(cors())
app.use('/Blog' , require('./router/blog_route'));
app.use('/register' , require('./router/register_route'));

app.listen(port ,
     () => console.log(`Server is running at port ${port}`)
)