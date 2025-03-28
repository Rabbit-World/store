// Data for categories
const tools = [
    { name: "OCRabbit" }
];

// Function to update the counters
function updateCounts() {
    document.getElementById('toolCount').innerText = tools.length;

    // Show the counter
    const toolContent = document.getElementById('toolContent');
    toolContent.innerHTML = '';
    tools.forEach(tool => {
        const p = document.createElement('p');
        p.innerText = tool.name;
        toolContent.appendChild(p);
    });
}

// Update counters when loading page
updateCounts();

document.getElementById('page-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const app = document.getElementById('app').value;
  const version = document.getElementById('version').value;
  const dimension = document.getElementById('dimension').value;
  
  // Crea il contenuto del file HTML
  const htmlContent = `
  🚧 Under Development 🚧
  `;
  
  // Crea un blob per il file HTML
  const blob = new Blob([htmlContent], { type: 'text/html' });
  
  // Crea un link per scaricare il file
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `app_${app}.html`;
  link.click();
});
