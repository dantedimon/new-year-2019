class CountDown {
    constructor (date) {
        this.date = new Date(date);

        this.countdown = null;

        this.d = document.getElementById("d");
        this.h = document.getElementById("h");
        this.m = document.getElementById("m");
        this.s = document.getElementById("s");
    }

    start () {
        this.countdown = setInterval(() => {
            const now   = new Date();
            const des   = this.date.getTime() - now.getTime();

            const days  = Math.floor(des / (1000 * 60 * 60 * 24));
            const hours = Math.floor((des % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins  = Math.floor((des % (1000 * 60 * 60)) / (1000 * 60));
            const secs  = Math.floor((des % (1000 * 60)) / 1000);

            this.d.innerHTML = this.getTrueNumber(days);
            this.h.innerHTML = this.getTrueNumber(hours);
            this.m.innerHTML = this.getTrueNumber(mins);
            this.s.innerHTML = this.getTrueNumber(secs);

            if (this.countdown <= 0) clearInterval(this.countdown);
        }, 1000);
    }

    end () {
        clearInterval(this.countdown);
    }

    getTrueNumber (x) {
        return x < 10 ? "0" + x : x
    };

}