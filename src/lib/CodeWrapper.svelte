<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  interface Props {
    children: Snippet;
    c_w_div?: string;
  }

  let { children, c_w_div }: Props = $props();
</script>

<div
  class={twMerge(
    '_c_w_div_ mx-auto max-w-4xl rounded-md border border-gray-200 bg-white bg-gradient-to-r p-6 dark:border-gray-600 dark:bg-gray-900',
    c_w_div
  )}
>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://runes-webkit.codewithshin.com/)
## Props
@prop children
@prop c_w_div
-->
