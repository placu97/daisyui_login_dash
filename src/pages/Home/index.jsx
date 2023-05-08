import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-yellow-100 font-kd">
      <nav className="bg-white py-2">
        <div className="container mx-auto px-4">
			{/* contiene Logo + Login/Register */}
          <div className="flex justify-between items-center">
            <Link to="/" className="">
				<img src="/images/Logo_bg-r.png" alt="Logo FirBuddy" className="w-1/2" />
            </Link>
            <ul className="flex space-x-4">
              <li>
                <Link
                  to="/login"
                  className="text-gray-800 hover:text-redfirb"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="bg-redfirb hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-3xl"
                >
                  Registrati
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Benvenuto sulla pagina test di FirBuddy !</h1>
        <p className="text-gray-700 leading-loose">
          Vuoi contattarci ? Compila il form, ogni input è ben accetto (:
        </p>
		
      </div>
    </div>
  );
}

export default Home;