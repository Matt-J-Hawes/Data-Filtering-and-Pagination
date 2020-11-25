/**********************************************************************************
*                                                                                 * 
*                                                                                 *
*                       TREEHOUSE TECHDEGREE - UNIT 2                             *
*                       Data Filtering and Pagination                             *
*                                                                                 *
*                                 Matt Hawes                                      *
*                                                                                 *
/**********************************************************************************/

//GLOBAL VARIABLE
const paginationDiv = document.querySelector('.pagination')
const studentList = document.querySelector(".student-list") 
const ul = document.querySelector(".link-list")
const header = document.querySelector('.header')
header.innerHTML =  
 `<label for="search" class="student-search">
	<input id="search" placeholder="Search by name...">
	<button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
	<button class='cancel' type="button">&#x274C</button>
</label>`
const searchButton = header.querySelector('button')
const searchInput = header.querySelector('input')
const cancelButton = header.querySelector('.cancel')

//CREATES AND APPENDS A PAGE OF 9 STUDENTS
function showPage(list, page){
	const pageStart = (page * 9) - 9;                            
	const pageEnd = page * 9;                           
	studentList.innerHTML = '';
	for(let i = 0; i < list.length; i++){                       
		if(i >= pageStart && i < pageEnd){    
	       studentList.insertAdjacentHTML("beforeend",     
	        `<li class="student-item cf">
		        <div class="student-details">
		        <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
		        <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
		        <span class="email">${list[i].email}</span></div>
		        <div class="joined-details">
		        <span class="date">${list[i].registered.date}</span>
	        </div></li>`)			
		};
	};
};

//CREATES AND APPENDS PAGINATION BUTTONS
function addPagination(list){ 
	const numOfPages = Math.ceil(list.length/9);                
	for(let i = 1; i <= numOfPages; i++){		
		ul.insertAdjacentHTML("beforeend", `
			<li><button type="button">${i}</button></li>`) 			 
    };  	
    const buttonOne = ul.querySelector("button");       
	buttonOne.className = "active"		    
	//BUTTON EVENT LISTENER - CHANGES PAGE
	ul.addEventListener("click", function(e){        
	const currentPage = e.target;
		if(currentPage.tagName === "BUTTON"){
			let notActive = document.querySelector(".active"); 
				notActive.className = ''                                
				currentPage.className = 'active'                         
			showPage(data, currentPage.innerHTML)
		}; 
	}); 
 };

//CALLBACK FUNCTION TO REMOVE BUTTON CLASS
function removeActiveClass(){
 let notActive = document.querySelector(".active"); 
	 notActive.className = ''                              
     ul.className = 'active'
     showPage(data, 1)
};

//SEARCH FEATURE TO FIND SPECIFIC STUDENT BY FIRST OR LAST NAME
function findStudent(){
 	searchButton.addEventListener('click', function(){
 		for(let i = 0; i < data.length; i++){
            if(searchInput.value.toUpperCase().includes(data[i].name.first.toUpperCase())||
               searchInput.value.toUpperCase().includes(data[i].name.last.toUpperCase())){
            	studentList.innerHTML =    
	        `<li class="student-item cf">
		        <div class="student-details">
		        <img class="avatar" src="${data[i].picture.large}" alt="Profile Picture">
		        <h3>${data[i].name.title} ${data[i].name.first} ${data[i].name.last}</h3>
		        <span class="email">${data[i].email}</span></div>
		        <div class="joined-details">
		        <span class="date">${data[i].registered.date}</span>
	        </div></li>`
	        paginationDiv.removeChild(ul)
            } 
            else if(searchInput.value === ''){
            	paginationDiv.appendChild(ul)           	
            	removeActiveClass()           	

            }; 		
 		}; 					
 	});
 	//CLEARS SEARCH INPUT AND RETURNS TO FIRST PAGE
 	cancelButton.addEventListener('click', function(){
 		searchInput.value = ''
 		paginationDiv.appendChild(ul)
 		removeActiveClass()		
 	});
}; 

//CALL FUNCTIONS
addPagination(data)
showPage(data,1)
findStudent()

