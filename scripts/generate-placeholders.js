const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Create the projects directory if it doesn't exist
const projectsDir = path.join(__dirname, '../public/images/projects');
if (!fs.existsSync(projectsDir)) {
  fs.mkdirSync(projectsDir, { recursive: true });
}

// Function to create a placeholder image
function createPlaceholderImage(filename, text, bgColor = '#4a5568', textColor = '#ffffff') {
  const width = 800;
  const height = 600;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = textColor;
  ctx.font = 'bold 40px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(projectsDir, filename), buffer);
  console.log(`Created ${filename}`);
}

// Create placeholder images for UX/UI projects
createPlaceholderImage('educlimate.jpg', 'EduClimate', '#3182ce', '#ffffff');
createPlaceholderImage('onwardstate.jpg', 'Onward State', '#38a169', '#ffffff');
createPlaceholderImage('axare.jpg', 'AXARE.co', '#805ad5', '#ffffff');

// Create placeholder images for cyber projects
createPlaceholderImage('network.jpg', 'Network Security', '#e53e3e', '#ffffff');
createPlaceholderImage('encryption.jpg', 'Encryption Algorithm', '#dd6b20', '#ffffff');
createPlaceholderImage('dashboard.jpg', 'Security Dashboard', '#2b6cb0', '#ffffff');

console.log('All placeholder images created successfully!'); 