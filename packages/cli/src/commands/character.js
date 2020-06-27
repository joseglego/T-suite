const { Command, flags } = require('@oclif/command')

const { getCharacter } = require('@tibia-suite/scraper')

class CharacterCommand extends Command {
  async run () {
    const { flags } = this.parse(CharacterCommand)
    const name = flags.name

    const character = await getCharacter(name)
    this.log(character)
  }
}

CharacterCommand.description = 'Get the information from the character at tibia.com'

CharacterCommand.flags = {
  name: flags.string({ char: 'n', description: 'name character to get data' })
}

module.exports = CharacterCommand