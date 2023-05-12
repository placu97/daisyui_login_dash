import React,{useState} from 'react'
import {Link} from "react-router-dom"
import Modal from "react-modal"

Modal.setAppElement('#root');

export default function Activity() {
	const [modalIsOpen , setModalIsOpen] = useState(false)
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
            transform: 'translate(-50%, -50%)'
          }
        }}
      >
		<div className=" flex flex-col items-center font-kd text-black">
        <h2 className=" ">Crea nuova Attività</h2>
        <p>Descrizione del Modale</p>

		</div>
      </Modal>
	)
  return (
	<>
	{modalIsOpen && modal}
	<div className="flex flex-row bg-white w-full h-screen font-kd">
  		<nav className="h-screen flex flex-col w-[335px] bg-redfirb rounded-r-3xl space-x-4 space-y-4 relative">
			<img src="/images/Logo.png" className="p-4"></img>
			<button className="bg-white p-5 text-black font-bold text-2xl rounded-l-full w-full">Tennis</button>
			<button className="bg-red-300 p-5 text-black rounded-l-full">Calcio</button>
			<button className="bg-red-300 p-5 text-black rounded-l-full">Callistenic</button>
			<div className="absolute bottom-0 w-full pr-8 py-2 flex flex-row justify-between">
				<button className="bg-white rounded-full p-2 px-3 text-2xl">⚙️</button>
				<button className="bg-white rounded-full p-2 px-3 text-2xl"
				onClick={()=> setModalIsOpen(true)}>➕</button>
				<button className="bg-white rounded-full p-2 px-3 text-2xl">❓</button>
			</div>
		</nav>
  		<div className=" w-full overflow-auto bg-white text-black space-y-4 p-4">
		  {[...Array(30)].map((_, i) => (
     		 <div key={i} className="bg-gray-100 rounded-2xl p-10 ">oooooo</div>
   		  ))}
		</div>
		</div>
	</>
  )
}
