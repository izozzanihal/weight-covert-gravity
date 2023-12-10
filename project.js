function convertWeight() {
    const fromPlanet = document.getElementById('fromPlanet').value;
    const toPlanet = document.getElementById('toPlanet').value;
    const weight = parseFloat(document.getElementById('weight').value);

    const gravitationalAccelerations = {
        earth: 9.8,
        mercury: 3.7,
        venus: 8.87,
        mars: 3.71,
        jupiter: 24.79,
        saturn: 10.44,
        uranus: 8.69,
        neptune: 11.15,
        pluto: 0.62,
        sun: 274,
    };

    const fromGravity = gravitationalAccelerations[fromPlanet];
    const toGravity = gravitationalAccelerations[toPlanet];

    if (!isNaN(weight)) {
        const convertedWeight = weight * (toGravity / fromGravity);
        document.getElementById('result').innerText = `Weight on ${toPlanet}: ${convertedWeight.toFixed(2)} kg`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid weight.';
    }
}

// Populate planet options
const planetSelects = document.querySelectorAll('#fromPlanet, #toPlanet');
const planets = ['earth', 'mercury', 'venus', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune', 'pluto', 'sun'];

planets.forEach(planet => {
    planetSelects.forEach(select => {
        const option = document.createElement('option');
        option.value = planet;
        option.text = planet.charAt(0).toUpperCase() + planet.slice(1);
        select.add(option);
    });
});
