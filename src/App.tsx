import Card from './Components/Card';
import QRCode from 'react-qr-code';

function App() {
  return (
    <>
      <div className="flex-col flex justify-center items-center">
        <div className=" pt-4 mb-28">
          <p className="text-center text-blue-900 text-3xl font-extrabold ">
            Voucher
          </p>
        </div>

        <QRCode
          size={256}
          style={{ height: 'auto', width: '30%' }}
          value={'https://www.google.com'}
          viewBox={`0 0 256 256`}
        />
        <p className="mt-2 font-light text-normal">Scan the QR code.</p>
      </div>

      <div className="absolute top-2/3 mt-20 w-full md:top-3/4">
        <Card />
      </div>
    </>
  );
}
export default App;
