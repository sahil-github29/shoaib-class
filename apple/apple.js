var aple = JSON.parse(
  {[{"shopAndLearn":"Mac",
"AppleStore": "findAStore",
"forEducation": "Apple_and_Education",
"forBusiness": "Apple_and_Business",
"Account": "Manage your_Apple_ID",
"AppleValues": "Accessibility",
"AboutApple": "Apple_info"
},
{"shopAndLearn": "ipad",
"AppleStore": "Genius_Bar",
"forEducation": "Shop_for_Collage",
"forBusiness": "Shop_for_Buisness",
"Account": "Apple_Store_Account",
"AppleValues": "Education",
"AboutApple": "Newsroom"

},
{"shopAndLearn": "iPhone",
"AppleStore": "Workshops and Learning",
"Account": "iCloud_com",
"AppleValues": "Environment",
"AboutApple": "Job_Opportunities"
},
{" shopAndLearn": "Watch",
"AppleStore": "youth_programs",
"AppleValues": "Inclussion_and_Diversity",
"AboutApple": "press_info"
},
{"shopAndLearn": "TV",
"AppleStore": "Apple_store_app",
"AppleValues": "privacy",
"AboutApple": "investors"

},
{"shopAndLearn": "itunes",
"AppleStore": "Refurbished_And_Clerance",
"AppleValues": "Supplier_Responsibility",
"AboutApple": "Events"

},
{"shopAndLearn": "ipod",
"AppleStore": "Financing",
"AboutApple": "COntact_Apple"
},
{"shopAndLearn": "Accessories",
"AppleStore": "Reuse_and_Recycling"
},
{"shopAndLearn": "Gift_Cards",
"AppleStore": "Shopping_help"
},
{"shopAndLearn": "music",
"AppleStore": "Order_Status"
}
]});


var table = "<table border='1'>";

table += "<tr><td>shopAndLearn</td><td>AppleStore</td><td>forEducation</td><td>forBusiness</td><td>Account</td><td>AppleValues</td><td>AboutApple</td></tr>"

for (table1 in ) {
    table += "<tr>";
    table += "<td>" + aple[table1]["shopAndLearn"] + "</td>";
    table += "<td>" + aple[table1]["AppleStore"] + "</td>";
    table += "<td>" + aple[table1]["forEducation"] + "</td>";
    table += "<td>" + aple[table1]["forBusiness"] + "</td>";
    table += "<td>" + aple[table1]["Account"] + "</td>";
    table += "<td>" + aple[table1]["AppleValues"] + "</td>"
    table += "<td>" + aple[table1]["AboutApple"] + "</td></tr>";

}
table += "</table>";

var RefDiv = document.getElementById('mytable')
    var output = ""
    var tableOutput = document.getElementById("mytable").InnerHTML = table;
