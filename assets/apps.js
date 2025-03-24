document.getElementById('page-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const app = document.getElementById('app').value;
  const version = document.getElementById('version').value;
  const dimension = document.getElementById('dimension').value;
  
  // Crea il contenuto del file HTML
  const htmlContent = `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>${title} | rabbit r1 developer</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/> 
        <link rel="apple-touch-icon" href="../favicon-114.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" /><!-- hide top bar in mobile safari-->
        <!--<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> translucent top bar -->
        <link rel="stylesheet" type="text/css" media="screen" href="../assets/style.css" />
        <link rel="shortcut icon" href="../favicon.png">
        <script src="https://kit.fontawesome.com/16b670d8d3.js" crossorigin="anonymous"></script>
        
    </head>

    <body>

        <div id="wrap">
        
            <div id="main">
            
                <div class="header">
                    
                    <a class="left" href="../developers" data-translatable>Back // Indietro</a>
                    <h1 class="title">${app} <i class="fa-brands fa-dev"></i> rabbit r1</h1>
                    <a class="right" href="https://rabbit-world.github.io" data-translatable>Exit // Esci</a>
                    
                </div><!--header-->
                
                <div class="content">
                
                    <center>
                    <!--span class="ico msg"><picture><source type="image/webp" srcset="assets/apps/store.webp" style="position: absolute; height: 10%; width: 10%; inset: 0px; color: transparent;"><img src="assets/apps/app.png" alt="rabbit r1 App Store"></picture></span-->
                    <!--picture><source type="image/webp" srcset="assets/apps/store.webp" style="height: 400px; border-radius: 10px; object-fit: cover; color: transparent;"><img src="assets/apps/store.png" alt="rabbit r1 App Store"-->
                    <iframe width="100%" height="450" src="https://www.youtube.com/embed/esS51zPFSTs?si=GpBKfvnq002FpWlH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </center>
                    
                    <h2 class="title" data-translatable>Developer's Profile // Profilo dello Sviluppatore</h2>... <div class="box-white">
                        <br /> <strong><i class="fa-solid fa-carrot"></i> rabbit r1 App Store</strong><p data-translatable> is an experimental directory that offers innovative applications, games and tools for your rabbit r1 device. // è una directory sperimentale che offre applicazioni, giochi e strumenti innovativi per il tuo dispositivo rabbit r1.</p>
                        <p><a href="https://github.com/Rabbit-World/store" target="_blank" data-translatable>Contribute to the project! // Contribuisci al progetto!</a></p>
                    </div><!--box-white-->
                    
                    <table>
                        <thead>
                            <tr><th data-translatable>Apps // App</th><th data-translatable>Version // Versione</th><th data-translatable>Dimension // Dimensione</th></tr>
                        </thead>
                        <tbody>
                            <!--tr><td><a href="../games/app_NAME.html" data-translatable>NAME</a></td><td>1.0</td><td><i class="fa-solid fa-carrot"></i> </i></td></tr-->
                        </tbody>
                        <tbody>
                            <tr><td><a href="https://github.com/Rabbit-World/store/upload/main/apps" target="_blank" data-translatable>Insert an app... // Inserisci un app...</a></td><td data-translatable>beta</td><td>n/a</td></tr>
                            <tr><td><a href="https://rabbit-world.github.io/#contact" target="_blank" data-translatable>Request an app... // Richiedi un app...</a></td><td data-translatable>alpha</td><td>n/a</td></tr>
                        </tbody>
                    </table>
                    
                    <table>
                        <thead>
                            <tr><th data-translatable>Games // Giochi</th><th data-translatable>Version // Versione</th><th data-translatable>Dimension // Dimensione</th></tr>
                        </thead>
                        <tbody>
                            <!--tr><td><a href="../games/app_NAME.html" data-translatable>NAME</a></td><td>1.0 alpha</td><td><i class="fa-solid fa-carrot"></i> <i class="fa-solid fa-carrot"></i> <i class="fa-solid fa-carrot"></i></td></tr-->
                        </tbody>
                        <tbody>
                            <tr><td><a href="https://github.com/Rabbit-World/store/upload/main/games" target="_blank" data-translatable>Insert a game... // Inserisci un gioco...</a></td><td data-translatable>beta</td><td>n/a</td></tr>
                            <tr><td><a href="https://rabbit-world.github.io/#contact" target="_blank" data-translatable>Request a game... // Richiedi un gioco...</a></td><td data-translatable>alpha</td><td>n/a</td></tr>
                        </tbody>
                    </table>
                    
                    <table>
                        <thead>
                            <tr><th data-translatable>Tools // Strumenti</th><th data-translatable>Version // Versione</th><th data-translatable>Dimension // Dimensione</th></tr>
                        </thead>
                        <tbody>
                            <!--tr><td><a href="../tools/app_NAME.html" data-translatable>NAME</a></td><td>1.0</td><td><i class="fa-solid fa-carrot"></i></i></td></tr-->
                        </tbody>
                        <tbody>
                            <tr><td><a href="https://github.com/Rabbit-World/store/upload/main/tools" target="_blank" data-translatable>Insert a tool... // Inserisci un tool...</a></td><td data-translatable>beta</td><td>n/a</td></tr>
                            <tr><td><a href="https://rabbit-world.github.io/#contact" target="_blank" data-translatable>Request a tool... // Richiedi un tool...</a></td><td data-translatable>alpha</td><td>n/a</td></tr>
                        </tbody>
                    </table>
                    
                    <div class="box-white">
                    <!--div id="disqus_thread" style="padding:15px;"></div-->
                        <p><label for="feedback" data-translatable>Report a problem with the developer ${app}: // Segnala un problema con lo sviluppatore ${app}:</label><input id="feedback" type="text" /></p>
                        <p><a href="https://github.com/Rabbit-World/store/issues?q=state%3Aopen%20label%3A%22user%20report%22" target="_blank"><input type="submit" class="button red" value="Feedback" /></a></p>
                    </div>
                    
                </div><!--content-->
            
            </div><!--main-->
        
            <div id="sidebar">
            
                <div class="header">
                    <p class="title"><i class="fa-solid fa-carrot"></i> rabbit r1 App Store</p>
                </div><!--header-->
                
                <div class="content">
                    
                    <ul class="nav">
                        <li><a href="../apps/index.html"><span class="ico msg"><picture><source type="image/webp" srcset="../assets/apps/settings.webp"><img src="../assets/apps/settings.png" alt="-APP+"></picture></span><b data-translatable>Apps // Applicazioni</b></a></li>
                        <li><a href="../games/index.html"><span class="ico msg"><picture><source type="image/webp" srcset="../assets/apps/settings.webp"><img src="../assets/apps/settings.png" alt="-APP+"></picture></span><b data-translatable>Games // Giochi</b></a></li>
                        <li><a href="../tools/index.html"><span class="ico msg"><picture><source type="image/webp" srcset="../assets/apps/settings.webp"><img src="../assets/apps/settings.png" alt="-APP+"></picture></span><b data-translatable>Tools // Strumenti</b></a></li>
                        <li><a href="../info/settings.html"><span class="ico msg"><picture><source type="image/webp" srcset="../assets/apps/settings.webp"><img src="../assets/apps/settings.png" alt="-APP+"></picture></span><b data-translatable>Settings // Impostazioni</b></a></li>
                        <!--li><a href="https://github.com/Rabbit-World/store/upload/main/apps" target="_blank"><span class="ico msg"><picture><source type="image/webp" srcset="../assets/apps/app.webp"><img src="../assets/apps/app.png" alt="APP-"></picture></span><b data-translatable>Upload your app... // Inserisci la tua app...</b></a></li>
                        <li><a href="https://rabbit-world.github.io/#contact" target="_blank"><span class="ico msg"><picture><source type="image/webp" srcset="../assets/apps/app.webp"><img src="../assets/apps/app.png" alt="APP+"></picture></span><b data-translatable>Request your app... // Richiedi la tua app...</b></a></li-->
                    </ul>
                    
                    <p data-translatable><center><a href="https://www.buymeacoffee.com/RabbitWorld" target="_blank"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a carrot&emoji=🥕&slug=RabbitWorld&button_colour=058CF5&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a></center></p>
                    
                </div><!--content-->
                
            </div><!--sidebar-->
        
        </div><!--wrap-->... <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="RabbitWorld" data-description="Support me on Buy me a carrot!" data-message="Thank you for visiting. Now we can earn more carrot juice..." data-color="#FF813F" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
    
    </body>
    </html>
  `;
  
  // Crea un blob per il file HTML
  const blob = new Blob([htmlContent], { type: 'text/html' });
  
  // Crea un link per scaricare il file
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `app_${app}.html`;
  link.click();
});
