import { dashed } from './formatString'

test( 'dashed(): returns null if not string', () => {
  expect(
    dashed( 1 ),
  ).toBe( null )
  expect(
    dashed( { object: true } ),
  ).toBe( null )
} )
test( 'dashed(): string is lowercase', () => {
  expect(
    dashed( 'CaPiTaLiZed' ),
  ).toBe( 'capitalized' )
} )
test( 'dashed(): string is only alphanumeric characters', () => {
  expect(
    dashed( "p@ssw0r'd" ),
  ).toBe( 'pssw0rd' )
} )
test( 'dashed(): spaces become dashes', () => {
  expect(
    dashed( 'spaces   become dashes' ),
  ).toBe( 'spaces-become-dashes' )
} )
