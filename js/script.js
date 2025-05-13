const colorButton = document.getElementById("colorBtn");
const randomNum = () => Math.floor(Math.random() * 256);
const changeColor = () => {
    const randomColor = `rgb(${randomNum()}, ${randomNum()}, ${randomNum()})`;
    document.documentElement.style.backgroundColor = randomColor;
    document.body.style.backgroundColor = randomColor;
};
colorButton.addEventListener("click", changeColor);


const today = new Date();
const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
document.getElementById("dateTime").innerText = formattedDate;





const completedButton = document.querySelectorAll(".completedBtn");
for (let i = 0; i < completedButton.length; i++) {
    const completedBtn = completedButton[i];
    completedBtn.addEventListener("click", function (event) {
        alert("Board updated successfully");
        event.target.classList.add("bg-gray-300");
        event.target.disabled = true; // Disable the button after use

        
        const checkNum = document.getElementById("checkNumber");
        checkNum.innerText = parseInt(checkNum.innerText) + 1;

        
        const taskNum = document.getElementById("taskNumber");
        const currentTaskNum = parseInt(taskNum.innerText);
        const newTaskNum = currentTaskNum - 1;
        taskNum.innerText = newTaskNum;

        
        if (newTaskNum === 0) {
            alert("Congrats!!! You have completed all the current tasks");
        }

        
        const taskheadings = event.target.closest('.h-48').querySelector('.heading').innerText;

        
        const now = new Date();
        const currentTime = now.toLocaleTimeString('en-US');
        

        
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `<p>You have completed the task <strong>${taskheadings}</strong> at ${currentTime}</p>`;
        newDiv.className = "bg-[#F4F7FF] py-3 px-3 h-16  mt-1 rounded-lg text-xs w-60 m-2";
        document.getElementById("taskAdd").append(newDiv);
        
    });
    
}






const activityButton = document.getElementById("activityBtn");
activityButton.addEventListener("click", function(){
    const taskList = document.getElementById("taskAdd");
    taskList.innerHTML = "";
});

const newsButton = document.getElementById("newsBtn");
newsButton.addEventListener("click", function(){
    window.location.href = "./news.html";
})










