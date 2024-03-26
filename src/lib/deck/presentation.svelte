<script lang="ts">
	import Tp1 from '$lib/Seance1/TP1.svelte'
	import Seance2 from '$lib/Seance2/Seance2.svelte'
	import Seance3 from '$lib/Seance3/Seance3.svelte'
	import Seance4 from '$lib/Seance4/Seance4.svelte'
	import Slide from './slide.svelte'
</script>

<Slide animate={true}>
	<h1 class="capitalize">Programmation Orientée objet</h1>
	<h2 class="capitalize">Java</h2>
	<a class="print:hidden" href="/?print-pdf" target="_blank"  >Version imprimable 🖨</a><br/>
	<a class="print:hidden" href="/?view=scroll" target="_blank"  >Version défilable</a>
</Slide>
<Tp1 />
<Seance2/>
<Seance3/>
<Seance4/>

<Slide data_background_color="#111165">
	<Slide>
		<h1>TD</h1>
		<p>Question à compléter et à rendre sur <i>e-campus</i></p>
		<ul>
			<li><a href="/TD1.docx">TD1 (Version Word)</a></li>
			<li><a href="/TD1.html">TD1 (Version Web)</a></li>
			<li><a href="/TD2.docx">TD2 (Version Word)</a></li>
			<li><a href="/TD2.html">TD2 (Version Web)</a></li>
			<li><a href="/Seance3/TD_Parc.html">TD3 (Version Web)</a></li>
			<li><a href="/Seance3/TD_DS.html">TD3.2 (Version Web)</a> <a href="/Seance3/TD_DS_Corrigé.pdf" target="_blank">(Corrigé)</a></li>
			<li><a href="/Seance4/TD4Bis.html">TD4 (Version Web)</a></li>
			<li><a href="/Seance4/TD4.html">TD4 Bis(Version Web)</a></li>
			
		</ul>
		
	</Slide>
	<Slide>
		<h1>TP</h1>
		<p>Code source à déposer sur <i>e-campus</i></p>
		<ul>
			<li><a href="/EnvSetup.html">Configuration VSCode (Version Web) </a> <br /></li>
			<li><a href="/TP1.html">TP1 (Version Web)</a><br /></li>
			<li><a href="/TP2.html">TP2 (Version Web)</a></li>
			<li><a href="/TP3.html">TP3 (Version Web)</a></li>
		</ul>
		
	</Slide>
	
</Slide>


<Slide> 
	<h1> Projet </h1>
	<a href="https://classroom.github.com/a/xM0RMk6x" target="_blank">Lien vers le projet</a>
	<ul><li>
		Projet en binome
	</li>
	<li>Commits réguliers sur Git</li>
</ul>
	</Slide>
<Slide>
	<p>Explications tirées de :</p>
	<ul>
		<li>
			<a href="https://gayerie.dev/epsi-b3-java/langage_java/">gayerie.dev</a>
		</li>
		<li>
			<!-- https://www-lisic.univ-littoral.fr/~fonlupt/Enseignement/2020/POO/index.html  -->
			<a href="https://www-lisic.univ-littoral.fr/~fonlupt/Enseignement/2020/POO/index.html"
				>POO - LISIC</a
			>
		</li>
	</ul>
</Slide>
