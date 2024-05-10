var amna = {
    name: "Amna",
    age: 30,
    greet: function (message) {
        console.log("".concat(this.name, " says: ").concat(message));
    }
};
amna.greet("Hello TypeScript!");
