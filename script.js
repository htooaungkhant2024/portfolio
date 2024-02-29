// JavaScript code for binary animation around header
document.addEventListener('DOMContentLoaded', function () {
    const binaryContainer = document.getElementById('binary-animation');

    // Function to generate random binary digit
    function generateBinaryDigit() {
        return Math.floor(Math.random() * 2);
    }

    // Function to generate random binary string
    function generateBinaryString(length) {
        let binaryString = '';
        for (let i = 0; i < length; i++) {
            binaryString += generateBinaryDigit();
        }
        return binaryString;
    }

    // Function to create binary animation
    function createBinaryAnimation() {
        const binaryString = generateBinaryString(50); // Adjust length as needed
        binaryContainer.textContent = binaryString;

        // Recursive function to update binary string
        function updateBinary() {
            const newBinaryString = generateBinaryString(50); // Adjust length as needed
            binaryContainer.textContent = newBinaryString;
            setTimeout(updateBinary, 100); // Adjust speed as needed
        }

        // Start animation
        updateBinary();
    }

    // Initialize binary animation
    createBinaryAnimation();

    // Apply green color to binary number
    binaryContainer.style.color = '#00ff00'; // Green color
});
