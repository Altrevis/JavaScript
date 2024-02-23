function dogYears(planet, ageInSeconds) {
    const earthOrbitalPeriodInSeconds = 31557600;
    const orbitalPeriods = {
        earth: 1.0,
        mercury: 0.2408467,
        venus: 0.61519726,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132,
    };

    const ageInEarthYears = ageInSeconds / earthOrbitalPeriodInSeconds;
    const ageOnPlanet = ageInEarthYears / orbitalPeriods[planet] * 7; // Fix multiplication
    const roundedAge = Math.round(ageOnPlanet * 100) / 100;

    return roundedAge;
}

const dogAgeOnEarth = dogYears('earth', 1000000000);
console.log(`Le chien devrait avoir ${dogAgeOnEarth} ans sur la Terre.`);
const dogAgeOnMars = dogYears('mars', 1000000000);
console.log(`Le chien devrait avoir ${dogAgeOnMars} ans sur Mars.`);
