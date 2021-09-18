let updatedInfo = {};
let updatedInfoCounter = 0;

if ((newProfileStuff.password!="" || newProfileStuff.password!=null) && newProfileValue.password!=newProfileValue.repassword) {
    updatedInfo[password] = newProfileStuff.password;
}

if(newProfileStuff.address!="" || newProfileStuff.address!=null) updatedInfo[address]=newProfileStuff.address;

if(newProfileStuff.phone!="" || newProfileStuff.phone!=null) updatedInfo[phone] = newProfileStuff.phone;

if(newProfileStuff.email!="" || newProfileStuff.email!=null) updatedInfo[email] = newProfileStuff.email;

userModel.findOneAndUpdate({_id:userID},updatedInfo,(err,result)=>{
    if(err)  this.editResponse="Update failed.";
    else  this.editResponse="Profile updated!";
})




//=====================================================================================================================================

orderModel.findOne({userName:"User's _id"},(err,doc)=>{
    if(err) console.log("Failed to get orders");
    else {
        let tableHead = "<table><tr><th>Order ID</th><th>Order Status</th></tr>";
        let tableRowStart = "<tr><td>";
        let tableRowMid = "</td><td>";
        let tableRowEnd = "</td></tr>";
        let tableEnd = "</table>"
        let tableContents = tableHead;
        let rowString = "";

        for(let i in doc){
            rowString = tableRowStart+doc[i]._userId+tableRowMid+doc[i].date+tableRowMid+doc[i].status+tableRowMid+doc[i].orderItems+tableRowEnd;
            tableContents+=rowString;
        }
        tableContents+=tableEnd

        this.orderTable=tableContents;
    }
})


//=====================================================================================================================================

userModel.findOne({_id:userID},(err,doc)=>{
    if(err) console.log("Failed to get original funds.");
    else{
        this.currentFunds="$"+doc.funds.toString();
    }
})

//=====================================================================================================================================

userModel.findOne({_id:userID},(err,doc)=>{
    if(err) console.log("Failed to get original funds.");
    else{
        let new_total = doc.funds+additionalFunds;
        this.currentFunds="$"+new_total.toString();
        userMode.findOneAndUpdate({_id:userID},{funds:new_total},(err,doc)=>{
            if(err) console.log("Failed to update funds.");
        })
    }
})

//=====================================================================================================================================

employeeModel.exist({userName: empUserName},(err,doc)=>{
    if(err) console.log(err);
    else{
        if(doc){
            employeeModel.find({userName: empUserName},(err,doc)=>{
                if(err) console.log(err);
                else{
                    if(doc.password==password){
                        //login
                    }
                    else{
                        //login failed
                    }
                }
            })
        }
        else{
            //login failed
        }
    }
})