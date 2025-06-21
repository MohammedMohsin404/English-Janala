console.log("JS Connected");

const lessons_Container = document.getElementById("lessons-container");

const Load_Lesson_Buttons = async () => {
  try {
    const response = await fetch(
      "https://openapi.programming-hero.com/api/levels/all"
    );

    // Optional: handle HTTP errors manually
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // or .text(), .blob(), etc.
    console.log("Fetched Data:", data);
    Show_Lesson_Buttons(data.data);
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
};

const Show_Lesson_Buttons = (lessons) => {
  lessons.forEach((lesson) => {

    lessons_Container.innerHTML += `
<button class=" btn border hover:border-[#422AD5] text-[#422AD5] bg-transparent"><img src="./assets/fa-book-open.png" alt="${lesson.lessonName}" /> Lesson-${lesson.level_no}</button>
`;
  });
};

Load_Lesson_Buttons();
