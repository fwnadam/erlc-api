<h1 align="center">ER:LC API Wrapper</h1>

A easy to use, feature inclusive wrapper for the [Emergency Response: Liberty County API](https://apidocs.policeroleplay.community), allowing you to easily integrate the ER:LC API with your Node.js project.

### Installation

- Run `npm i node-fetch` in your directory, this is how your project interacts with the ER:LC API.
- Place the `api.js` folder into your directory, note you will have to change the path depending on where you put the file.

It's as simple as that, you can now use the ER:LC API wrapper in your project with ease.

### Example

To use the API wrapper in your project, import the function you want to use and ensure you have the API key for the private server.

```javascript
const { getServer } = require("api.js");
const serverKey = "pasteServerKeyHere";

const server = await getServer(serverKey);
```

> [!WARNING]
> You may have to change the require() function depending on where the files are located in your directory.

### Running Commands

You can run commands in a private server using the `runCommand()` function, the function works differently from other functions. The `runCommand()` function has Co-Owner level permissions in-game, and only works if the server is online[^1].

```javascript
const { runCommand } = require("api.js");
const serverKey = "pasteServerKeyHere";

const command = await runCommand(serverKey, `:m Hello World`);

if (command.status === 200) {
  console.log(`Command successful`);
} else if (command.status === 500) {
  console.log(`Server is offline`);
} else if (command.status === 403) {
  console.log(`Unauthorized`);
} else {
  console.log(`An error occured`);
}
```

> [!CAUTION]
> Ensure you follow the official [API Use Guidelines](https://apidocs.policeroleplay.community/api-use-guidelines) when running commands, do not use the API to nuke, raid or spam private servers.

### Global Token

If you have a Global API Key from PRC, use the `authorization.js` document. You will have to install [`dotenv`](https://www.npmjs.com/package/dotenv) and name your API Key variable `PRC_KEY`. Otherwise, you can change the Key in `authorization.js`, if you use a file such as `config.json`, or want it directly in the file[^2].

The wrapper with the Global API Key works the same as the one without it, though you have increased rate limits. Check out [this link](https://apidocs.policeroleplay.community/reference/rate-limits) to learn more about ER:LC API ratelimits.

### Credits

- Wrapper Development: [@fwnadam](https://github.com/fwnadam)
- API Development and Maintenance: [Police Roleplay Community](https://policeroleplay.community)

[^1]: For a server to be online, it has to have one or more player(s) in the private server.
[^2]: To do this, use "Find and Replace" to replace all the Authorization headers with your custom variable or key.
