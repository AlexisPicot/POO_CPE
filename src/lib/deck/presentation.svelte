<script lang="ts">
	import Tp1 from '$lib/Seance1/TP1.svelte'
	import Seance2 from '$lib/Seance2/Seance2.svelte'
	import Slide from './slide.svelte'
</script>

<Slide animate={true}>
	<h1 class="capitalize">Programmation Orientée objet</h1>
	<h2 class="capitalize">Java</h2>
</Slide>
<Tp1 />
<Seance2/>

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
