<script lang="ts">
	export let name = 'example.md'
	export let external = false
</script>

{#if external}
	<section data-auto-animate data-markdown={name} />
{:else}
	<section data-markdown data-auto-animate>
		<div data-template>
			<slot />
		</div>
	</section>
{/if}
