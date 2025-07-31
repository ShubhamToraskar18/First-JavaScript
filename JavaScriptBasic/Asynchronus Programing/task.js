function Name1(callback, ...names) {
    console.log("Names received:", names);

    names.forEach((name, index) => {
        setTimeout(() => {
            callback(name);
        }, 2000 * (index + 1)); // stagger delay
    });
}

function Timer(name) {
    console.log("Welcome, " + name + "!");
}

Name1(Timer, "Shubham", "Ravi", "Priya", "Amit");
