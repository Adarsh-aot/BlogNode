const express = require('express');
const { getdata, getdataid, postdata, myblog, blogdelete, editblog } = require('../helper/Blog');
const { jwt_token_validatotion } = require('../middleware/validator');
const app = express();
const router = express.Router();



router.get('/MyBlog' , jwt_token_validatotion , myblog )
router.get('/' , getdata )
router.get('/:id' , getdataid )
router.post('/' , jwt_token_validatotion , postdata )
router.delete('/:id' , jwt_token_validatotion , blogdelete )
router.put('/:id' , jwt_token_validatotion , editblog )





module.exports = router