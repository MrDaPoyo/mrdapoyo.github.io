<script>
    import { onMount } from 'svelte';
    let successiveOs = 0;
    
    function spawnNewFuckingO() {
        const o = document.createElement('span');
        o.textContent = 'o';
        o.style = 'height: 100%; display: flex; justify-content: center; align-items: center;';
        o.style.position = 'absolute';
        o.style.fontSize = `${Math.random() * 2}em`;
        o.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        o.classList.add('o');
        document.getElementById("successive-os").appendChild(o);
        
        // Add transition animation to move right
        o.style.transition = 'transform 2s linear';
        setTimeout(() => {
            o.style.transform = 'translateX(100vw)';
        }, 10);

        function checkIfOutOfBounds() {
            setTimeout(() => {
                // Check if element is still in the DOM before removing
                if (o.isConnected) {
                    o.remove();
                } else {
                    checkIfOutOfBounrds()
                }
            }, 500);
        }

        checkIfOutOfBounds();
    }

    onMount(() => {
        const interval = setInterval(() => {
        successiveOs++;
        spawnNewFuckingO();
        }, 150);
    
        return () => clearInterval(interval);
    });
</script>

<h1>Poy<span id="successive-os"></span></h1>

<style>
    h1, span {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: fit-content;
        position: relative;
    }

    h1 {
        font-size: 5em;
        justify-content: center;
        align-items: center;
        margin: 0;
    }
</style>