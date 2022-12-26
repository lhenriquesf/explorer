import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Container, Form } from "./styles";
import { Link } from "react-router-dom";


export function New(){
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input placeholder="Titulo"/>
                    <TextArea placeholder="Observacoes"/>

                    <Section title='Links Uteis'>
                        <NoteItem value="https://github.com/lhenriquesf"/>
                        <NoteItem isNew placeholder='Novo link' />
                    </Section>

                    <Section>
                        <div className="tags">
                        <NoteItem value="react"/>
                        <NoteItem isNew placeholder='Nova tag' />
                        </div>
                    </Section>
                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    )
}
