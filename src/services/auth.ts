export function signIn() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'IITvf8UY9phafEJkfcNacANLr5Ub9Bdj6VCf71z00CGcf2OJ1wv_WBIH6EiMor4KJXe6_lnwPBNlLCJsya1cidphcJMK41rW-uOnD-rwawg',
        email: 'eliezerdrum@gmail.com',
        senha: '123456',
      })
    }, 2000);
  });
}