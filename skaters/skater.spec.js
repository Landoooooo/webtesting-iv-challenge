const Skater = require('./skaterModel');

const db = require('../data/dbConfig');

describe('Skaters Model', () => {
    describe('insert function', () => {
        it('should a skater to DB', async () => {
            await Skater.insert({name: 'Isaiah Ward'})

            const skater = await db('skater_table');
            expect(skater.length).toBe(1);
            expect(skater[0].name).toBe('Isaiah Ward')
        });

        it('should return skater id', async () => {
            const skater = await Skater.insert({name: "test_name"})

            expect(skater.id).toBe(1);
        })
    })

    describe('delete function', () => {
        it('should remove skater by id', () => {
            await Skater.remove(4)

            const skater = await db('skater_table')
            expect(skater.id).toBe(undefined);
        });
    })
})