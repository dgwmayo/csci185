// ignore this function for now. We'll go over it
// on Wednesday:
async function fetchCourses() {
    const url = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2024/fall/`;
    courseList = await fetch(url).then((response) => response.json());
    displayResults(courseList);
}

function displayResults(courses) {
    // your code here.
        const mainEl = document.querySelector(".courses")

            if(data[i].Department === CSCI) {
                const snippet = `
                <section class="course">
                <h2>${data[i].Code}: ${data[i].Title}</h2>
                <p>
                    ${data[i].Days} &bull; ${data[i].Location.FullLocation} &bull; ${data[i].Hours} credit hour(s)
                </p>
                <p><strong>TBD</strong></p>
                </section>
            `;
            mainEl.insertAdjacentHTML("beforeend", snippet);
    
            console.log(data[i].Title);
            }
    
        }
    console.log(courses);
