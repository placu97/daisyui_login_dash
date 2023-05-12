import {useRef, useState} from "react"
import {db} from "../../firebase"
import { setDoc, doc } from "firebase/firestore";
import {nanoid} from "nanoid"
import Modal from 'react-modal';

Modal.setAppElement('#root');

function Home() {
	//form
	const formNomeRef = useRef(null)
	const formEmailRef = useRef(null)
	const formTxtareaRef = useRef(null)
	const [error, setError] = useState(null);
	const [formInviato, setFormInviato] = useState(false);
	const mediaId = nanoid()
	const fileUploadRef = useRef(null);
	//modal
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const loginEmailRef = useRef(null)
	const loginPasswordRef = useRef(null)


	const modal = (
		<Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} shouldCloseOnOverlayClick={false}
		style={{
			overlay: {
				backgroundColor: 'rgba(0, 0, 0, 0.5)'
			},
			content: {
				top: '50%',
				left: '50%',
				right: 'auto',
				bottom: 'auto',
				marginRight: '-50%',
				borderRadius: '20px',
				transform: 'translate(-50%, -50%)'
			}
		}}>
			<form className="flex flex-col items-center space-y-3 font-kd text-black">
				<h1 className="text-2xl font-bold">Login</h1>
				<div>
					<div className="border-b border-gray-500 border-opacity-50 border-2 w-full"></div>
				</div>
				<input placeholder="Email📧" ref={loginEmailRef} className="rounded-3xl p-3 bg-white border-4 border-redfirb" />
				<input placeholder="Password🔑" ref={loginPasswordRef} className="rounded-3xl p-3 bg-white border-4 border-redfirb" />
				<button className="bg-redfirb p-2 px-6 rounded-3xl text-white text-2xl">Invia</button>
			</form>
		</Modal>
		)
	

	async function handleFormSubmit(event) {
		event.preventDefault();
		const name = formNomeRef.current.value;
		const email = formEmailRef.current.value.trim();
		const message = formTxtareaRef.current.value;
		try {
			await setDoc(doc(db, "messaggi", email), {
				email: email,
				name: name,
				message: message,
				url : "https://cdn.firbuddy.com/"+email+"/"+mediaId
			});
			console.log("Document written");
			// localStorage.setItem('formInviato', new Date().getTime() + 1000 * 60 * 60 * 24);
			localStorage.setItem('formInviato', 'true');
			if (localStorage.getItem('formInviato') === 'true') {
				setFormInviato(true);
				console.log("form inviato")
			}
			// Upload R2
			const fileUpload = fileUploadRef.current.files[0];
			if (fileUpload) {
				const responsePresigned = await fetch('https://presignedunkeyed.tresorh222.workers.dev/', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						email: email,
						mediaId: mediaId
					})
				});
				const presignedUrl = await responsePresigned.text()
				const responseUploadToR2 = await fetch(presignedUrl, {
					method: 'POST',
					body: fileUpload
				});
			}
		} catch (e) {
			console.error("Error adding document: ", e);
			setError(e.message);
		}
	}

  return (
    <div className=" font-kd text-black bg-white h-screen">
      <header className="bg-redfirb py-2 rounded-b-3xl">
        <div className="container mx-auto px-4">
			{/* contiene Logo + Login/Register */}
          <div className="flex justify-between items-center">
            <button to="/" className="w-[14%] md:w-[14%] sm:w-[19%]">
				<img src="/images/Logo.png" alt="Logo FirBuddy" className="" />
            </button>
            <ul className="flex space-x-4">
              <li>
                <button onClick={()=> setModalIsOpen(true)} className="text-white hover:bg-white hover:text-redfirb p-3 rounded-3xl">
                  Login
                </button>
				{modalIsOpen && modal}
              </li>
              <li>
                <button className="bg-white hover:bg-yellow-400 text-redfirb font-bold py-3 px-4 rounded-3xl">
                  Registrati
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold  mb-4">Benvenuto sulla pagina test di FirBuddy 🔥</h1>
		<p>Trova attività che fanno le persone come te, o come vorresti essere</p>
		<h1>Tutte le persone registrate sono state prima controllate</h1>
		<br/>
		{/* form non_inviato vs inviato: prima è presente dopo no */}
		{ !formInviato ? (
			<form className="w-full max-w-[600px] border-8 border-redfirb rounded-3xl justify-center  flex flex-col p-4 space-y-3">
				<p className="font-semibold text-center leading-loose ">Vuoi contattarci ☎️? Compila il form, ogni input è ben accetto (:</p>
				<input placeholder="Inserisci il tuo nome🖊️" type="email" required ref={formNomeRef} className="bg-white border-4 border-redfirb rounded-3xl p-2"/>	
				<input placeholder="La tua Email📧, se vuoi ricevere risposta da noi" type="email" required ref={formEmailRef} className="bg-white border-4 border-redfirb rounded-3xl p-2"/>
				<textarea placeholder="Cosa ci vuoi dire ⁉️" ref={formTxtareaRef} className="bg-white border-4 border-redfirb rounded-3xl p-2 h-[130px]" />
				<div className="flex-row flex justify-center space-x-4">
					<input type="file" ref={fileUploadRef} className="bg-white text-redfirb text-xl border-4 border-redfirb rounded-3xl py-2 px-4 "  />
					<button type="submit" onClick={handleFormSubmit} className="bg-redfirb text-white font-bold text-2xl rounded-3xl py-2 px-20 ">
						<div className="flex flex-row justify-center items-center">
							Invia<div className="bg-white rounded-full px-1 mx-1">📩</div>
						</div>
					</button>
				</div>
			</form> ) :
			(
				<div className="text-2xl font-semibold text-redfirb">Grazie! Riceverai una mail dal nostro teammm </div>
			)
		}
      </div>
    </div>
  );
}

export default Home;