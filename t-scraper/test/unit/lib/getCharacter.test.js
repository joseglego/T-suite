const tabletojson = require('tabletojson').Tabletojson

const getCharacter = require('../../../src/libs/getCharacter')
const basicUser = require('../../stubs/basicUser.json')

jest.mock('tabletojson')

describe('getCharacter', () => {
  it('get basic character info', async () => {
    tabletojson.convertUrl.mockResolvedValue(basicUser)

    const user = await getCharacter('User')
    expect(user.characterInfo.name).toBe('User')
    expect(user.characterInfo.title).toBe('None (0 titles unlocked)')
    expect(user.characterInfo.sex).toBe('male')
    expect(user.characterInfo.vocation).toBe('Druid')
    expect(user.characterInfo.level).toBe('24')
    expect(user.characterInfo.achievementPoints).toBe('0')
    expect(user.characterInfo.world).toBe('Quintera')
    expect(user.characterInfo.residence).toBe('Thais')
    expect(user.characterInfo.lastLogin).toBe('Aug 26 2012, 07:34:49 CEST')
    expect(user.characterInfo.accountStatus).toBe('Free Account')
  })
})