const handleError = (error,res) =>{
    console.log(error)
    res.json({
        error:error.message
    })
}

module.exports = handleError