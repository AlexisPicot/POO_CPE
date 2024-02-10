<script lang="ts">
	import { onMount } from 'svelte'

	import Reveal from 'reveal.js'
	import Highlight from 'reveal.js/plugin/highlight/highlight'
	import Markdown from 'reveal.js/plugin/markdown/markdown'
	import Notes from 'reveal.js/plugin/notes/notes'
	import 'reveal.js/dist/reveal.css'
	import 'reveal.js/dist/theme/black.css'
	import 'reveal.js/plugin/highlight/monokai.css'
	import Presentation from './presentation.svelte'
	import plantumlEncoder from 'plantuml-encoder'

	onMount(() => {
		const deck = new Reveal({
			plugins: [Markdown, Highlight, Notes],
			autoAnimateEasing: 'ease',
			autoAnimateDuration: 1,
			autoAnimateUnmatched: true,
			controlsTutorial: true,
			slideNumber: 'c/t',

			hash: true,
			showNotes: true,
			mouseWheel: false,
			transition: 'zoom',
			highlight: {
				highlightOnLoad: true
			},
			minScale: 0.1,
			maxScale: 50.0,
			width: 1280,
			height: 720
			// controls: false,
			// progress: false
		})

		registerPlantUml(deck)
		deck.initialize({})
	})
	function registerPlantUml(deck: Reveal.Api) {
		deck.registerPlugin({
			id: 'plantuml',
			init(reveal) {
				reveal.addEventListener('ready', () => {
					const elements = document.querySelectorAll('pre code.language-plantuml')
					elements.forEach((element) => {
						const plantuml = element.textContent
						const img = document.createElement('img')
						img.src = ('//www.plantuml.com/plantuml/svg/' +
							plantumlEncoder.encode(plantuml!)) as string
						var oldElem = (element.parentElement as HTMLElement).closest('div.uml') as HTMLElement
						img.className = oldElem.className
						oldElem.outerHTML = img.outerHTML
					})
				})
			}
		})
	}
</script>

<div class="reveal">
	<div class="slides">
		<Presentation />
	</div>
</div>
