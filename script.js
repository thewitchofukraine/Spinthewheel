document.getElementById('spinButton').addEventListener('click', function() {
    const wheel = document.getElementById('wheel');
    const randomDegree = Math.floor(Math.random() * 360) + 360 * 3; // Add extra spins for effect
    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${randomDegree}deg)`;

    // Reset after spin
    setTimeout(() => {
        wheel.style.transition = 'none';
        const actualDegree = randomDegree % 360;
        wheel.style.transform = `rotate(${actualDegree}deg)`;
    }, 4000);
});
