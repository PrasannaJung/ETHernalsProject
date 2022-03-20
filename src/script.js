'use strict';

const payBtn = document.querySelector('.pay-btn');
const connectBtn = document.querySelector('.connect-btn');
const address = document.querySelector('#address');
const intern = document.querySelector('.intern');
const junior = document.querySelector('.junior');
const senior = document.querySelector('.senior');

const payments = [100, 200, 300];
const position = document.querySelector('.positions');

// console.log(position);

payBtn.addEventListener('click', function () {
  const finalAddress = address.value;
  const post = parseInt(position.value);

  //   console.log(post);

  //   console.log(finalAddress);
  //   console.log(position);
  if (post === 0) {
    console.log(
      `An amount of ${payments[0]} has been transferred to ${finalAddress}`,
    );
  } else if (post === 1) {
    console.log(
      `An amount of ${payments[1]} has been transferred to ${finalAddress}`,
    );
  } else if (post === 2) {
    console.log(
      `An amount of ${payments[2]} has been transferred to ${finalAddress}`,
    );
  }
});

;

const connectWallet = async function () {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const connection = await provider.send('eth_requestAccounts', []);
  console.log(provider);
  console.log(connection);
  connectBtn.textContent = 'Connected';
};

connectBtn.addEventListener('click', () => {
  connectWallet();
});
