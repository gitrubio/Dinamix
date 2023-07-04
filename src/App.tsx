import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  
	return (
		<Routes>
			30 <Route path='/' element={<p>asdasdas</p>} />
			31 <Route path='/auth' element={<>asa</>} />
			31 <Route path='*' element={<p> Not Found</p>} />
		</Routes>	
	)
}

export default App
