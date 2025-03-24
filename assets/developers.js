document.getElementById('page-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;
  
  // Crea il contenuto del file HTML
  const htmlContent = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<title>APPS | rabbit r1 App Store</title>
		<!--
		Minimal web app HTML/CSS template (Responsive Web Design, no JS required)

		@author DoDa
		@website https://rabbit-world.github.io
		@version 2.0
		@Last Updated: 16 March 2025
		@license Public Domain (free + no need to attribute, I'd be glad if you send me a link to your creation)


		Notes:
		- Header position bug when scrolling: When you scroll down, the header may move to the middle of the screen. Fix it by removing the # from the URL.

		-->
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
                
                <a class="left" href="../" data-translatable>Back // Indietro</a>
                <h1 class="title"><i class="fa-solid fa-carrot"></i> rabbit r1 App Store</h1>
                <a class="right" href="https://rabbit-world.github.io" data-translatable>Exit // Esci</a>
                
            </div><!--header-->
            
            <div class="content">
			
			<div class="slideshow-container">
				<div class="video-slide active">
					<iframe width="100%" height="450" src="https://www.youtube.com/embed/Fqr3OeWBizk?si=LIICvEs4jCyjTNG3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
				</div>
				<div class="video-slide">
					<iframe width="100%" height="450" src="https://www.youtube.com/embed/SCICYF8ml8g?si=v1zBqXEoBQtXWzv_" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
				</div>
				<div class="video-slide">
					<iframe width="100%" height="450" src="https://www.youtube.com/embed/SbzJEzfIoZ0?si=kESYgSynXOl4jRgF" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
				</div>

				<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
				<a class="next" onclick="plusSlides(1)">&#10095;</a>
			</div>
			
			<center>
			<!--span class="ico msg"><picture><source type="image/webp" srcset="assets/apps/store.webp" style="position: absolute; height: 10%; width: 10%; inset: 0px; color: transparent;"><img src="assets/apps/app.png" alt="rabbit r1 App Store"></picture></span-->
			<!--picture><source type="image/webp" srcset="assets/apps/store.webp" style="height: 400px; border-radius: 10px; object-fit: cover; color: transparent;"><img src="assets/apps/store.png" alt="rabbit r1 App Store"-->
			<!--iframe width="100%" height="450" src="https://www.youtube.com/embed/esS51zPFSTs?si=GpBKfvnq002FpWlH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe-->
			</center>
			
                <h2 class="title" data-translatable>Applications // Applicazioni</h2>

                <div class="box-white">
                    <br /> <strong><i class="fa-solid fa-carrot"></i> rabbit r1 App Store</strong><p data-translatable> is an experimental directory that offers innovative applications, games and tools for your rabbit r1 device. // è una directory sperimentale che offre applicazioni, giochi e strumenti innovativi per il tuo dispositivo rabbit r1.</p>
                    <p><a href="https://github.com/Rabbit-World/store" target="_blank" data-translatable>Contribute to the project! // Contribuisci al progetto!</a></p>
                </div><!--box-white-->
                
                <table>
                    <thead>
                        <tr><th data-translatable>Latest Apps // Ultime App</th><th data-translatable>Version // Versione</th><th data-translatable>Dimension // Dimensione</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><a href="../apps/app_conversions.html" data-translatable>Conversions</a></td><td><b data-translatable>Final // Finale</b></td><td><i class="fa-solid fa-carrot"></i></i></td></tr>
                        <tr><td><a href="https://github.com/Rabbit-World/store/upload/main/apps" target="_blank" data-translatable>Insert an app... // Inserisci un app...</a></td><td data-translatable>beta</td><td>n/a</td></tr>
                        <tr><td><a href="https://rabbit-world.github.io/#contact" target="_blank" data-translatable>Request an app... // Richiedi un app...</a></td><td data-translatable>alpha</td><td>n/a</td></tr>
                    </tbody>
                </table>
                
                <div class="box-white">
				<!--div id="disqus_thread" style="padding:15px;"></div-->
                    <p><label for="feedback" data-translatable>Report a problem with the rabbit r1 App Store: // Segnala un problema con il rabbit r1 App Store:</label><input id="feedback" type="text" /></p>
                    <p><a href="https://github.com/Rabbit-World/store/issues/new" target="_blank"><input type="submit" class="button red" value="Feedback" /></a></p>
                </div>
                
				<p class="note"><b data-translatable>Disclaimer: This APP STORE is not officially sponsored, endorsed, or affiliated with Rabbit Inc. // Disclaimer: Questo APP STORE non è ufficialmente sponsorizzato, approvato o affiliato a Rabbit Inc.</b></p>
				
            </div><!--content-->

        </div><!--main-->
    
        <div id="sidebar">
            
            <div class="header">
                <p class="title"><i class="fa-solid fa-carrot"></i> rabbit r1 App Store</p>
            </div><!--header-->
            
            <div class="content">
                
                <ul class="nav">
                    <li><a href="../apps/index.html" class="active"><span class="ico msg"><picture><source type="image/webp" srcset="../assets/apps/settings.webp"><img src="../assets/apps/settings.png" alt="-APP+"></picture></span><b data-translatable>Apps // Applicazioni</b><span class="info">1</span></a></li>
                    <li><a href="https://github.com/Rabbit-World/store/upload/main/apps" target="_blank"><span class="ico msg"><picture><source type="image/webp" srcset="../assets/apps/app.webp"><img src="../assets/apps/app.png" alt="APP-"></picture></span><b data-translatable>Upload an app... // Inserisci un app...</b></a></li>
                    <li><a href="https://rabbit-world.github.io/#contact" target="_blank"><span class="ico msg"><picture><source type="image/webp" srcset="../assets/apps/app.webp"><img src="../assets/apps/app.png" alt="APP+"></picture></span><b data-translatable>Request an app... // Richiedi un app...</b></a></li>
                    <li><a href="../apps/app_conversions.html"><span class="ico msg"><picture><source type="image/webp" srcset="../assets/apps/app_conversions.webp"><img src="../assets/apps/settings.png" alt="-APP+"></picture></span><b data-translatable>Conversions</b></a></li>
                    <li><a href="../games/index.html"><span class="ico msg"><picture><source type="image/webp" srcset="../assets/apps/settings.webp"><img src="../assets/apps/settings.png" alt="-APP+"></picture></span><b data-translatable>Games // Giochi</b></a></li>
                    <li><a href="../tools/index.html"><span class="ico msg"><picture><source type="image/webp" srcset="../assets/apps/settings.webp"><img src="../assets/apps/settings.png" alt="-APP+"></picture></span><b data-translatable>Tools // Strumenti</b></a></li>
                    <li><a href="../lab/index.html"><span class="ico msg"><picture><source type="image/webp" srcset="../assets/apps/settings.webp"><img src="../assets/apps/settings.png" alt="-APP+"></picture></span><b data-translatable>r1 LAB</b></a></li>
                    <li><a href="../info/settings.html"><span class="ico msg"><picture><source type="image/webp" srcset="../assets/apps/settings.webp"><img src="../assets/apps/settings.png" alt="-APP+"></picture></span><b data-translatable>Settings // Impostazioni</b><span><b data-translatable>Off // Off</b></span></a></li>
                </ul>
                
                <p data-translatable><center><a href="https://www.buymeacoffee.com/RabbitWorld" target="_blank"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a carrot&emoji=🥕&slug=RabbitWorld&button_colour=058CF5&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a></center></p>
                
            </div><!--content-->
            
        </div><!--sidebar-->
        
    </div><!--wrap-->

	<script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="RabbitWorld" data-description="Support me on Buy me a carrot!" data-message="Thank you for visiting. Now we can earn more carrot juice..." data-color="#FF813F" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
	
	<script>
		let slideIndex = 1;
		showSlides(slideIndex);

		function plusSlides(n) {
			showSlides(slideIndex += n);
		}

		function showSlides(n) {
			let i;
			let slides = document.getElementsByClassName("video-slide");
			if (n > slides.length) {slideIndex = 1}
			if (n < 1) {slideIndex = slides.length}
			for (i = 0; i < slides.length; i++) {
				slides[i].classList.remove("active");
			}
			slides[slideIndex-1].classList.add("active");
		}
	</script>
	
	<script>
		/**
		*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
		*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
		/*
		var disqus_config = function () {
		this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
		this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
		};
		*/
		(function() { // DON'T EDIT BELOW THIS LINE
		var d = document, s = d.createElement('script');
		s.src = 'https://rabbit-world.disqus.com/embed.js';
		s.setAttribute('data-timestamp', +new Date());
		(d.head || d.body).appendChild(s);
		})();
	</script>
	<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

    <script src="../assets/qrcode.min.js"></script>

</body>
</html>

  `;
  
  // Crea un blob per il file HTML
  const blob = new Blob([htmlContent], { type: 'text/html' });
  
  // Crea un link per scaricare il file
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${title}.html`;
  link.click();
});
