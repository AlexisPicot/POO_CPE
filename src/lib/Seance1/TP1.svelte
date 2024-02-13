<script>
	import Slide from '$lib/deck/slide.svelte'
	import Collections from './collections.svelte'
	import Encapsulation from './encapsulation.svelte'
	import Heritage from './heritage.svelte'
	import IntroductionClasses from './introductionClasses.svelte'
	import LangageJava from './langageJava.svelte'
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
	<h1>TD</h1>
	<p>Question à compléter et à rendre sur <i>e-campus</i></p>
	<a href="/TD1.docx">Version Word</a>
</Slide>
<Slide>
	<h1>TP</h1>
	<p>Code source à déposer sur <i>e-campus</i></p>
	<a href="/TP1.docx">Version Word</a>
</Slide>
<Slide>
	<p>Explications tirées de :	</p>
	<ul>
		<li>
			<a href="https://gayerie.dev/epsi-b3-java/langage_java/">gayerie.dev</a>
		<li>
			<!-- https://www-lisic.univ-littoral.fr/~fonlupt/Enseignement/2020/POO/index.html  -->
			<a href="https://www-lisic.univ-littoral.fr/~fonlupt/Enseignement/2020/POO/index.html">POO - LISIC</a>
		</li>
	</ul>
</Slide>
