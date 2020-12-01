/**********************************************************************************
*                                                                                 * 
*                                                                                 *
*                       TREEHOUSE TECHDEGREE - UNIT 2                             *
*                       Data Filtering and Pagination                             *
*                                                                                 *
*                                 Matt Hawes                                      *
*                                                                                 *
/**********************************************************************************/

//GLOBAL VARIABLES
const body = document.querySelector('body')
const paginationDiv = document.querySelector('.pagination')
const studentList = document.querySelector(".student-list") 
const ul = document.querySelector(".link-list")
const header = document.querySelector('.header')
const pageNumberMessage = document.createElement('p')
//IF NO RESULTS ARE FOUND ON SEARCH - MESSAGE
const noResultMessage = document.createElement('h3')
noResultMessage.innerHTML = 'No results found! Please try again.'
noResultMessage.className = 'noResults'
pageNumberMessage.className = 'pageMessage'
//HEADER HTML & ATTRIBUTES
header.innerHTML =  
 `<h2>Students</h2>
	 <label for="search" class="student-search">
	 <input id="search" placeholder="Search by name..."> 
  </label>`
const searchButton = header.querySelector('button')
const searchInput = header.querySelector('input')

//HTML FOR STUDENT LIST
function generateHtml(list){
	let html = 
        `<li class="student-item cf">
	        <div class="student-details">
	        <img class="avatar" src="${list.picture.large}" alt="Profile Picture">
	        <h3>${list.name.title} ${list.name.first} ${list.name.last}</h3>
	        <span class="email">${list.email}</span></div>
	        <div class="joined-details">
	        <span class="date">${list.registered.date}</span>
        </div></li>`
    return html
};

//SEARCH FEATURE TO FIND SPECIFIC STUDENT BY FIRST OR LAST NAME
searchInput.addEventListener('keyup', function(){
     let studentPagination = []
     studentList.innerHTML = ''	    
		for(let i = 0; i < data.length; i++){
			if(data[i].name.first.toUpperCase().includes(searchInput.value.toUpperCase())||
			   data[i].name.last.toUpperCase().includes(searchInput.value.toUpperCase())){
				studentList.insertAdjacentHTML('beforeend', generateHtml(data[i]))
				studentPagination.push(data[i])           	
		        }; 
			}; 
		//DISPLAY MESSAGE WHEN NO RESULTS FOUND	
		if(studentPagination.length > 9){
		    showPage(studentPagination, 1)
		    noResultMessage.style.display = 'none';
		    ul.style.display = 'inherit';
	    } else if(studentPagination.length === 0){
	    	body.appendChild(noResultMessage);
		    noResultMessage.style.display = 'inherit';
		    ul.style.display = 'none';
	    } else if(studentPagination.length <= 9){
	    	noResultMessage.style.display = 'none';
	    	ul.style.display = 'none';
	    };
        //SET PAGINATION TO SEARCH RESULTS
        if(searchInput.value !== ''){
	        ul.innerHTML = ''
		    addPagination(studentPagination)
	    } else { 
	        ul.innerHTML = ''
	    	addPagination(data)
	    };
}); 

//CREATES AND APPENDS A PAGE OF 9 STUDENTS
function showPage(list, page){
	const pageStart = (page * 9) - 9;                            
	const pageEnd = page * 9;                           
	studentList.innerHTML = '';
	for(let i = 0; i < list.length; i++){                       
		if(i >= pageStart && i < pageEnd){    
	       studentList.insertAdjacentHTML("beforeend", generateHtml(list[i]))			
		};
	};
};

//CREATES AND APPENDS PAGINATION BUTTONS
function addPagination(list){ 
	const numOfPages = Math.ceil(list.length/9);                
	for(let i = 1; i <= numOfPages; i++){		
		ul.insertAdjacentHTML("beforeend", 
			`<a href="#"><li><button type="button">${i}</button></li></a>`			 
        )};  	
    const buttonOne = ul.querySelector("button");       
	buttonOne.className = "active";	
	//SET DEFAULT PAGE NUMBER TO ONE
	pageNumberMessage.innerHTML = `Page 1 of ${numOfPages}`
    header.appendChild(pageNumberMessage);	    
	//BUTTON EVENT LISTENER - CHANGES PAGE
	ul.addEventListener("click", function(e){        
	const currentPage = e.target;
		if(currentPage.tagName === "BUTTON"){
			let notActive = document.querySelector(".active"); 
				notActive.className = ''                                
				currentPage.className = 'active'                         
			showPage(data, currentPage.innerHTML)
			pageNumberMessage.innerHTML = `Page ${currentPage.innerHTML} of ${numOfPages}`
		}; 
	}); 
 };

//CALL FUNCTIONS
addPagination(data);
showPage(data,1);