module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      _id:Number,
      name:String,
      price:Number,
      imageUrl:String,
      quantity:Number,
      description:String
    }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  // reports is the name of the database to perform operations on
  const Product = mongoose.model("products", schema);
  return Product;
}
