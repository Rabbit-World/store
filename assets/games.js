// Data for categories
const games = [
    { name: "Rabbitgotchi" },
    { name: "r1 Castaway" }
];

const tools = [
    { name: "Tool1" }
];

// Function to update the counters
function updateCounts() {
    document.getElementById('gameCount').innerText = games.length;

    // Show the counter
    const gameContent = document.getElementById('gameContent');
    gameContent.innerHTML = '';
    games.forEach(game => {
        const p = document.createElement('p');
        p.innerText = game.name;
        gameContent.appendChild(p);
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
