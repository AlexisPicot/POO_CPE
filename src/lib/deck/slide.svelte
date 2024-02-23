<script lang="ts">
	export let id: string | null = null
	export let animate = true
	export let restart = false
	
	export let className : string | null = null
</script>

<section
	id="{id}"
	class={className}
	data-auto-animate-id={id}
	data-auto-animate={animate || null}
	data-auto-animate-restart={restart || null}
>
	<slot />
</section>
