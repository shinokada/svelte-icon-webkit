<script lang="ts">
  import { HighlightSvelte, Highlight } from 'svelte-rune-highlight';
  import markdown from 'svelte-rune-highlight/languages/markdown';
  // import classicdark from 'svelte-highlight/styles/classic-dark';
  let { code, codeLang }: { code: string; codeLang?: string } = $props();
</script>

<div
  class="mx-auto my-8 max-w-4xl rounded-md border border-gray-200 bg-gray-50 p-0.5 dark:border-gray-600 dark:bg-gray-700"
>
  {#if codeLang === 'md'}
    <Highlight language={markdown} {code} />
  {:else if code}
    <HighlightSvelte {code} />
  {:else}
    no code is provided
  {/if}
</div>

<!--
@component
[Go to docs](https://svelte-icon-webkit.codewithshin.com/)
## Props
@props: 
-->