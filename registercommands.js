require("dotenv").config();
const { REST, Routes, ApplicationCommandOptionType } = require("discord.js");

const commands = [
  {
    name: "ping",
    description: "Repliys with your ping.",
  }
]
 

const rest = new REST({ version: "10" }).setToken(process.env.token);

(async () => {
  try {
    console.log("Registering global slash commands...");

    await rest.put(
      Routes.applicationCommands(process.env.client_id),
      { body: commands }
    );

    console.log("Global slash commands were registered successfully");
  } catch (error) {
    console.error(`Error registering global slash commands: ${error.message}`);
  }
})();
