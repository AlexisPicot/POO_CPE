<script lang="ts">
    export let className: string | null = null
</script>

<div class="{className} uml object-fit">
	<pre>
        <code class="no-highlight language-plantuml">
           <slot />
        </code>
    </pre>
</div>
