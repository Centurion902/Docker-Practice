const request = require('request')
const recipe = (text, callback) => {
    const url = 'https://api.spoonacular.com/recipes/search?apiKey=922c324e8350480ca3da8aa943805670&query='+text
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to drink services.', undefined )
        }else if(!body.results){
            callback('Unable to find food.', undefined)
        }else{
            callback(undefined, {
                "name": body.results[0].title,
                "readyInMinutes": body.results[0].readyInMinutes,
                servings: body.results[0].servings
            })
        }   
    })
}

module.exports = recipe