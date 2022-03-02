const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require ('../models/SignUpModels')

router.post('/signup',(request,response)=>{
    const signedUpUser = new signUpTemplateCopy({

        FirstName:request.body.FirstName,
        LastName:request.body.LastName,
        email:request.body.email,
        DoB:request.body.DoB,
       
        
    })
    signedUpUser.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})

module.exports = router