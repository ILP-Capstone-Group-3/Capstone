module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      _id:Number, // Auto-generated user ID, this will be the username
      firstname:String,
      lastname:String,
      email:String,
      dob:String,
      phone:String,
      address:String,
      password:String,
      funds:Number,
      attemptedLogins:Number,
      isLocked:Boolean
    },
    { timestamps: false }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  // user_accounts is the name of the database to perform operations on
  const User = mongoose.model("user_accounts", schema);
  return User;
}
