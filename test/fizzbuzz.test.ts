import {FizzBuzz} from "../src/fizzBuzz";

describe('3の倍数,5の倍数以外の時は入力された数字が返却される', () => {
  it('1が入力されたら文字列1がかえる', () => {
    let actual = new FizzBuzz().exec(1);
    expect('1').toEqual(actual);
  });
  it('2が入力されたら文字列2がかえる', () => {
    let actual = new FizzBuzz().exec(2);
    expect('2').toEqual(actual);
  });
});

describe('3の倍数の時、Fizzが返却される', () => {
  it('3が入力されたら文字列Fizzがかえる', () => {
    let actual = new FizzBuzz().exec(3);
    expect('Fizz').toEqual(actual);
  });
  it('6が入力されたら文字列Fizzがかえる', () => {
    let actual = new FizzBuzz().exec(6);
    expect('Fizz').toEqual(actual);
  });
});

describe('5の倍数の時、Buzzが返却される', () => {
  it('5が入力されたら文字列Buzzがかえる', () => {
    let actual = new FizzBuzz().exec(5);
    expect('Buzz').toEqual(actual);
  });
  it('10が入力されたら文字列Buzzがかえる', () => {
    let actual = new FizzBuzz().exec(10);
    expect('Buzz').toEqual(actual);
  });
});

describe('3の倍数かつ5の倍数の時、FizzBuzzが返却される', () => {
  it('15が入力されたら文字列FizzBuzzがかえる', () => {
    let actual = new FizzBuzz().exec(15);
    expect('FizzBuzz').toEqual(actual);
  });
  it('30が入力されたら文字列FizzBuzzがかえる', () => {
    let actual = new FizzBuzz().exec(30);
    expect('FizzBuzz').toEqual(actual);
  });
});