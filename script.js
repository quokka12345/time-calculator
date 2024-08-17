function calculateTotalTime() {
    let totalMinutes = 0;

    let oneMin = parseInt(document.getElementById("oneMin").value) || 0;
    let fiveMin = parseInt(document.getElementById("fiveMin").value) || 0;
    let fifteenMin = parseInt(document.getElementById("fifteenMin").value) || 0;
    let thirtyMin = parseInt(document.getElementById("thirtyMin").value) || 0;
    let sixtyMin = parseInt(document.getElementById("sixtyMin").value) || 0;
    let fourHr = parseInt(document.getElementById("fourHr").value) || 0;
    let eightHr = parseInt(document.getElementById("eightHr").value) || 0;
    let twelveHr = parseInt(document.getElementById("twelveHr").value) || 0;
    let fifteenHr = parseInt(document.getElementById("fifteenHr").value) || 0;
    let oneDay = parseInt(document.getElementById("oneDay").value) || 0;
    let threeDay = parseInt(document.getElementById("threeDay").value) || 0;

    totalMinutes += oneMin * 1;
    totalMinutes += fiveMin * 5;
    totalMinutes += fifteenMin * 15;
    totalMinutes += thirtyMin * 30;
    totalMinutes += sixtyMin * 60;
    totalMinutes += fourHr * 240;
    totalMinutes += eightHr * 480;
    totalMinutes += twelveHr * 720;
    totalMinutes += fifteenHr * 900;
    totalMinutes += oneDay * 1440;
    totalMinutes += threeDay * 4320;

    let days = Math.floor(totalMinutes / 1440);
    let hours = Math.floor((totalMinutes % 1440) / 60);
    let minutes = totalMinutes % 60;

    document.getElementById("output").innerText = `Total Time: ${days} days, ${hours} hours, ${minutes} minutes`;
}

function clearInputs() {
    document.querySelectorAll('input[type="number"]').forEach(input => input.value = 0);
    document.getElementById("output").innerText = "Total Time: 0 days, 0 hours, 0 minutes";
}

