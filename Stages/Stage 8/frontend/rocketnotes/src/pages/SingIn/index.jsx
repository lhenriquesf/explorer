import { Container, Form, Background } from "./styles";

import { Input } from "../../components/Input";
import {FiLogIn, FiLock, FiMail} from "react-icons/fi"
import { Button } from "../../components/Button";

export function SingIn(){
    return(
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar seus links úteis</p>

                <h2>Faça seu login</h2>
                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Entrar"/>

                <a href="#">Criar conta</a>

            </Form>

            <Background/>
        </Container>
    )
}