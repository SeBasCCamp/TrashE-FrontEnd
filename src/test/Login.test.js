import {render, screen} from '@testing-library/react'
import Login from '../componentes/Login'
import '@testing-library/jest-dom'
describe('Login component', () =>{

    //Si se encuentra en el doc
    test('El input del login se encuentra en el documento', () =>{
        render(<Login />);
        const inputUsername = screen.getByLabelText('Ingrese su correo')
        expect(inputUsername).toBeInTheDocument();
    })

})