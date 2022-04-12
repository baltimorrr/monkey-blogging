import { Route, Routes } from 'react-router-dom'

import { AuthProvider } from 'contexts/AuthContext'

import SignUp from 'pages/SignUp'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
