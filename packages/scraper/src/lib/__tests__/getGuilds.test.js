const fetchHTML = require('../../utils/fetchHTML')
const notFoundError = require('../../utils/notFoundError')
const getGuilds = require('../getGuilds')

const guildsWorldNotFound = require('../../../test/stubs/guildsWorldNotFound')
const guildsPage = require('../../../test/stubs/guildsPage.js')

jest.mock('../../utils/fetchHTML')
jest.mock('../../utils/notFoundError')

describe('getGuilds', () => {
  it('throw error when world does not exist', async () => {
    fetchHTML.mockResolvedValue(guildsWorldNotFound)

    await getGuilds('Unknown World')
    expect(notFoundError).toHaveBeenNthCalledWith(1, 'World')
  })

  it('get guilds from a world', async () => {
    fetchHTML.mockResolvedValue(guildsPage)
    const guilds = await getGuilds('Mock Guilds')

    expect(guilds).toStrictEqual({
      world: 'Mock Guilds',
      active: [
        {
          logo: 'https://static.tibia.com/images/guildlogos/Airglow.gif',
          description: 'Gildia PVP. Organizujemy tez teamhunty i questy dla czlonkow gildi. Teamspeak wymagany. W sprawie dolaczenia skontaktuj sie z ktoryms z liderow.',
          name: 'Airglow'
        },
        {
          logo: 'https://static.tibia.com/images/guildlogos/Alanui_Institute.gif',
          description: 'Founded in 2018, The Alanui Institute mobilizes resources and tools for ideas and actions that transform Tibia. The institute work with leaders and social organizations and a global network of supporters to promote equality, social justice and opportunity in form of art for all players. It has classes in literature, acting, painting, sculpture, music, interiors and flowers design. It also work with various services on behalf of the community. The headquarters is on Harbour Street in Thais.',
          name: 'Alanui Institute'
        },
        {
          logo: 'https://static.tibia.com/images/guildlogos/Almans.gif',
          description: 'Komm, Junge, lach mit.',
          name: 'Almans'
        }
      ],
      formation: [
        {
          logo: 'https://static.tibia.com/images/community/default_logo.gif',
          description: '',
          name: 'Anime'
        },
        {
          logo: 'https://static.tibia.com/images/community/default_logo.gif',
          description: '',
          name: 'Blood Line'
        }
      ]
    })
  })
})
