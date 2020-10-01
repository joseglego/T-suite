# Serverless API

**[WIP]** Through this API you can get information from Characters, Guilds and Worlds. This information is taken from https://www.tibia.com/ with one scraper (Also, from this project) and in the close future from our own database.

## Usage

The API is available in: https://tibia-suite-serverless.netlify.app/api

### Routes
* [`/worlds/[:world]`](#worlds)
* [`/characters/:character`](#characters)
* [`/guilds/:guild`](#guilds)

#### `/worlds/[:world]`
- **Worlds:** https://tibia-suite-serverless.netlify.app/api/worlds
- **World:** https://tibia-suite-serverless.netlify.app/api/worlds/Antica
- **World:** https://tibia-suite-serverless.netlify.app/api/worlds?name=Antica

#### `/characters/:character`
- **Character:** https://tibia-suite-serverless.netlify.app/api/characters/Adziio
- **Character:** https://tibia-suite-serverless.netlify.app/api/characters?name=Adziio

#### `/guilds/:guild`
- **Guilds:** https://tibia-suite-serverless.netlify.app/api/guilds?world=Antica
- **Guild:** https://tibia-suite-serverless.netlify.app/api/guilds/Airglow
- **Guild:** https://tibia-suite-serverless.netlify.app/api/guilds?name=Airglow
