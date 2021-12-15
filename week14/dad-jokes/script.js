const jokeDisplay = document.getElementById("joke");

//Get Joke button listener
document.querySelector('button.btn-primary').addEventListener("click", function () {
    fetch("https://icanhazdadjoke.com/", {
        headers: {
            "Accept": "application/json"
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            jokeDisplay.textContent = data.joke;
        })
});

var canvas = document.querySelector("canvas");
 
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
 
            var l = canvas.getContext('2d');
            var x = canvas.getContext('2d');
 
       
 
            var x = Math.floor(Math.random() * innerWidth);
            var y = Math.floor(Math.random() * innerHeight);
            var vx = Math.floor(Math.random() * 5);
            var vy = Math.floor(Math.random() * 10);
            var radius = 20;
 
            move();
           
            // This function will do the animation
            function move() {
                requestAnimationFrame(move);
 
                l.clearRect(0, 0, innerWidth, innerHeight);
 
                // Creating a circle
               

                l.beginPath();
                l.fillStyle = "yellow";
                        
                l.arc(x, y, radius, 0, Math.PI * 2, false);
                l.fill();
 
                if (radius + x > innerWidth)
                    vx = 0 - vx;
 
                if (x - radius < 0)
                    vx = 0 - vx;
 
                if (y + radius > innerHeight)
                    vy = 0 - vy;
 
                if (y - radius < 0)
                    vy = 0 - vy;
 
                x = x + vx;
                y = y + vy;
 
            }



