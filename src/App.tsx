import qrcode from './images/image-qr-code.png'
function Qrcode() {
  return (
    <div className="bg-white p-6 my-12 flex flex-col items-center justify-center w-full max-w-sm mx-auto rounded-xl">
      <img src={qrcode} alt="qr-code" className='rounded-lg' />
      <h1 className='text-center mt-6 text-blue-950 font-bold text-2xl '>Improve your front-end skills by building projects</h1>
      <p className='mt-4 text-center mx-4 text-gray-500'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>

    </div>
  )
}

export default Qrcode