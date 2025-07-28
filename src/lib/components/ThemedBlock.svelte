<script lang="ts">
  export let color: 'primary' | 'secondary' | 'accent' | 'neutral' | 'info' | 'success' | 'warning' | 'error' = 'primary';
  export let className = '';
</script>

<div
  class={`p-4 rounded ${className}`}
  style={`background-color: hsl(var(--${color})); color: hsl(var(--${color}-content));`}
>
  <slot />
</div>
