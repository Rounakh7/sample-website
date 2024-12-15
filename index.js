

fetch('./data.json') // Path to your JSON file
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the JSON
    })
    .then(data => {

        let html="";

        html += "<table border='1'><tr><th>Name</th><th>Marks</th></tr>";



        for (let i = 0; i < data.length; i++) {
            html += "<tr><td>"+ data[i]["student"] +"</td><td>"+ data[i]["marks"] +"</td></tr>";
        }

        html += "</table>";

        document.getElementById("meow").innerHTML = html;




    })
    .catch(error => {
        console.error('Error loading JSON file:', error);
    });



