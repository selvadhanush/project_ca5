const mongoose=require('mongoose')

const docterSchema = new mongoose.Schema([
    {
        "name":"Dr.John Doe",
        "specialization":"Cardiologist"
    },
    {
        "name":"Dr.Emily Smith",
        "specialization":"Dermatologist"

    }
]);


module.export=mongoose.model('docter',docterSchema)