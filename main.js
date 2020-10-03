	
	let questionStart = 1;
	let questionEnd = questions.length;
	let name = " ";
	var answers = [];


$(document).ready(function() {
	$(".gif").fadeOut();

	setTimeout( () => {

			name = prompt("Ishtirokchi ismi");
			name = name[0].toUpperCase() +  
            name.slice(1);

		((typeof(name) !== "string") ? name = "Anonymous" : null);

	},500);
			$(".startGame").click(function() {
			$(".app").css("display","flex");
			$(this).remove();
			appRender();
		})
	
})
function selectOnlyThis(id){
	
  var checkbox = document.getElementsByName("checkbox");
  checkbox.forEach(function(el){
  	el.checked = false;
  });

  id.checked = true;
  	 key = id.value;

 	 if ( key === `${questions[questionStart-1].a}` && ( !answers.includes(`${questions[questionStart-1].a}` )) ) {
  			answers.push(key);
  			//console.log(answers,answers.length,answers.includes(`${questions[questionStart-1].a}`));
	 }
  	 else if ( key !== `${questions[questionStart-1].a}` && ( answers.includes(`${questions[questionStart-1].a}` )) ) {
  	 		
  			answers.pop();

  			//console.log(answers,answers.length,answers.includes(`${questions[questionStart-1].a}`));
	 }
	
}

function appRender() {

		$(".app").html("");
		var data = `<div class="question">${questions[questionStart-1].savol}</div>
		<div class="answers">
			<label><input type="checkbox" name="checkbox" value="${questions[questionStart-1].a}"   onclick="selectOnlyThis(this)"><span>${questions[questionStart-1].a}</span></label>
			<label><input type="checkbox"  name="checkbox" value="${questions[questionStart-1].b}"  onclick="selectOnlyThis(this)"><span>${questions[questionStart-1].b}</span></label>
			<label><input type="checkbox"  name="checkbox" value="${questions[questionStart-1].c}"  onclick="selectOnlyThis(this)"><span>${questions[questionStart-1].c}</span></label>
			<label><input type="checkbox"  name="checkbox" value="${questions[questionStart-1].d}" onclick="selectOnlyThis(this)"><span>${questions[questionStart-1].d}</span></label>
		</div>
		<div class="nextPrev">
			<button class="prev"><i class="fas fa-arrow-left"></i> Prev</button>
			<button class="next">Next <i class="fas fa-arrow-right"></i></button>
		</div>
		<div class="countQuestion">Question: ${questionStart}/${questionEnd}</div>`

		$(".app").append(data);

		prevFunction();
		nextFunction();
}

function prevFunction() {

	$(".prev").click(function() {
		if(questionStart === 1 ) {
			$(".countQuestion").text(`Question: ${questionStart}/${questionEnd}`);
		}
		else {
			$(".countQuestion").text(`Question: ${questionStart}/${questionEnd}`);
			questionStart--;
			appRender();
		}
		});
}


function nextFunction() {

		$(".next").click(function() {
			if ( questionStart !== questionEnd ) {
				$(".countQuestion").text(`Question: ${questionStart}/${questionEnd}`);
				questionStart++;
				appRender();
			}
			else if( questionStart === questionEnd ) {
				$(".app").css("display","none");
				endPoint();
				$(".endPoint").css("display","flex");

			}
		})
		finishBtn();
}
	
function finishBtn() {

	if(questionStart === questionEnd) {
		$(".next").html(`Finish <i class="fas fa-arrow-right"></i>`);
	}

}

function endPoint() {

	$(".endPoint").html("");

	if ( `${answers.length}` > 5 ) {
		var end = `
				<p>${name} sizda to'gri javoblar soni ${answers.length} ta</p>
				<i class="far fa-smile-beam"></i>
				<button class="exit exitSuccess">Chiqish</button> 
				`;
	}
	else if (`${answers.length}` < 5) {
		var end = `
				<p>${name} sizda to'gri javoblar soni ${answers.length} ta</p>
				<i class="far fa-angry"></i>
				<button class="exit exitFailed">Chiqish</button> 
				`;
	}

	
	$(".endPoint").append(end);

	$(".exit").click(function() {
		$(".endPoint").css("display","none");
		$("h1").addClass("gameText");
		$(".gameText").text("Thank you for playing the Game");
	})
		

	
	
}

































































































































// const startGame = document.querySelector(".startGame");
// let app = document.querySelector(".app");
// let questionCount = 1;
// let allQuestionCount = 5;



// startGame.addEventListener("click",function() {
// 	app.style.display="flex";
// 	this.remove();
// })

// function appRendering() {

// 	let questionDiv = document.createElement("div");
// 		questionDiv.classList.add("question");
// 		questionDiv.innerText = "O'zbekiston poytaxti?";

// 	let answersDiv = document.createElement("div");
// 		answersDiv.classList.add("answers");

// 	let labelA = document.createElement("label");
// 	let labelB = document.createElement("label");
// 	let labelC = document.createElement("label");
// 	let labelD = document.createElement("label");

// 	let answerA = document.createElement("span");
// 		answerA.innerText="Tashkent";

// 	let answerB = document.createElement("span");
// 		answerB.innerText="Sirdaryo";

// 	let answerC = document.createElement("span");
// 		answerC.innerText="Jizzax";

// 	let answerD = document.createElement("span");
// 		answerD.innerText="Yangiyo'l";

// 	let inputA = document.createElement("input");
// 		inputA.type = "checkbox";
// 		inputA.name= "checkbox";

// 	let inputB = document.createElement("input");
// 		inputB.type = "checkbox";
// 		inputB.name= "checkbox";

// 	let inputC = document.createElement("input");
// 		inputC.type = "checkbox";
// 		inputC.name= "checkbox";

// 	let inputD = document.createElement("input");
// 		inputD.type = "checkbox";
// 		inputD.name= "checkbox";


// 	let nextPrev = document.createElement("div");
// 		nextPrev.classList.add("nextPrev");

// 	let prev = document.createElement("button");
// 		prev.classList.add("prev");
// 		prev.innerHTML = '<i class="fas fa-arrow-left"></i>'+ 'Prev';

// 	let next = document.createElement("button");
// 		next.classList.add("next");
// 		next.innerHTML = '<i class="fas fa-arrow-right"></i>'+ 'Next';

// 	let countQuestion =document.createElement("div");
// 		countQuestion.classList.add("countQuestion");
// 		countQuestion.innerHTML = "Question 1/5";

// 		labelA.appendChild(inputA);
// 		labelA.appendChild(answerA);
// 		labelB.appendChild(inputB);
// 		labelB.appendChild(answerB);
// 		labelC.appendChild(inputC);
// 		labelC.appendChild(answerC);
// 		labelD.appendChild(inputD);
// 		labelD.appendChild(answerD);
// 		answersDiv.appendChild(labelA);
// 		answersDiv.appendChild(labelB);
// 		answersDiv.appendChild(labelC);
// 		answersDiv.appendChild(labelD);
// 		nextPrev.appendChild(prev);
// 		nextPrev.appendChild(next);
// 		app.appendChild(questionDiv);
// 		app.appendChild(answersDiv);
// 		app.appendChild(nextPrev);
// 		app.appendChild(countQuestion);
// }
// appRendering();



