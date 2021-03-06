const mongoose =  require('mongoose');
const schema  = mongoose.Schema;

const serviceSchema  = new schema({
    _id:{type:String,required:true},
    type:{type:schema.Types.Mixed}
});

module.exports = mongoose.model("service",serviceSchema);

module.exports.saveService = (service,callback)=>{
    service.save(callback);
};