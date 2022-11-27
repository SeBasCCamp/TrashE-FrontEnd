import {render, screen} from '@testing-library/react'
import Login from '../componentes/Login'
describe('Login component', () =>{

    //Si se encuentra en el doc
    test('El input del login se encuentra en el documento', async () =>{
        render(<Login />);
        const inputUsername = screen.getByRole('heading')
        expect(inputUsername).toBeInTheDocument();
    })

})