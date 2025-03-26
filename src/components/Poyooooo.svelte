<script>
    import { onMount, onDestroy } from 'svelte';
    
    let letters = [];
    let intervalId;
    
    function addLetter() {
        const id = Date.now(); // Unique ID for tracking
        letters = [...letters, { id }];
        
        // Remove letter after animation completes
        setTimeout(() => {
            letters = letters.filter(letter => letter.id !== id);
        }, 4000);
    }
    
    onMount(() => {
        // Add initial letter
        addLetter();
        
        // Set up interval for adding new letters
        intervalId = setInterval(addLetter, 2500);
    });
    
    onDestroy(() => {
        // Clean up interval when component is destroyed
        if (intervalId) clearInterval(intervalId);
    });
</script>

<style>
    @keyframes moveRightAndDisappear {
        0% {
            transform: translateX(0) translateY(20px);
            opacity: 0;
        }
        20% {
            transform: translateX(0) translateY(0);
            opacity: 1;
        }
        80% {
            transform: translateX(50px) translateY(0);
            opacity: 1;
        }
        100% {
            transform: translateX(100px) translateY(0);
            opacity: 0;
        }
    }
    
    .sliding-o {
        position: relative;
        display: inline-block;
        transform: translateX(100px) translateY(0);
        opacity: 0;
        animation: moveRightAndDisappear 3s forwards;
    }
</style>

<h1>
    Poy
    {#each letters as letter (letter.id)}
        <span class="sliding-o">o</span>
    {/each}
</h1>
