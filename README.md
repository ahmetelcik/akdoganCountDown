akdoganCountDown
================

Basit Ve Kullanışlı bir geri sayım sayacı (count down)

Eklentimizin 3 parametresi var

<b>Gün:</b> Default Değeri 10
<b>Saat:</b> Default Değeri 24
<b>Dakika:</b> Default Değeri 60
<b>Saniye:</b> Default Değeri 60

Öncelikle jQuery Kütüphanesini Ve Eklenti Dosyamızı Çağırıyoruz.

```html

  <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
	<script type="text/javascript" src="akdoganSayac.js"></script>

```

Daha Sonra Eklentimizi Çalıştırıyoruz.


```js
<script type="text/javascript">
		$(function(){
		$(function(){
			$("#akdoganSayac").akdoganSayac({
				'gun' : 10, 
				'saat' : 3, 
				'dakika' : 2,
				'saniye' : 20
			});
		});
	});
	</script>

```

Şeklinde Kullanabilirsiniz. 

Tasarım Değiştirmek için Css İle Müdahale edebilirsiniz. 

Örnek: 
```css

span.gun {
	color:#aaa;
}
span.saat {
	color:#ccc;
}
span.dakika {
	color:#ddd;
}
span.saniye {
	color:#eee;
}
span.min {
	font-size: 20px;
}

```



<h2><a href="http://vehbiakdogan.com/demolar/geriSayimSayaci/index.html" target="_blank"> DEMO </a> </h2>
