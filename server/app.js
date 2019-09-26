const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 4000

//require functions
const recipe = require('./utils/recipe')

//define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../client/public')

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.status("200").send({
        title: 'recipe',
        name: 'Henry'
    })
})

app.get('/recipe', (req, res) => {
    if(!req.query.text){
        return res.send({
            error: 'Text must be provided'
        })
    }  

    recipe(req.query.text, (error, recipe) => {
        if(error){
            return res.send({error})
        }

        return res.send({
            recipe
        })
    })
    
})

app.listen(port, () => {
    console.log('Server is on port ' + port)
})