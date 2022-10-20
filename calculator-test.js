describe('calculator functionality tests', function () {
  it('should test simple function connection', function () {
    expect(test(1, 2)).toEqual(3);
  });
  it('should test calculateMonthlyPayment', function () {
    expect(calculateMonthlyPayment({ rate: 0.12, amount: 5500, years: 4 })).toContain(144.84);
  });
  it('should calculate the monthly rate correctly', function () {
    expect(getCurrentUIValues()).toEqual({ amount: 5500, years: 4, rate: 0.12 });
  });

  // it('should return a result with 2 decimal places', function () {});

  /// etc
});
