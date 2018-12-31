class Snowfall {
    constructor() {
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");

        document.body.appendChild(this.canvas);

        window.addEventListener("resize", () => this.onResize());

        this.onResize();

        this.updateBound = this.update.bind(this);

        requestAnimationFrame(this.updateBound);

        this.createSnowflakes();
    }

    onResize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    createSnowflakes() {
        let divider = 2;

        if (window.innerWidth < 600) {
            divider = 5;
        }

        const flakes = window.innerWidth / divider;

        this.snowflakes = [];

        for (let s = 0; s < flakes; s++) {
            this.snowflakes.push(new Snow());
        }
    }

    update() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        for (let flake of this.snowflakes) {
            flake.update();

            this.ctx.save();
            this.ctx.fillStyle = "#FFF";
            this.ctx.beginPath();
            this.ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
            this.ctx.closePath();
            this.ctx.globalAlpha = flake.alpha;
            this.ctx.fill();
            this.ctx.restore();
        }
        requestAnimationFrame(this.updateBound);
    }
}