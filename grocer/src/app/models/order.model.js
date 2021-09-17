module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      _id:Number,
      userId:Number,
      date:Date,
      status:String,
      email:String,
      orderItems:Array
    }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Order = mongoose.model("orders", schema);
  return Order;
}
