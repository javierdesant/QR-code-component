import QRcode from "./components/QRcode"

function App() {

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="text-center">

          <QRcode />

          <div className="attribution text-center mt-5 text-xs">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="hover:underline">Frontend Mentor</a>. 
            Coded by <a href="https://github.com/javierdesant" className="hover:underline">JavierDeSant</a>.
          </div>  

        </div>
      </div>

    </>
  )
}

export default App
