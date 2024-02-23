<script>
	import Slide from '$lib/deck/slide.svelte'
	import Collections from './Collections.svelte'
	import Interfaces from './Interfaces.svelte'
	import Lambda from './Lambda.svelte'
	import Rappels from './Rappels.svelte'
</script>

<Slide id="seance-2">
	<h1 class="capitalize">Séance 2</h1>
	<div class="fragment">
		<h2>Déroulé</h2>
		<p>CM : 1h, TD :1h, TP: 4h</p>
	</div>
</Slide>
<Rappels/>
<Collections/>
<Interfaces/>
<Lambda/>
<Slide>
	<h1>TD 2</h1>
	<p>Question à compléter et à rendre sur <i>e-campus</i></p>
	<a href="/TD2.docx">TD2 (Version Word)</a><br />
	<a href="/TD2.html">TD2 (Version Web)</a>
</Slide>
<Slide>
	<h1>TP</h1>
	<p>Suite du TP précédent <br/>
		Code source à déposer sur <i>e-campus</i></p>
	<a href="/TP1.html">TP1 (Version Web)</a><br />
	<a href="/TP1.docx">TP1 (Version Word)</a><br /><br />
	<a href="/TP2.html">TP2 (Version Web)</a><br />
	<a href="/TP2.docx">TP2 (Version Word)</a>
</Slide>