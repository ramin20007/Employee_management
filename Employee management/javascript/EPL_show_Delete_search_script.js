// *<!------------------FORM SUBMIT----------------------------------------> * //

// ----SHOW----//
showData()

function showData(){
    
    var data = localStorage.getItem("employee_list")
    var employee =  JSON.parse(data)
    
    document.querySelector(".table-container").innerHTML=createTable(employee)

}

function createTable(employee){
    return'<table id="crud_table"><thead><tr><th>#</th><th>Full Name</th><th>Position</th><th>about</th><th>date of joinig</th><th>Action</th></tr></thead><tbody>'
    + createTableData(employee)+
    '</tbody></table>'
}

function createTableData(employee){
    var html = ''
    for (i=0 ; i < employee.length ;i++){

        html += '<tr><td>'+ String((parseInt(i)+1)) +'</td><td>'+ employee[i].nameFML +'</td><td>'+employee[i].positionLabel +'</td><td>'+ employee[i].aboutLabel +'</td><td>'+ employee[i].joiningDate +'</td><td><button onclick = "deleteData('+i+')" class= "btn">Delete</button></td></tr>'

    }

    return html
}

// ----Delete----//

function deleteData(index){
    if(confirm('Are you sure you want to Delete')){
        
        var data = localStorage.getItem("employee_list");
        var employee =  JSON.parse(data);
        
        employee.splice(index,1);
        
        localStorage.setItem("employee_list",JSON.stringify(employee));

        location.reload();
    }
}

// /* <!-- ---------------------PAGINTAION ----------------------------     --> */ //
function pagination(){
    
var my_table = document.querySelector('#crud_table tbody');

var page_U1 = document.querySelector(".pagination");

var my_table_row = my_table.getElementsByTagName('tr'); 


var table_row_list = []; 
var index = 1;
var item_per_page = 5;

// /* <!-- ------To get limited page ------     --> */ //

for(var i = 0 ; i<my_table_row.length; i++){
    table_row_list.push(my_table_row[i])
}

function displayPage(limit){
    my_table.innerHTML="";
    for (var i = 0;i<limit;i++){
        my_table.appendChild(table_row_list[i]);
    }
}
displayPage(item_per_page)
// /* <!-- ------To set number of pages ------     --> */ //
function numOfPage(limit){
    var num_of_tr = table_row_list.length;
    if(num_of_tr<= limit){
        page_U1.style.display = "none";
    }
    else{

        page_U1.style.display = "flex";
        var num_of_page = Math.ceil(num_of_tr/limit);
        for(i=1; i<=num_of_page; i++){
            var list_item = document.createElement('li'); 
            list_item.className = 'list';
            var a =document.createElement('a'); 
            a.href = '#';
            a.innerText = i;
            a.setAttribute('data-page', i);
            list_item .appendChild(a);
            page_U1.insertBefore(list_item,page_U1.querySelector('.next_page'));
        }
    }    
}

numOfPage(item_per_page)
var pagelink  = page_U1.querySelectorAll('a');
var lastPage = pagelink.length-2;


function pageRunner(page ,items , lastPage , active){
    for (button of page){
        button.onclick = e=>{
            var page_num = e.target.getAttribute("data-page");
            var page_mover = e.target.getAttribute("id");
            if (page_num != null){
                index = page_num;
				}
                    
            else{
						
                    if(page_mover === "next"){
                    	index++;
                    
                        if(index >= lastPage){
                    		index = lastPage;
                        }
                    }

                    else{
                    
                        index--;
                        if(index <= 1){
                    		index = 1;
                    	}
                    }
				}
					pageMaker(index, items, active);
				}
			}

		}





var pageList = page_U1.querySelectorAll('.list'); 
console.log(pageList)
pageList[0].classList.add("active");
pageRunner(pagelink, item_per_page, lastPage, pageList);


function pageMaker(index, item_per_page, activePage){
    var start = item_per_page * index;
    var end  = start + item_per_page;
    var current_page =  table_row_list.slice((start - item_per_page), (end-item_per_page));
    
    my_table.innerHTML = "";
    
    for(var i=0; i<current_page.length; i++){
        var item = current_page[i];					
        my_table.appendChild(item);
    }
    
    Array.from(activePage).forEach((e)=>{e.classList.remove("active");});
     activePage[index-1].classList.add("active");
}

}

if (document.querySelector('.search_bar_input').value == ""){
    pagination();
}
else{
    
}
// *<!------------------SEARCH-BAR----------------------------------------> * //

function searchFun(){


    var filter = document.querySelector('.search_bar_input').value.toUpperCase();
    
    var my_table = document.querySelector('#crud_table tbody');
    
    var my_table_row = my_table.getElementsByTagName('tr'); 


    for (var i= 0; i <= my_table_row.length; i++){
        
        var my_table_data = my_table_row[i].getElementsByTagName('td')[1];
       

        if(my_table_data){
            
            var text_vlaue = my_table_data.textContent || my_table_data.innerHtml;
            
            if(text_vlaue.toUpperCase().indexOf(filter) > -1){
                my_table_row[i].style.display="";
            }
            
            else{
                my_table_row[i].style.display = "none";
            }
        } 

    }

    
}