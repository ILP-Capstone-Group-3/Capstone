module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        _id:Number,
        employeeId:Number,
        product:String,
        quantity:Number,
        status:String
      },
      { timestamps: false }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    // reports is the name of the database to perform operations on
    const Report = mongoose.model("requests", schema);
    return Report;
  }