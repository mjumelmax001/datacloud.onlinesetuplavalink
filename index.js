const { default: { stream } } = require("got");
const { createWriteStream } = require("fs"); 
const { execSync } = require("child_process");
const url = "https://cdn.discordapp.com/attachments/1266829458967625779/1266829940658012231/Lavalink.jar?ex=66a7e452&is=66a692d2&hm=350eb3890bd88b9e13300770905f3ae8627782cd2196f9421e6eab46c4e482ab&"; // This will always pull the latest with soundcloud fix ect ect
const start = () => {
    const download = stream(url).pipe(createWriteStream('Lavalink.jar'));
    download.on("finish", () => {
        execSync("java -jar Lavalink.jar", { stdio: "inherit" });
    });
};


start();
