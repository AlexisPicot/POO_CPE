<script lang="ts">
	import Slide from './slide.svelte'
	import Code from './code.svelte'
	import Markdown from './markdown.svelte'
	import Tp1 from '$lib/TP1/TP1.svelte'
</script>

<Slide />
<Slide animate={true}>
	<h1 class="capitalize">Programmation Orientée objet</h1>
	<h2 class="capitalize">Java</h2>
</Slide>
<Tp1 />
