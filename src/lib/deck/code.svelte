<script lang="ts">
	export let id: string | null = null
	export let lines: string | boolean | null = null
	export let noescape = false
	export let className: string | null = null
</script>

<pre class={(className || null) } data-id={id || null}>
  <code data-trim data-line-numbers={lines || true} data-noescape={noescape || null}>
    <slot />
  </code>
</pre>
