const mongoose=require('mongoose')

const patientSchema = new mongoose.Schema([
    {
        "name":"Alice Brown",
        "age":30,
        "ailment":"Heart Disease",
        "doctor":null
    },
    {
        "name":"Bob White",
        "age":25,
        "ailment":"Skin Allergy",
        "doctor":null
    }
]);

module.export=mongoose.model('patient',patientSchema)