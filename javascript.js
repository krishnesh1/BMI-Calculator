// document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent the form from submitting and refreshing the page

        // Get the height and weight values
        const height = parseFloat(document.getElementById("Heigth").value); 
        const weight = parseFloat(document.getElementById("weigth").value);
        const result = document.getElementById("results");

        // Validate height and weight
        if (!height || height <= 0 || isNaN(height)) {
            result.innerText = "Please enter a valid number for height.";
            return;
        }

        if (!weight || weight <= 0 || isNaN(weight)) {
            result.innerText = "Please enter a valid number for weight.";
            return;
        }
        
        // Calculate BMI
        const bmi = weight / ((height / 100) * (height / 100)); // Ensure height is in meters

        // Display the BMI result
        result.innerText = `Your BMI is: ${bmi.toFixed(2)}`;

        // Optionally, categorize the BMI
        let message = "";
        if (bmi < 18.6) {
            message = "Under Weight";
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            message = "Normal Range";
        } else {
            message = "Overweight";
        }

        result.innerText += ` (${message})`;
    });
// });
