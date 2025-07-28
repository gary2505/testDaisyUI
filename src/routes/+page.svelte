<script lang="ts">
  import { onMount } from 'svelte';
  import ThemedBlock from '$lib/components/ThemedBlock.svelte';

let theme: 'light' | 'dark' = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';

function applyTheme(theme: string) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme); // persist across reloads
  const el = document.getElementById('data-theme-value');
  if (el) el.textContent = theme;
}

  function toggleTheme() {
    theme = theme === 'light' ? 'dark' : 'light';
    applyTheme(theme);
  }

  onMount(() => {
    applyTheme(theme);

    const observer = new MutationObserver(() => {
      const current = document.documentElement.getAttribute('data-theme') || '(none)';
      const el = document.getElementById('data-theme-value');
      if (el) el.textContent = current;
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
  });
</script>

<main class="flex min-h-screen bg-base-200">
  <div class="flex-1 flex flex-col items-center justify-center">
    <div class="mb-2 text-xs opacity-70">
      <div>Current theme variable: <span class="font-mono">{theme}</span></div>
      <div>data-theme on html: <span class="font-mono" id="data-theme-value"></span></div>
    </div>

    <h1 class="text-3xl font-bold mb-6">
      DaisyUI Example – <span class="capitalize">{theme} theme</span>
    </h1>

    <button class="btn btn-primary mb-6" on:click={toggleTheme}>
      {theme === 'light' ? '🌙 Switch to dark' : '☀️ Switch to light'}
    </button>

    <ThemedBlock color="primary" className="mb-2">
      This block uses the current theme’s <b>primary</b> color.
    </ThemedBlock>
    <ThemedBlock color="secondary">
      This block uses the <b>secondary</b> color.
    </ThemedBlock>

    <!-- DaisyUI theme test block -->
    <div class="w-40 h-20 bg-base-200 border border-base-content flex items-center justify-center mt-4">
      <span class="text-base-content text-xs">bg-base-200 test</span>
    </div>

  
  </div>
  <aside class="w-[30%] min-h-screen bg-base-100 border-l border-base-content p-6 flex flex-col text-left text-base-content">
    <h2 class="font-bold text-lg mb-2">DaisyUI styles are not injected</h2>
    <p class="mb-2">Issue: No theme changed,</p>
    <p class="mb-2 font-semibold">Root Cause: DaisyUI styles are not injected</p>
    <p class="mb-2">Even though the classes are present, if <code>--b2</code>, <code>--bc</code>, etc., are missing in CSS, then DaisyUI's base theme definitions are not being included in the final build.</p>
    <p>This is a known issue with Tailwind CSS v4 and DaisyUI in some Vite + SvelteKit setups unless explicitly forced.</p>
  
<p>"@sveltejs/kit": "^2.9.0",
    "@sveltejs/vite-plugin-svelte": "^5.1.1",
    "@tailwindcss/postcss": "^4.1.11",
    "daisyui": "^5.0.47",
    "postcss": "^8.5.6",
    "svelte": "^5.0.0",
    "tailwindcss": "^4.1.11",
    "typescript": "~5.6.2",
    "vite": "^6.0.3"</p>
</aside>
</main>
