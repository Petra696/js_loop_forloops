function assignGrade(score) {
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 65) {
        return "D";
    } else {
        return "E";
    }
}


for (let i = 0; i < assignGrade.length; i++) {
    if (i < 60) {
        console.log("For scoring " + [i + 60] + " points, you get an : E");
    }
    else if (i < 65) {
        console.log("For scoring " + [i + 65] + " points, you get an : D");
    }
    else if (i < 70) {
        console.log("For scoring " + [i + 70] + " points, you get an : C");
    } else if (i < 80) {
        console.log("For scoring " + [i + 80] + " points, you get an : B");
    } else if (i < 90) {
        console.log("For scoring " + [i + 90] + " points, you get an : A");
    };
}





