const resume = {
    "name": "Barath",
    "title": "Software Engineer",
    "contact": {
        "email": "Barath.doe@example.com",
        "phone": "123-456-7890",
        "linkedin": "linkedin.com/in/barath"
    },
    "skills": ["JavaScript", "React", "Node.js", "Python", "SQL"],
    "experience": [
        {
            "company": "Tech Solutions Inc.",
            "role": "Frontend Developer",
            "duration": "Jan 2020 - Present",
            "responsibilities": [
                "Developed and maintained web applications using React.",
                "Collaborated with designers and backend developers to create seamless user experiences.",
                "Implemented responsive design to ensure compatibility across various devices."
            ]
        },
        {
            "company": "Web Innovations LLC",
            "role": "Junior Developer",
            "duration": "Jun 2018 - Dec 2019",
            "responsibilities": [
                "Assisted in the development of client websites using HTML, CSS, and JavaScript.",
                "Conducted testing and debugging of web applications.",
                "Participated in code reviews and team meetings."
            ]
        }
    ],
    "education": {
        "degree": "Bachelor of Science in Computer Science",
        "university": "State University",
        "graduationYear": 2018
    }
};

// Iterate over skills using for loop
for (let i = 0; i < resume.skills.length; i++) {
    console.log(resume.skills[i]);
}




//*************************************FOR IN LOOP************************************
// Iterate over properties of the contact object using for...in loop
for (const key in resume.contact) {
    console.log(`${key}: ${resume.contact[key]}`);
}



//*******************************************FOR OF LOOP*********************************
// Iterate over responsibilities of the first job in the experience array using for...of loop
for (const responsibility of resume.experience[0].responsibilities) {
    console.log(responsibility);
}



//*********************************************FOR EACH***************************** */
// Iterate over the experience array using forEach method
resume.experience.forEach((job) => {
    console.log(`Company: ${job.company}`);
    console.log(`Role: ${job.role}`);
    console.log(`Duration: ${job.duration}`);
    job.responsibilities.forEach((responsibility) => {
        console.log(`Responsibility: ${responsibility}`);
    });
});
