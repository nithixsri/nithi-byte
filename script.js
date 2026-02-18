function sendMessage(){

let input=document.getElementById("userInput").value.toLowerCase().trim();
let chatbox=document.getElementById("chatbox");

chatbox.innerHTML+="<p class='user'>You: "+input+"</p>";

let reply="Sorry, I can answer only JJ College related questions 🎓";

if(input.includes("hi")||input.includes("hello")){
reply="Hello 👋 Welcome to JJ College of Arts and Science Pudukkottai Bot.";
}

else if(input.includes("name")||input.includes("college")){
reply="J J College of Arts and Science, Pudukkottai.";
}

else if(input.includes("shift")){
reply="College has Morning Shift and General Shift.";
}

else if(input.includes("university")){
reply="The college is affiliated to Bharathidasan University.";
}

else if(input.includes("history")){
reply="JJ College of Arts and Science was established to provide quality higher education for rural and urban students with focus on arts and science development.";
}

else if(input.includes("location")||input.includes("where")||input.includes("address")){
reply="JJ College of Arts and Science is located in Pudukkottai district, Tamil Nadu with good road transport access.";
}

else if(input.includes("duration")){
reply="Most UG courses duration is 3 years and PG courses duration is 2 years.";
}

else if(input.includes("hostel")){
reply="Hostel facility available for students with basic accommodation and safety.";
}

else if(input.includes("travel")||input.includes("transport")||input.includes("bus")){
reply="Students can reach college through local buses and public transport facilities.";
}

else if(input.includes("campus")||input.includes("facility")||input.includes("lab")||input.includes("library")){
reply="Campus includes classrooms, laboratories, library, sports ground and student facilities.";
}

else if(input.includes("course")||input.includes("courses")){
reply="Courses available include BA, BSc, BCom and other Arts and Science degree programs under Bharathidasan University.";
}

else if(input.includes("department")){
reply="Departments include Tamil, English, Commerce, Computer Science, Mathematics and other Arts and Science streams. Each department provides academic training, practical sessions and student development programs.";
}

else if(input.includes("computer")){
reply="Computer Science Department offers programming, software training, lab facilities and technical skill development for students.";
}

else if(input.includes("commerce")){
reply="Commerce Department covers accounting, business studies, finance and practical commerce knowledge.";
}

else if(input.includes("contact")||input.includes("phone")||input.includes("mobile")){
reply="Check official website for contact details: https://share.google/SICEIqCwvrPd1hpSl";
}

chatbox.innerHTML+="<p class='bot'>Bot: "+reply+"</p>";
document.getElementById("userInput").value="";
}