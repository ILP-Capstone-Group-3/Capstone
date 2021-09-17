module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        _id:Number,
        userId:Number,
        email:Number,
        title:String,
        description:String,
        status:String,
        messages:Array
      },
      { timestamps: false }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    // user_accounts is the name of the database to perform operations on
    const Ticket = mongoose.model("tickets", schema);
    return Ticket;
  }
  
