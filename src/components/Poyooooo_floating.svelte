<script>
    import { onMount } from "svelte";

    let canvas;
    let ctx;
    const os = [];
    const numOs = 15;

    // Configuration
    const colors = ["#1B5E8E", "#1B5E8F", "#1B5EFF", "#1B5E8E"];

    class MovingO {
        constructor() {
            this.x = Math.random() * window.innerWidth;
            this.y = Math.random() * 100 + 20;
            this.size = Math.random() * 20 + 15;
            this.speedX = (Math.random() - 0.5) * 2;
            this.speedY = (Math.random() - 0.5) * 2;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.rotation = Math.random() * Math.PI * 2;
            this.rotationSpeed = (Math.random() - 0.5) * 0.05;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.rotation += this.rotationSpeed;

            // Bounce off edges
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.font = `${this.size}px`;
            ctx.fillStyle = this.color;
            ctx.fillText("o", -this.size / 4, this.size / 4);
            ctx.restore();
        }
    }

    onMount(() => {
        ctx = canvas.getContext("2d");

        // Set canvas dimensions
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = 120;
        }

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        // Create moving 'o's
        for (let i = 0; i < numOs; i++) {
            os.push(new MovingO());
        }

        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw and update all 'o's
            os.forEach((o) => {
                o.update();
                o.draw();
            });

            // Add text outline
            ctx.strokeStyle = "#11111B";
            ctx.lineWidth = 10;
            ctx.strokeText(
                "Poyo!",
                20,
                70
            );

            ctx.font = "bold 40px Karla";
            ctx.fillStyle = "#B8D2FF";
            ctx.fillText(
                "Poyo!",
                20,
                70,
            );

            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    });
</script>

<div class="banner">
    <canvas bind:this={canvas}></canvas>
</div>

<style>
    .banner {
        width: 100%;
        overflow: hidden;
        border-radius: 8px;
    }

    canvas {
        display: block;
    }
</style>
