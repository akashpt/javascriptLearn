const form = document.querySelector('form');
const results = document.querySelector('#results');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const heightInput = document.querySelector('#height');
    const weightInput = document.querySelector('#weight');

    const height = parseFloat(heightInput.value); // Use parseFloat for flexibility
    const weight = parseFloat(weightInput.value);

    // Clear previous results
    results.textContent = ''; // Or results.innerHTML = '';

    if (isNaN(height) || height <= 0) {
        results.textContent = 'Please enter a valid height.';
    } else if (isNaN(weight) || weight <= 0) {
        results.textContent = 'Please enter a valid weight.';
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // Create a new element for better styling
        const bmiSpan = document.createElement('span');
        bmiSpan.textContent = bmi;
        results.appendChild(bmiSpan); 

        // Optional: Provide BMI interpretation
        let interpretation;
        if (bmi < 18.5) {
            interpretation = 'Underweight';
        } else if (bmi < 25) {
            interpretation = 'Normal weight';
        } else if (bmi < 30) {
            interpretation = 'Overweight';
        } else {
            interpretation = 'Obese';
        }

        const interpretationP = document.createElement('p');
        interpretationP.textContent = `Interpretation: ${interpretation}`;
        results.appendChild(interpretationP); 
    }
});
