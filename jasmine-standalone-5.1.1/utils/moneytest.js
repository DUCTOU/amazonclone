import {formatCurrency} from '../../scripts/utils/money.js';

if(formatCurrency(2095)==='20.95'){
  console.log('pass');
}
else{
  console.log('fail');
}

describe('test suite:frmework',()=>{
  it('converts cents into dollars',()=>{
    expect(formatCurrency(2095)).toEqual('20.95');

  });
});