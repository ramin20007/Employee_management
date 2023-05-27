// <!-- -----------------------Nav_BAR_HAMBURGER------------------- -->

const toggleBtn = document.querySelector('.hamburger')
const toggleBtnIcon = document.querySelector('.hamburger')
const dropDownMenu = document.querySelector('.drop_down')
const bigText = document.querySelector('.text_middle')

toggleBtn.onclick = function(){
    dropDownMenu.classList.toggle('open');

}

// *<!------------------PRE LOADER----------------------------------------> * //

var loader = document.querySelector('.pre_loader');

window.addEventListener('load', function(){
    loader.style.display= 'none';
})


// *<!------------------FORM SUBMIT----------------------------------------> * //


// ----ADD----//


function AddData(){
    
    var nameF = document.querySelector('.name_F_input').value; 
    var nameL = document.querySelector('.name_L_input').value;
    var nameM = document.querySelector('.name_M_input').value;
    const nameS = " "

    if ( nameM != null){
    var nameFML = nameF + nameS + nameM + nameS + nameL;
    }
    else{
        var nameFML = nameF + nameS + nameL;
    }

    var positionLabel = document.querySelector('.position_label_input').value;
    var aboutLabel = document.querySelector('.about_label_input').value;
    var joiningDate= document.querySelector('.joining_date_input').value;
    
    if (nameF == "" && nameL == "" && positionLabel == "" && aboutLabel == "" && joiningDate == ""){
    
        alert("Please enter the following details")
    }
    else{
        
        if (nameF == ""){
            alert ("Please enter first name")
        }
        
        else if (nameL == ""){
            alert ("Please enter Last name")
        }
        
        else if (positionLabel == ""){
            alert ("Please enter Your Position ")
        }
        
        else if (aboutLabel == ""){
            alert ("Please Tell about Yourself")
        }
        
        else if (joiningDate == ""){
            alert ("Please enter Joining date")
        }
        
        else{
            
            var employee_list; 
            
            if (localStorage.getItem("employee_list") == null) {
                employee_list = [];
            }
            else{
                employee_list = JSON.parse(localStorage.getItem("employee_list"));
            }
        
            employee_list.push({
                nameFML : nameFML,
                positionLabel : positionLabel,
                aboutLabel : aboutLabel,
                joiningDate : joiningDate,
            })
        
            localStorage.setItem("employee_list",JSON.stringify(employee_list));

            document.querySelector('.name_F_input').value = ""; 
            document.querySelector('.name_L_input').value = "";
            document.querySelector('.name_M_input').value = "";
            document.querySelector('.position_label_input').value = "";
            document.querySelector('.about_label_input').value = "";
            document.querySelector('.joining_date_input').value = "";
            
        
            window.location.href = "EPL.html";
            window.location.replace("EPL.html");
        }
    }
    

}



