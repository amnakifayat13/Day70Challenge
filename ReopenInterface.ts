interface settings {
    readonly theme: boolean;
    font: string
}

interface settings{
    sidebar: boolean;
}

interface settings{
    external: boolean;
}

let userSettings: settings = {
    theme: true,
    font: "Open Sans",
    sidebar: false,
    external: true,
}
console.log(userSettings);
