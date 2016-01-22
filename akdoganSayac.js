/* 
	Bu Js Dosyasi Vehbi Akdogan Tarafindan Kodlanmistir.
	E-Posta: mf.leqelyy@gmail.com
	Web: vehbiakdogan.com
*/

(function($){
	$.fn.akdoganSayac = function(config){
		
		var ayarlar = $.extend({
			'gun' : 10,
			'saat': 24,
			'dakika': 60,
			'saniye': 60
		},config);
		
		// ayarları aldık 
		return this.each(function(){
			
			var saniye = ayarlar.gun*60*60*24 + ayarlar.saat*60*60 + ayarlar.dakika*60+ ayarlar.saniye,
				sayacDiv = $(this);
			
			$.azalt = function(){
				saniye--;
				
					var gun  = Math.floor(saniye/(60*60*24)),
						saat = Math.floor(saniye/(60*60)),
						dakika = Math.floor( ((saniye - saat*60*60))/60) ,
						kalanSaniye =(saniye - ( saat*60*60 + dakika*60)) ;
						saat = saat > 24 ? saat % 24 : saat; 
						saat = saat > 9  ? saat : "0" + saat;
						dakika = dakika > 9 ? dakika : "0" + dakika;
						kalanSaniye = kalanSaniye > 9 ? kalanSaniye : "0" + kalanSaniye;
						
						sayacDiv.html(
							'<span class="saat">' + gun + '</span><span class="min">Gün</span> ' + 
							'<span class="saat">' + saat + '</span><span class="min">Saat</span> ' + 
							'<span class="dakika">' + dakika + '</span><span class="min">Dakika</span> ' + 
							'<span class="saniye">' + kalanSaniye + '</span><span class="min">Saniye</span>'
						);
						
					

				
				
			}
			setInterval('$.azalt()',1000);
			
			
		});
		
		
		
		
	}
	
})(jQuery);
