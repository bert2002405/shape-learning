// Shape Matching Activity
const shapes = ['circle', 'square', 'triangle', 'rectangle', 'pentagon'];
const shapeDisplay = document.getElementById('shape-display');
const targetShape = document.getElementById('target-shape');
const correct = document.querySelector('.correct');
const wrong = document.querySelector('.wrong');

// Create shape elements
shapes.forEach(shape => {
    const shapeDiv = document.createElement('div');
    shapeDiv.className = `shape ${shape}`;
    shapeDiv.onclick = () => checkShape(shape);
    shapeDisplay.appendChild(shapeDiv);
});

function checkShape(selectedShape) {
    const target = targetShape.textContent.toLowerCase();
    
    if (selectedShape === target) {
        correct.style.display = 'block';
        wrong.style.display = 'none';
        // Change to a new random shape after correct answer
        setTimeout(() => {
            targetShape.textContent = shapes[Math.floor(Math.random() * shapes.length)];
            correct.style.display = 'none';
        }, 1500);
    } else {
        correct.style.display = 'none';
        wrong.style.display = 'block';
    }
}

// Count Sides Activity
function checkSides(correctSides, button) {
    const input = button.previousElementSibling;
    const value = parseInt(input.value);
    
    if (value === correctSides) {
        alert('Correct! Great job! 🎉');
        input.value = ''; // Reset input after correct answer
    } else {
        alert('Try again! Count carefully 🤔');
    }
}

// Initialize the first shape
targetShape.textContent = shapes[Math.floor(Math.random() * shapes.length)];
