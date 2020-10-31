/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

// variable to reference the HTML 
const studentList = document.querySelector(".student-list") 

function showPage(list, page){
	const pageStart = (page * 9) - 9;   // first page variable
	const pageEnd = page * 9;           // last page variable
	studentList.innerHTML = '';
	

	for(let i = 0; i < list.length; i++){       // iterating through the list to access every student
		if(i >= pageStart && i < pageEnd){
       
       // displaying list in HTML format
       studentList.insertAdjacentHTML(
       	"beforeend",       
        `<li class="student-item cf">
        <div class="student-details">
        <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
        <h3>${list[i].name.title} ${list[i].name.first} ${list[i].name.last}</h3>
        <span class="email">${list[i].email}</span></div>
        <div class="joined-details">
        <span class="date">${list[i].registered.date}</span>
        </div></li>`)
			
		}
	}
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// variable to reference the HTML
const ul = document.querySelector(".link-list")

function addPagination(){

	const numOfPages = Math.ceil(42/9); // variable to get a total page number and iterate through it
	for(let i = 1; i <= numOfPages; i++){
		// display buttons on page
		ul.insertAdjacentHTML("beforeend", `
			<li>
            <button type="button">${i}</button>
          </li>`)
	}  const buttonOne = document.querySelector("button") // load in with first button 'active'
	   buttonOne.className = "active"
	//find the active button and display that page
	ul.addEventListener("click", function(e){
              
        const currentPage = e.target;
        if(currentPage.tagName === "BUTTON"){
        	let notActive = document.querySelector(".active"); 
        	notActive.className = ''           // remove class from non-active buttons
        	currentPage.className = 'active'   // set class to the target
        	showPage(data, currentPage.innerHTML)

        } 
	}) 
}



addPagination()
showPage(data,1)

// Call functions







