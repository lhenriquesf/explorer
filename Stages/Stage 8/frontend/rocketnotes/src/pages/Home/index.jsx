import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { FiPlus, FiSearch } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";


export function Home(){
    return (
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header />

            <Menu>
                <li><ButtonText title="Todos" isActive /></li>
                <li><ButtonText title="React" /></li>
                <li><ButtonText title="Nodejs" /></li>
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo titulo" icon={FiSearch}/>
            </Search>

            <Content>
                <Section title="Minhas notas">
                    <Note data={{
                        title: 'React',
                        tags: [
                            {id: 1, name: 'react'},
                            {id: 2, name: 'nodejs'}
                        ]}}/>
                </Section>
            </Content>

            <NewNote to="/New">
                <FiPlus />
                Criar nota
            </NewNote>
        </Container>
    )
};
