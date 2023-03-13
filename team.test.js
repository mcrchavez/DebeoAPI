const team = require('./src/team');


describe("Team", () => {
    beforeEach(() => {
        const nick = new userInfo("Nick", "nick@email.com")
        add_user("nick@email.com", )
    })

    test('Nick should be in team', () => { 
        expect( team.has_user("nick@email.com") ).toBe(true)
    })

    test('Bob should NOT be in team', () => { 
        expect( team.get_user("Bob@email.com") ).toBe(false)
    })

    test('Return nick from team', () => { 
        expect( team.get_user("nick@email.com") ).toBe(nick)
    })
});

