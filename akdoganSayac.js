/* 
	Bu Js Dosyasi Vehbi Akdogan Tarafindan Kodlanmistir.
	E-Posta: mf.leqelyy@gmail.com
	Web: vehbiakdogan.com
*/

(function($){
	$.fn.akdoganSayac = function(config){
		
		var ayarlar = $.extend({
			'dakika' : 5
		},config);
		
		// ayarları aldık 
		return this.each(function(){
			
			var saniye = ayarlar.dakika * 60,
				sayacDiv = $(this);
			
			$.azalt = function(){
				saniye--;
				
					var saat = Math.floor(saniye/(60*60)),
						dakika = Math.floor( ((saniye - saat*60*60))/60) ,
						kalanSaniye =(saniye - ( saat*60*60 + dakika*60)) ;
						
						saat = saat > 9  ? saat : "0" + saat;
						dakika = dakika > 9 ? dakika : "0" + dakika;
						kalanSaniye = kalanSaniye > 9 ? kalanSaniye : "0" + kalanSaniye;
						
						sayacDiv.html(
							'<span class="saat">' + saat + '</span>:' + 
							'<span class="dakika">' + dakika + '</span>:' + 
							'<span class="saniye">' + kalanSaniye + '</span>'
						);
						
					

				
				
			}
			setInterval('$.azalt()',1000);
			
			
		});
		
		
		
		
	}
	
})(jQuery);
