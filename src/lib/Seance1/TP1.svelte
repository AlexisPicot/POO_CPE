<script>
	import Slide from '$lib/deck/slide.svelte'
	import Collections from './collections.svelte'
	import Encapsulation from './encapsulation.svelte'
	import Heritage from './heritage.svelte'
	import IntroductionClasses from './introductionClasses.svelte'
	import LangageJava from './langageJava.svelte'
	import Polymorphisme from './polymorphisme.svelte'
</script>

<Slide>
	<h1 class="capitalize">Séance 1</h1>
	<div class="fragment">
		<h2>Déroulé</h2>
		<p>CM : 1h, TD :1h, TP: 4h</p>
	</div>
</Slide>

<Slide>
	<LangageJava />
</Slide>
<Slide>
	<Collections />
</Slide>
<Slide>
	<IntroductionClasses />
</Slide>

<Slide>
	<Encapsulation />
</Slide>
<Slide>
	<Heritage />
</Slide>
<Slide>
	<Polymorphisme />
</Slide>
<Slide>
	<h1>TD</h1>
	<p>Question à compléter et à rendre sur <i>e-campus</i></p>
	<a href="/TD1.docx">TD1 (Version Word)</a><br />
	<a href="/TD1.html">TD1 (Version Web)</a>
</Slide>
<Slide>
	<h1>TP</h1>
	<p>Code source à déposer sur <i>e-campus</i></p>
	<a href="/EnvSetup.docx">Configuration VSCode (Version Word) </a> <br />
	
	<a href="/EnvSetup.html">Configuration VSCode (Version Web) </a> <br /><br />

	<a href="/TP1.docx">TP1 (Version Word) </a> <br />
	<a href="/TP1.html">TP1 (Version Web)</a><br /><br />
	<a href="/TP2.docx">TP2 (Version Word)</a><br />
	<a href="/TP2.html">TP2 (Version Web)</a>
</Slide>
