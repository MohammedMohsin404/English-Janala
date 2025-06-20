console.log("JS Connected");
const lessons =["Lesson-1", "Lesson-2","Lesson-3","Lesson-4","Lesson-5","Lesson-6","Lesson-7"]
const lessons_Container=document.getElementById("lessons-container")
lessons.forEach((lesson)=>{
    
lessons_Container.innerHTML+=`
<button class=" btn border hover:border-[#422AD5] text-[#422AD5] bg-transparent"><img src="../assets/fa-book-open.png" alt="${lesson}" /> ${lesson}</button>
`
})


