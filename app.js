function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const units = document.querySelector('input[name="units"]:checked').value;

    let bmi;

    if (units === "metric") {
        bmi = weight / ((height / 100) ** 2); // Metric calculation
    } else {
        bmi = (weight / (height ** 2)) * 703; // Imperial calculation
    }

    const resultElement = document.getElementById("result");
    const adviceElement = document.getElementById("advice");

    if (!isNaN(bmi)) {
        let category = "";
        let advice = "";

        if (bmi < 18.5) {
            category = "Underweight";
            advice = "Increase caloric intake with nutrient-dense foods & eat frequent small meals for healthy gain.";
;
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal weight";
            advice = "Maintain balanced diet and regular exercise; focus on portion control and nutrient density.";

        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Overweight";
            advice = "Create caloric deficit with high-fiber foods; limit sugars and unhealthy fats for weight loss.";
        } else if (bmi >= 30 && bmi<34.9) {
            category = "Obesity (Stage I)";
            advice = "Follow structured meal plan; focus on low-calorie, nutrient-dense foods; avoid processed snacks.";
        } else if (bmi >= 35.5 && bmi<39.9) {
            category = "Obesity (Stage II)";
            advice = "Adopt plant-based diet, eat smaller meals frequently, and limit high-calorie beverages for success.";
        } else  {
            category = "Obesity (Stage III)";
            advice = "Consider medically supervised very low-calorie diet to support weight loss and preserve muscle.";
        }
        resultElement.textContent = `BMI: ${bmi.toFixed(2)} (${category})`;
        adviceElement.textContent = `Health Advice: ${advice}`;
    } else {
        resultElement.textContent = "Please enter valid inputs.";
        adviceElement.textContent = "";
    }
}

// Refresh the page
function refreshPage() {
    document.getElementById("bmiForm").reset();
    document.getElementById("result").textContent = "";
    document.getElementById("advice").textContent = "";
}

// Function to open the modal for Doctor's information
function contactDoctor() {
    const modal = document.getElementById("doctorModal");
    modal.style.display = "flex"; // Show the modal
}

// Function to close the modal
function closeDoctorTab() {
    const modal = document.getElementById("doctorModal");
    modal.style.display = "none"; // Hide the modal
}
