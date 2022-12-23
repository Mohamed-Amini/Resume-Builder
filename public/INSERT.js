function InsertInfo() {
    // Contact 
    var nameV = document.getElementById("Form_Firstname").value;
    localStorage.setItem("Form_Firstname_Value", nameV);
    var lasnameV = document.getElementById("Form_Lastname").value;
    localStorage.setItem("Form_Lastname_Value", lasnameV);
    var emailV = document.getElementById("Form_Email").value;
    localStorage.setItem("Form_Email_Value", emailV);
    var ageV = document.getElementById("Form_Age").value;
    localStorage.setItem("Form_Age_Value", ageV);

    var addressV = document.getElementById("Form_Adress").value;
    localStorage.setItem("Form_Adress_Value", addressV);

    var cityV = document.getElementById("Form_City").value;
    localStorage.setItem("Form_City_Value", cityV);

    var countryV = document.getElementById("Form_Country").value;
    localStorage.setItem("Form_Country_Value", countryV);

    var codepostalV = document.getElementById("Form_Codepostal").value;
    localStorage.setItem("Form_Codepostal_Value", codepostalV);
    // Contact eend 


    // EDUCATION DATES
    var edDateV1 = document.getElementById("Form_Ed_Date1").value;
    localStorage.setItem("Form_Ed_Date1_Value", edDateV1);

    var edDateV2 = document.getElementById("Form_Ed_Date2").value;
    localStorage.setItem("Form_Ed_Date2_Value", edDateV2);
    // Education Dates end

    // Education Universities

    var edUniversityV1 = document.getElementById("Form_Ed_University1").value;
    localStorage.setItem("Form_Ed_University1_Value", edUniversityV1)
    var edUniversityV2 = document.getElementById("Form_Ed_University2").value;
    localStorage.setItem("Form_Ed_University2_Value", edUniversityV2)
    // Education Universities end

    // EDUCATION Diploma
    var edDiplomaV1 = document.getElementById("Form_Ed_Diploma1").value;
    localStorage.setItem("Form_Ed_Diploma1_Value", edDiplomaV1);
    var edDiplomaV2 = document.getElementById("Form_Ed_Diploma2").value;
    localStorage.setItem("Form_Ed_Diploma2_Value", edDiplomaV2);
    // EDUCATION Diplomas end

    // Education City 
    var edCityV1 = document.getElementById("Form_Ed_City1").value;
    localStorage.setItem("Form_Ed_City1_Value", edCityV1)
    var edCityV2 = document.getElementById("Form_Ed_City2").value;
    localStorage.setItem("Form_Ed_City2_Value", edCityV2)
    // EDUCATION Cities end 

    // SKills 
    var skillV1 = document.getElementById("Form_Skill1").value;
    localStorage.setItem("Form_Skill1_Value", skillV1);
    var skillV2 = document.getElementById("Form_Skill2").value;
    localStorage.setItem("Form_Skill2_Value", skillV2);
    var skillV3 = document.getElementById("Form_Skill3").value;
    localStorage.setItem("Form_Skill3_Value", skillV3);
    var skillV4 = document.getElementById("Form_Skill4").value;
    localStorage.setItem("Form_Skill4_Value", skillV4);
    // Skills end
    // Experiences 1






    var exp1DateV = document.getElementById("Form_Exp1_Date").value;
    localStorage.setItem("Experience1_Date_Value", exp1DateV);

    var exp1JobV = document.getElementById("Form_Exp1_Job").value;
    localStorage.setItem("Experience1_Job_Value", exp1JobV);

    var exp1Project1V = document.getElementById("Form_Exp1_Project1").value;
    localStorage.setItem("Experience1_Project1_Value", exp1Project1V);

    var exp1Project2V = document.getElementById("Form_Exp1_Project2").value;
    localStorage.setItem("Experience1_Project2_Value", exp1Project2V);
    // Experiences 2



    var exp2DateV = document.getElementById("Form_Exp2_Date").value;
    localStorage.setItem("Experience2_Date_Value", exp2DateV);

    var exp2JobV = document.getElementById("Form_Exp2_Job").value;
    localStorage.setItem("Experience2_Job_Value", exp2JobV);

    var exp2Project1V = document.getElementById("Form_Exp2_Project1").value;
    localStorage.setItem("Experience2_Project1_Value", exp2Project1V);

    var exp2Project2V = document.getElementById("Form_Exp2_Project2").value;
    localStorage.setItem("Experience2_Project2_Value", exp2Project2V);



    // Experiences  3

    var exp3DateV = document.getElementById("Form_Exp3_Date").value;
    localStorage.setItem("Experience3_Date_Value", exp3DateV);

    var exp3JobV = document.getElementById("Form_Exp3_Job").value;
    localStorage.setItem("Experience3_Job_Value", exp3JobV);

    var exp3Project1V = document.getElementById("Form_Exp3_Project1").value;
    localStorage.setItem("Experience3_Project1_Value", exp3Project1V);

    var exp3Project2V = document.getElementById("Form_Exp3_Project2").value;
    localStorage.setItem("Experience3_Project2_Value", exp3Project2V);





    // Experiences End



    // About me 
    var aboutMeV = document.getElementById("Form_Aboutme").value;
    localStorage.setItem("Form_AboutMe_Value", aboutMeV);
    // Abour me end 

}
