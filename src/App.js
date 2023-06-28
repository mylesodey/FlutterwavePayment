import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3'
import './App.css';
import flutter from "./images/Flutterwave-New-2022.svg";
import paystack from "./images/paystack-2.svg"

function App() {
  const config = {
    public_key: 'FLWPUBK_TEST-089a59f302d6f9f5e4343293ad927f3e-X',
    tx_ref: Date.now(),
    amount: 100,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'user@gmail.com',
      phone_number: '070********',
      name: 'john doe',
    },
    customizations: {
      title: 'My store',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  // const fwConfig = {
  //   ...config,
  //   text: 'Pay with Flutterwave!',
  //   callback: (response) => {
  //      console.log(response);
  //     closePaymentModal() // this will close the modal programmatically
  //   },
  //   onClose: () => {},
  // };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      <h1>Choose Payment Option</h1>
      <div className="options">
        <button className='paystack'><a href="https://paystack.com/pay/-3ncb77lzi"><img className='payi' src={paystack} alt="paystack" /></a></button>


        <button className='flutter'
          onClick={() => {
            handleFlutterPayment({
              callback: (response) => {
                console.log(response);
                closePaymentModal() // this will close the modal programmatically
              },
              onClose: () => { },
            });
          }}
        >
          <img className='payi' src={flutter} alt="flutterwave" />
        </button>
      </div>
    </div>
  );
}

export default App;
