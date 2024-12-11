import { sumar, emailIsValid } from './index';
import { describe, test, expect } from 'vitest';


describe('Email', ()=>{
    test('Email valido', ()=>{
        expect(emailIsValid('juan@gmail.com')).toBe(true);
    })

    test('Email invalido', ()=>{
        expect(emailIsValid('juan@gmail.com.')).toBe(false);
    })

    test('Email invalido', ()=>{
        expect(emailIsValid('juan@gmail.com@')).toBe(false);
    })

    test('Email invalido', ()=>{
        expect(emailIsValid('juan@gmail.com/')).toBe(false);
    })
})


describe('Sumar Positivos', ()=>{

    test('Sumamos dos numeros pares', ()=>{
        expect(sumar(6,8)).toBe(14);
    })

    test('Sumamos dos numeros impares', ()=>{
        expect(sumar(5,7)).toBe(12);
    })

})

describe('Sumar Negativos', ()=>{

    test('Sumamos dos numeros negativos pares', ()=>{
        expect(sumar(-6,-8)).toBe(-14);
    })

    test('Sumamos dos numeros negativos impares', ()=>{
        expect(sumar(-5,-7)).toBe(-12);
    })

})


