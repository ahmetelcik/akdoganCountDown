akdoganCountDown
================

Basit Ve Kullanışlı bir geri sayım sayacı (count down)

Eklentimizin Birparametresi var

<b>dakika:</b> Default Değeri 5

Öncelikle jQuery Kütüphanesini Ve Eklenti Dosyamızı Çağırıyoruz.

```html

  <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
	<script type="text/javascript" src="akdoganSayac.js"></script>

```

Daha Sonra Eklentimizi Çalıştırıyoruz.


```js
<script type="text/javascript">
		$(function(){
			$("#akdoganSayac").akdoganSayac({
				'dakika' : 120 // default değer 5dk
			});
	});
	</script>

```

Şeklinde Kullanabilirsiniz. 

Tasarım Değiştirmek için Css İle Müdahale edebilirsiniz. 

Örnek: 
```css

  span.saat {
			color:#aaa;
		}
		span.dakika {
			color:#cc;
		}
		span.saniye {
			color:#eee;
		}

```



<h2><a href="http://vehbiakdogan.com/demolar/geriSayimSayaci/index.html" target="_blank"> DEMO </a> </h2>
