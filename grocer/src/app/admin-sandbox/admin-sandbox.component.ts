import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { ReportService } from '../services/reports.service';
import { AdminService } from '../admin-sandbox/admin.service';
import { EmployeeRequests } from 'src/app/models/EmployeeRequests.model';

@Component({
  selector: 'app-admin-sandbox',
  templateUrl: './admin-sandbox.component.html',
  styleUrls: ['./admin-sandbox.component.css']
})
export class AdminSandboxComponent implements OnInit {
  // List of generated reports
  reportArray:Array<any> = [];
  name:any;
  price:any;
  quantity:any;
  description:any;
  deletemessage:any;
  addproductmessage:any;
  imageUrl:any;
  name1:any;
  productMessage:any;
  quantityMessage:any;
  employeeRequests: Array<EmployeeRequests> = [];
  updatedRequests: Array<EmployeeRequests> = [];

  constructor(private employeeService:EmployeeService,
              private reportService:ReportService,
              private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.retrieveAllEmployeeRequests().subscribe(result => {
      this.employeeRequests = result;
      console.log(this.employeeRequests)
    })
  }

  // Gets a random number from 100,000 to 999,999
  // TODO: there is a small chance of duplicate ids, find a way to prevent it?
  genRandomId(): number {
    return Math.round(Math.random() * (999999 - 100000) + 100000);
  }

  // Called when the user hits the add employee button
  addEmployee(addEmployeeRef:NgForm): void {
    let employeeForm = addEmployeeRef.value;

    let empId = this.genRandomId();
    let empAccount = {_id:empId, firstname:employeeForm.firstname, lastname:employeeForm.lastname, email:employeeForm.email, password:employeeForm.password, hasDefaultPass:true};

    // Register the employee in the database
    this.employeeService.registerEmployee(empAccount)
    .subscribe(
      response=> {
        console.log(response);
        alert("Employee created successfully! The ID is: " + empId);
      },
      error=> {
        console.log(error);
      });
  }

  // Called when the admin hits the delete employee button
  deleteEmployee(delEmployeeRef:NgForm): void {
    let employeeForm = delEmployeeRef.value;

    // Attempt to delete the employee account
    this.employeeService.deleteEmployee(employeeForm.empid)
      .subscribe(
        response=> { // Succeed
          console.log(response);
          alert("Employee deleted successfully!");
        },
        error=> { // Fail
          console.log(error);
          alert("Error: This employee does not exist.");
        });
  }

  // Grabs a list of reports based on a defined list
  generateReports(reportRef:NgForm): void {
    let reportForm = reportRef.value;

    // Sort by time only
    if (reportForm.userId === "" && reportForm.productId === "") {
      console.log("Entered here");
      this.reportService.getReportsByTime(reportForm.reporttype)
      .subscribe(data=> {
        console.log(data);
        // Clear the array of previous results
        this.reportArray = [];
        // Store the retrieved items from the database
        data.forEach(element=> {
          this.reportArray.push(element);
        });

        alert("Found a total of " + this.reportArray.length + " reports.");
      },
      error=> {
        console.log(error);
        alert("Found no reports.");
        return;
      });
    }


    // Sort by user
    else if (reportForm.userId !== "" && reportForm.productId === "") {
      console.log("Searching by user");
      this.reportService.getReportsByUser(reportForm.reporttype, reportForm.userId)
      .subscribe(data=> {
        console.log(data);
        // Clear the array of previous results
        this.reportArray = [];
        // Store the retrieved items from the database
        data.forEach(element=> {
          this.reportArray.push(element);
        });

        alert("Found a total of " + this.reportArray.length + " reports.");
      },
      error=> {
        console.log(error);
        alert("Found no reports.");
        return;
      });
    }



    // Sort by product
    else if (reportForm.userId === "" && reportForm.productId !== "") {
      this.reportService.getReportsByProduct(reportForm.reporttype, reportForm.productId)
      .subscribe(data=> {
        console.log(data);
        // Clear the array of previous results
        this.reportArray = [];
        // Store the retrieved items from the database
        data.forEach(element=> {
          this.reportArray.push(element);
        });

        alert("Found a total of " + this.reportArray.length + " reports.");
      },
      error=> {
        console.log(error);
        alert("Found no reports.");
        return;
      });
    }



    // Sort by all
    else {
      this.reportService.getReportsByAll(reportForm.reporttype, reportForm.userId, reportForm.productId)
      .subscribe(data=> {
        console.log(data);
        // Clear the array of previous results
        this.reportArray = [];
        // Store the retrieved items from the database
        data.forEach(element=> {
          this.reportArray.push(element);
        });

        alert("Found a total of " + this.reportArray.length + " reports.");
      },
      error=> {
        console.log(error);
        alert("Found no reports.");
        return;
      });
    }

    
    
  }

  //Add Products

  addProduct(productRef: any) {
    console.log(productRef);
    this.adminService.storeProductDetailsInfo(productRef).subscribe(result => this.addproductmessage = result,error => this.addproductmessage = error);
    
    this.name = "";
    this.price = "";
    this.quantity = "";
    this.description="";
    this.imageUrl="";
  }

  // Delete Product

  deleteProduct(deleteRef: any) {
    this.adminService.deleteProductByName(deleteRef.name).subscribe((result: string) => {
      this.deletemessage = result;
      })
   this.name = "";
    }

  // Update Product

  updateProduct(updateRef: any) {
    console.log("update in sandbox",updateRef);
     this.adminService.updateProductPrice(updateRef).subscribe((result:string)=> {
       this.productMessage=result;
      })
     this.name = "";
     this.price = "";
     
     
   }
   updateQuantity(quantityRef: any){
     console.log(quantityRef)
    this.adminService.updateProductQuantity(quantityRef).subscribe((result:string)=> {
       this.quantityMessage=result;
      })
      this.name1= "";
     this.quantity = "";
     
     
   }


   // view request 



   changeRequestStatus(status: any, employeeRequests: EmployeeRequests) {
    // console.log(status.target.value);
    employeeRequests.status = status.target.value;
    this.updatedRequests.push(employeeRequests);
  }

  updateRequests() {
    this.adminService.updateRequests(this.updatedRequests).subscribe((result) => {
      console.log(result.message);
      this.employeeRequests.forEach((employeeRequest: EmployeeRequests) => {
        result.employeeRequests.forEach((updatedRequest: EmployeeRequests) => {
          if (employeeRequest.requestid == updatedRequest.requestid)
            employeeRequest = updatedRequest;
        });
      })
      this.updatedRequests.splice(0, this.updatedRequests.length);
    });
  }

}