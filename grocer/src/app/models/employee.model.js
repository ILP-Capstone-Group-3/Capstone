module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      _id:Number, // Auto-generated employee ID, this will be the username
      firstname:String,
      lastname:String,
      email:String,
      password:String,
      hasDefaultPass:Boolean
    },
    { timestamps: false }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  // user_accounts is the name of the database to perform operations on
  const Employee = mongoose.model("employee_accounts", schema);
  return Employee;
}
