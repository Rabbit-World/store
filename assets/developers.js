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
	
    <!--================== TRANSLATIONS ==================-->
    <script src="../assets/dom-i18n.js"></script>
	<script>
		function toggleLanguageDropdown() {
		  document.getElementById('language-dropdown').classList.toggle('show-dropdown');
		}

		function changeLanguage(lang, country) {
		  // Aggiorna la bandiera corrente
		  document.getElementById('current-flag').className = \`flag-icon flag-icon-\${country}\`;
		  
		  // Chiudi il dropdown
		  document.getElementById('language-dropdown').classList.remove('show-dropdown');
		  
		  // Qui puoi aggiungere la logica per cambiare la lingua del sito
		  console.log(\`Changing language to: \${lang}\`);
		}

		// Chiudi il dropdown se si clicca fuori
		window.onclick = function(event) {
		  if (!event.target.matches('.current-language')) {
			var dropdowns = document.getElementsByClassName("language-dropdown");
			for (var i = 0; i < dropdowns.length; i++) {
			  var openDropdown = dropdowns[i];
			  if (openDropdown.classList.contains('show-dropdown')) {
				openDropdown.classList.remove('show-dropdown');
			  }
			}
		  }
		}

		// Configurazione di dom-i18n
		var i18n = domI18n({
			selector: '[data-translatable]',
			separator: ' // ',
			languages: ['en', 'it', 'fr', 'de', 'es', 'ro', 'hi', 'ja', 'ko', 'br', 'ru', 'sv', 'bg', 'cs', 'da', 'nl', 'fi', 'el', 'id', 'ms', 'pl', 'pt', 'sk', 'cn', 'tw'],
			defaultLanguage: 'en'
		});

		// Funzione per rilevare la lingua del browser (versione corretta)
		function detectBrowserLanguage() {
			const browserLang = (navigator.language || navigator.userLanguage).split('-')[0]; // Estrae solo il codice principale
			const supportedLanguages = ['en', 'it', 'fr', 'de', 'es', 'ro', 'hi', 'ja', 'ko', 'br', 'ru', 'sv', 'bg', 'cs', 'da', 'nl', 'fi', 'el', 'id', 'ms', 'pl', 'pt', 'sk', 'cn', 'tw'];
			
			// Controlla sia la versione completa che quella base
			const exactMatch = supportedLanguages.find(lang => lang === (navigator.language || navigator.userLanguage));
			return exactMatch || supportedLanguages.includes(browserLang) ? browserLang : 'en';
		}

		// Mappatura completa bandiere (versione ottimizzata)
		function getCountryCode(lang) {
			const countryMap = {
				'en': 'us', 'it': 'it', 'fr': 'fr', 'de': 'de',
				'es': 'es', 'ro': 'ro', 'hi': 'in', 'ja': 'jp',
				'ko': 'kr', 'br': 'br', 'ru': 'ru', 'sv': 'se',
				'bg': 'bg', 'cs': 'cz', 'da': 'dk', 'nl': 'nl',
				'fi': 'fi', 'el': 'gr', 'id': 'id', 'ms': 'my',
				'pl': 'pl', 'pt': 'pt', 'sk': 'sk', 
				'cn': 'cn', 'tw': 'tw'
			};
			return countryMap[lang] || 'us';
		}

		// Funzione per aggiornare le immagini in base alla lingua
		function updateImages(language) {
		document.querySelectorAll('[data-translatable]').forEach(img => {
		  const newSrc = img.getAttribute(\`data-img-\${language}\`);
		  if (newSrc) {
			img.src = newSrc;
		  }
		});
		}
		
		// Funzione unificata per il cambio lingua
		function changeLanguage(lang) {
			const countryCode = getCountryCode(lang);
			document.getElementById('current-flag').className = \`flag-icon flag-icon-\${countryCode}\`;
			i18n.changeLanguage(lang);
			updateIframe(lang);
			updateImages(lang);
			updateEmailLink(lang);
			updateLanguageLink(lang);
		}

		// Inizializzazione corretta
		window.onload = function () {
			const detectedLang = detectBrowserLanguage();
			
			// Forza il formato delle lingue composte
			const fullLangMap = {
				//'pt': 'pt-PT',
				//'zh-CN': 'cn',
				//'zh-TW': 'tw'
			};
			
			const finalLang = fullLangMap[detectedLang] || detectedLang;
			
			if(i18n.languages.includes(finalLang)) {
				changeLanguage(finalLang);
			} else {
				changeLanguage(i18n.options.defaultLanguage);
			}			
		};
		
			// Modifica la funzione di inizializzazione
			window.onload = function () {
				const detectedLang = detectBrowserLanguage();
				
				// Mappatura completa per tutte le 25 lingue
				const fullLangMap = {
					//'pt': 'pt-PT',
					//'zh': 'zh-CN',
				};
				
				const finalLang = fullLangMap[detectedLang] || detectedLang;
				
				// Forza l'aggiornamento iniziale
				changeLanguage(finalLang);
				
				// Aggiornamento aggiuntivo dopo il rendering completo
				setTimeout(() => updateIframe(finalLang), 100);			
			};
		
		// Modifica la funzione updateIframe
		function updateIframe(language) {
			const iframe = document.getElementById('contactFormIframe');
			
			// Estrai la lingua base per i casi come 'pt-PT' → 'pt'
			const baseLang = language.split('-')[0];
			
			const urls = {
				'en': 'https://docs.google.com/forms/d/e/1FAIpQLSd95OyD0JKVtzcc16TTVxfiIO82E9SvKdAJCQZmJ7dXd1zQRw/viewform?embedded=true',
				'it': 'https://docs.google.com/forms/d/e/1FAIpQLScy0L5_efQgrDR_7dCDqSjK54UFzboFUpjt-EQu7qvKW7QrPw/viewform?embedded=true',
				'fr': 'https://docs.google.com/forms/d/e/1FAIpQLSfpX0HnsW-iP1BHDY3Qoj8wfhdUgmTvWX0uU62aOppFCt4yDg/viewform?embedded=true',
				'de': 'https://docs.google.com/forms/d/e/1FAIpQLSffXrMt7IgEJ_K0q4hx_3ZekIUDchuOEkuzqomLnJa3okHtqw/viewform?embedded=true',
				'es': 'https://docs.google.com/forms/d/e/1FAIpQLSeZuPckbL6NBUosufxKvjgkgWkuoordnLS0bXYzIs4Mj5GXSw/viewform?embedded=true',
				'ro': 'https://docs.google.com/forms/d/e/1FAIpQLSc3z6NMLzKTfxs9thT-6xG1z1j1BfIaEkSMg3XyM8I38uAKzQ/viewform?embedded=true',
			};

			// Doppio fallback: 1. Lingua specifica → 2. Lingua base → 3. Inglese
			const finalUrl = urls[language] || urls[baseLang] || urls['en'];
			
			iframe.src = finalUrl + '&cache=' + Date.now(); // Bypassa la cache
			iframe.onload = () => console.log('Iframe loaded for:', language);
			
			// Aggiornamento aggiuntivo dopo il rendering completo
			setTimeout(() => updateIframe(finalLang), 100);			
}
		// Modifica la funzione di inizializzazione
		window.onload = function () {
			const detectedLang = detectBrowserLanguage();
			
			// Mappatura completa per tutte le 25 lingue
			const fullLangMap = {
				'pt': 'pt-PT',
				'zh': 'zh-CN',
			};
			
			const finalLang = fullLangMap[detectedLang] || detectedLang;
			
			// Forza l'aggiornamento iniziale
			changeLanguage(finalLang);
			
			// Aggiornamento aggiuntivo dopo il rendering completo
			setTimeout(() => updateIframe(finalLang), 100);			
		};
		
		// Funzione per aggiornare i link al carrello in base alla lingua
		function updateLanguageLink(language) {
			const links = {
				'en': 'https://checkout.rabbit.tech/checkouts/co/e0dd6faf6485f0e5e891fa87f7b7d5fb?auto_redirect=false&edge_redirect=true&key=&locale=en&skip_shop_pay=true',
				'it': 'https://checkout.rabbit.tech/checkouts/co/092b6df5d9a13fbfdb17710de4ebca6d?auto_redirect=false&edge_redirect=true&key=&locale=it&skip_shop_pay=true',
				'fr': 'https://checkout.rabbit.tech/checkouts/co/22f0dc82090d79d95c8de6bbd30e3409?auto_redirect=false&edge_redirect=true&key=&locale=fr&skip_shop_pay=true',
				'de': 'https://checkout.rabbit.tech/checkouts/co/e140bfc775684cd02278dbf53a285a58?auto_redirect=false&edge_redirect=true&key=&locale=de&skip_shop_pay=true',
				'es': 'https://checkout.rabbit.tech/checkouts/co/e06737ffd1bd8dbf80e0027820d2200f?auto_redirect=false&edge_redirect=true&key=&locale=es&skip_shop_pay=true',
				'ro': 'https://checkout.rabbit.tech/checkouts/co/e140bfc775684cd02278dbf53a285a58?auto_redirect=false&edge_redirect=true&key=&locale=ro&skip_shop_pay=true',
				'hi': 'https://checkout.rabbit.tech/checkouts/co/e140bfc775684cd02278dbf53a285a58?auto_redirect=false&edge_redirect=true&key=&locale=hi&skip_shop_pay=true',
				'ja': 'https://checkout.rabbit.tech/checkouts/co/e140bfc775684cd02278dbf53a285a58?auto_redirect=false&edge_redirect=true&key=&locale=ja&skip_shop_pay=true',
				'ko': 'https://checkout.rabbit.tech/checkouts/co/e140bfc775684cd02278dbf53a285a58?auto_redirect=false&edge_redirect=true&key=&locale=ko&skip_shop_pay=true',
				'br': 'https://checkout.rabbit.tech/checkouts/co/e140bfc775684cd02278dbf53a285a58?auto_redirect=false&edge_redirect=true&key=&locale=en&skip_shop_pay=true',
				'ru': 'https://checkout.rabbit.tech/checkouts/co/e140bfc775684cd02278dbf53a285a58?auto_redirect=false&edge_redirect=true&key=&locale=ru&skip_shop_pay=true',
				'sv': 'https://checkout.rabbit.tech/checkouts/co/e140bfc775684cd02278dbf53a285a58?auto_redirect=false&edge_redirect=true&key=&locale=sv&skip_shop_pay=true',
				'bg': 'https://checkout.rabbit.tech/checkouts/co/e140bfc775684cd02278dbf53a285a58?auto_redirect=false&edge_redirect=true&key=&locale=bg&skip_shop_pay=true',
				'cs': 'https://checkout.rabbit.tech/checkouts/co/e140bfc775684cd02278dbf53a285a58?auto_redirect=false&edge_redirect=true&key=&locale=cs&skip_shop_pay=true',
				'da': 'https://checkout.rabbit.tech/checkouts/co/e140bfc775684cd02278dbf53a285a58?auto_redirect=false&edge_redirect=true&key=&locale=da&skip_shop_pay=true',
				'nl': 'https://checkout.rabbit.tech/checkouts/co/e140bfc775684cd02278dbf53a285a58?auto_redirect=false&edge_redirect=true&key=&locale=nl&skip_shop_pay=true',
				'fi': 'https://checkout.rabbit.tech/checkouts/co/e140bfc775684cd02278dbf53a285a58?auto_redirect=false&edge_redirect=true&key=&locale=fi&skip_shop_pay=true',
				'el': 'https://checkout.rabbit.tech/checkouts/co/e140bfc775684cd02278dbf53a285a58?auto_redirect=false&edge_redirect=true&key=&locale=el&skip_shop_pay=true',
				'id': 'https://checkout.rabbit.tech/checkouts/co/e140bfc775684cd02278dbf53a285a58?auto_redirect=false&edge_redirect=true&key=&locale=id&skip_shop_pay=true',
				'ms': 'https://checkout.rabbit.tech/checkouts/co/e140bfc775684cd02278dbf53a285a58?auto_redirect=false&edge_redirect=true&key=&locale=ms&skip_shop_pay=true',
				'pl': 'https://checkout.rabbit.tech/checkouts/co/e140bfc775684cd02278dbf53a285a58?auto_redirect=false&edge_redirect=true&key=&locale=pl&skip_shop_pay=true',
				'pt': 'https://checkout.rabbit.tech/checkouts/co/97475069f4e66225873e1123620f8195?auto_redirect=false&edge_redirect=true&key=&locale=pt-br&skip_shop_pay=true',
				'sk': 'https://checkout.rabbit.tech/checkouts/co/3414f4fcbdf4e311660a56568629d0e5?auto_redirect=false&edge_redirect=true&key=&locale=sk&skip_shop_pay=true',
				'cn': 'https://checkout.rabbit.tech/checkouts/co/e140bfc775684cd02278dbf53a285a58?auto_redirect=false&edge_redirect=true&key=&locale=zh-CN&skip_shop_pay=true',
				'tw': 'https://checkout.rabbit.tech/checkouts/co/e140bfc775684cd02278dbf53a285a58?auto_redirect=false&edge_redirect=true&key=&locale=zh-TW&skip_shop_pay=true'
			}
			;
			
			const languageLink = document.getElementById('languageLink');
			if (languageLink) {
				languageLink.href = links[language] || links['en'];
			}
		}

		// Funzione per aggiornare il link email in base alla lingua
		function updateEmailLink(language) {
			const emailLink = document.getElementById('emailLink');

			// Definizione dei link email per ogni lingua
			const emailLinks = {
			'en': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=Inquiry%20about%20rabbit%20r1&body=Hello%20Rabbit%2C%0A%0AI\'m%20interested%20in%20learning%20more%20about%20the%20rabbit%20r1.%0A%0ACould%20you%20please%20provide%20me%20with%20additional%20information%3F%0A%0AThank%20you%2C%0A[Your%20Name]">&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a>',
			'it': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=Richiesta%20informazioni%20su%20rabbit%20r1&body=Ciao%20Rabbit%2C%0A%0ASono%20interessato%20a%20saperne%20di%20pi%C3%B9%20sul%20rabbit%20r1.%0A%0APotresti%20fornirmi%20ulteriori%20informazioni%3F%0A%0AGrazie%2C%0A[Il%20tuo%20nome]">&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a>',
			'fr': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=Demande%20d\'informations%20sur%20rabbit%20r1&body=Bonjour%20Rabbit%2C%0A%0AJe%20suis%20int%C3%A9ress%C3%A9(e)%20%C3%A0%20en%20savoir%20plus%20sur%20le%20rabbit%20r1.%0A%0APourriez-vous%20me%20fournir%20des%20informations%20suppl%C3%A9mentaires%20%3F%0A%0AMerci%2C%0A[Votre%20nom]">&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a>',
			'de': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=Anfrage%20zu%20rabbit%20r1&body=Hallo%20Rabbit%2C%0A%0AIch%20interessiere%20mich%20f%C3%BCr%20den%20rabbit%20r1%20und%20w%C3%BCrde%20gerne%20mehr%20dar%C3%BCber%20erfahren.%0A%0AK%C3%B6nnten%20Sie%20mir%20bitte%20weitere%20Informationen%20zukommen%20lassen%3F%0A%0AVielen%20Dank%2C%0A[Ihr%20Name]">&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a>',
			'es': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=Consulta%20sobre%20rabbit%20r1&body=Hola%20Rabbit%2C%0A%0AEstoy%20interesado%20en%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20rabbit%20r1.%0A%0A%C2%BFPodr%C3%ADa%20proporcionarme%20informaci%C3%B3n%20adicional%3F%0A%0AGracias%2C%0A[Su%20nombre]">&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a>',
			'ro': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=Solicitare%20informa%C8%9Bii%20despre%20rabbit%20r1&body=Bun%C4%83%20ziua%20Rabbit%2C%0A%0ASunt%20interesat%20s%C4%83%20aflu%20mai%20multe%20despre%20rabbit%20r1.%0A%0AA%C8%9Bi%20putea%20s%C4%83-mi%20oferi%C8%9Bi%20informa%C8%9Bii%20suplimentare%3F%0A%0AV%C4%83%20mul%C8%9Bumesc%2C%0A[Numele%20dumneavoastr%C4%83]">&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a>',
			'hi': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=rabbit%20r1%20के%20बारे%20में%20पूछताछ&body=नमस्ते%20Rabbit%2C%0A%0Aमैं%20rabbit%20r1%20के%20बारे%20में%20और%20अधिक%20जानने%20में%20रुचि%20रखता%20हूं।%0A%0Aक्या%20आप%20कृपया%20मुझे%20अतिरिक्त%20जानकारी%20प्रदान%20कर%20सकते%20हैं%3F%0A%0Aधन्यवाद%2C%0A[आपका%20नाम]">&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a>',
			'ja': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=rabbit%20r1に関する問い合わせ&body=こんにちは%20Rabbit様%2C%0A%0Arabbit%20r1についてもっと詳しく知りたいと思っています。%0A%0A追加情報を提供していただけますでしょうか%3F%0A%0Aよろしくお願いいたします%2C%0A[あなたの名前]">&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a>',
			'ko': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=rabbit%20r1에%20대한%20문의&body=안녕하세요%20Rabbit님%2C%0A%0Arabbit%20r1에%20대해%20더%20자세히%20알고%20싶습니다.%0A%0A추가%20정보를%20제공해%20주실%20수%20있나요%3F%0A%0A감사합니다%2C%0A[귀하의%20이름]">&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a>',
			'br': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=Consulta%20sobre%20o%20rabbit%20r1&body=Olá%20Rabbit%2C%0A%0AEstou%20interessado%20em%20saber%20mais%20sobre%20o%20rabbit%20r1.%0A%0APoderia%20me%20fornecer%20informações%20adicionais%3F%0A%0AObrigado%2C%0A[Seu%20Nome]">&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a>',
			'ru': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=Запрос%20информации%20о%20rabbit%20r1&body=Здравствуйте%2C%20Rabbit%2C%0A%0AЯ%20заинтересован%20в%20получении%20дополнительной%20информации%20о%20rabbit%20r1.%0A%0AНе%20могли%20бы%20вы%20предоставить%20мне%20дополнительную%20информацию%3F%0A%0AСпасибо%2C%0A[Ваше%20имя]">&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;</a>',
			'sv': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=Förfrågan%20om%20rabbit%20r1&body=Hej%20Rabbit%2C%0A%0AJag%20är%20intresserad%20av%20att%20få%20veta%20mer%20om%20rabbit%20r1.%0A%0AKan%20du%20ge%20mig%20ytterligare%20information%3F%0A%0ATack%2C%0A[Ditt%20namn]">rabbit.clown.world+me@gmail.com</a>',
			'bg': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=Запитване%20за%20rabbit%20r1&body=Здравейте%20Rabbit%2C%0A%0AИнтересувам%20се%20да%20науча%20повече%20за%20rabbit%20r1.%0A%0AБихте%20ли%20ми%20предоставили%20допълнителна%20информация%3F%0A%0AБлагодаря%2C%0A[Вашето%20име]">rabbit.clown.world+me@gmail.com</a>',
			'cs': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=Dotaz%20ohledně%20rabbit%20r1&body=Dobrý%20den%20Rabbit%2C%0A%0AMám%20zájem%20dozvědět%20se%20více%20o%20rabbit%20r1.%0A%0AMohl%20byste%20mi%20prosím%20poskytnout%20další%20informace%3F%0A%0ADěkuji%2C%0A[Vaše%20jméno]">rabbit.clown.world+me@gmail.com</a>',
			'da': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=Forespørgsel%20om%20rabbit%20r1&body=Hej%20Rabbit%2C%0A%0AJeg%20er%20interesseret%20i%20at%20lære%20mere%20om%20rabbit%20r1.%0A%0AKan%20du%20venligst%20give%20mig%20yderligere%20information%3F%0A%0ATak%2C%0A[Dit%20navn]">rabbit.clown.world+me@gmail.com</a>',
			'nl': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=Vraag%20over%20rabbit%20r1&body=Hallo%20Rabbit%2C%0A%0AIk%20ben%20geïnteresseerd%20in%20meer%20informatie%20over%20de%20rabbit%20r1.%0A%0AKunt%20u%20mij%20alstublieft%20aanvullende%20informatie%20geven%3F%0A%0ABedankt%2C%0A[Uw%20naam]">rabbit.clown.world+me@gmail.com</a>',
			'fi': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=Tiedustelu%20rabbit%20r1:stä&body=Hei%20Rabbit%2C%0A%0AOlen%20kiinnostunut%20saamaan%20lisätietoa%20rabbit%20r1:stä.%0A%0AVoisitteko%20ystävällisesti%20antaa%20minulle%20lisätietoja%3F%0A%0AKiitos%2C%0A[Nimesi]">rabbit.clown.world+me@gmail.com</a>',
			'el': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=Ερώτηση%20σχετικά%20με%20το%20rabbit%20r1&body=Γεια%20σας%20Rabbit%2C%0A%0AΕνδιαφέρομαι%20να%20μάθω%20περισσότερα%20για%20το%20rabbit%20r1.%0A%0AΘα%20μπορούσατε%20να%20μου%20δώσετε%20επιπλέον%20πληροφορίες%3F%0A%0AΕυχαριστώ%2C%0A[Το%20όνομά%20σας]">rabbit.clown.world+me@gmail.com</a>',
			'id': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=Pertanyaan%20tentang%20rabbit%20r1&body=Halo%20Rabbit%2C%0A%0ASaya%20tertarik%20untuk%20mengetahui%20lebih%20lanjut%20tentang%20rabbit%20r1.%0A%0ABisakah%20Anda%20memberikan%20saya%20informasi%20tambahan%3F%0A%0ATerima%20kasih%2C%0A[Nama%20Anda]">rabbit.clown.world+me@gmail.com</a>',
			'ms': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=Pertanyaan%20mengenai%20rabbit%20r1&body=Hai%20Rabbit%2C%0A%0ASaya%20berminat%20untuk%20mengetahui%20lebih%20lanjut%20tentang%20rabbit%20r1.%0A%0ABolehkah%20anda%20memberikan%20saya%20maklumat%20tambahan%3F%0A%0ATerima%20kasih%2C%0A[Nama%20anda]">rabbit.clown.world+me@gmail.com</a>',
			'pl': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=Zapytanie%20o%20rabbit%20r1&body=Witaj%20Rabbit%2C%0A%0AJestem%20zainteresowany%20uzyskaniem%20więcej%20informacji%20na%20temat%20rabbit%20r1.%0A%0ACzy%20mógłbyś%20dostarczyć%20mi%20dodatkowych%20informacji%3F%0A%0ADziękuję%2C%0A[Twoje%20imię]">rabbit.clown.world+me@gmail.com</a>',
			'pt': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=Consulta%20sobre%20o%20rabbit%20r1&body=Olá%20Rabbit%2C%0A%0AEstou%20interessado%20em%20saber%20mais%20sobre%20o%20rabbit%20r1.%0A%0APoderia%20fornecer-me%20informações%20adicionais%3F%0A%0AObrigado%2C%0A[O%20seu%20nome]">rabbit.clown.world+me@gmail.com</a>',
			'sk': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=Otázka%20ohľadom%20rabbit%20r1&body=Dobrý%20deň%20Rabbit%2C%0A%0AMám%20záujem%20dozvedieť%20sa%20viac%20o%20rabbit%20r1.%0A%0AMohli%20by%20ste%20mi%20prosím%20poskytnúť%20ďalšie%20informácie%3F%0A%0AĎakujem%2C%0A[Vaše%20meno]">rabbit.clown.world+me@gmail.com</a>',
			'cn': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=关于rabbit%20r1的询问&body=你好%20Rabbit%2C%0A%0A我有兴趣了解更多关于rabbit%20r1的信息。%0A%0A您能否为我提供更多详细信息？%0A%0A谢谢%2C%0A[您的姓名]">rabbit.clown.world+me@gmail.com</a>',
			'tw': '<a href="mailto:&#114;&#97;&#98;&#98;&#105;&#116;&#46;&#99;&#108;&#111;&#119;&#110;&#46;&#119;&#111;&#114;&#108;&#100;&#43;&#109;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;?subject=關於rabbit%20r1的詢問&body=您好%20Rabbit%2C%0A%0A我有興趣了解更多關於rabbit%20r1的資訊。%0A%0A您能否為我提供更多詳細資訊？%0A%0A謝謝%2C%0A[您的姓名]">rabbit.clown.world+me@gmail.com</a>'
		};
		// Aggiorna l'HTML del link email
		emailLink.innerHTML = emailLinks[language] || emailLinks['en'];
		}
    </script>

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
