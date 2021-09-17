module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        _id:Number, // Incrementing the id by 1
        userid:Number,
        product:String,
        day:Number,
        weekDay:Number,
        month:Number,
        year:Number
      },
      { timestamps: false }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    // reports is the name of the database to perform operations on
    const Report = mongoose.model("reports", schema);
    return Report;
  }
  