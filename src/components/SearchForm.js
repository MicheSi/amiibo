import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const SearchForm = props => {
    const [character, setCharacter] = useState('')

    const handleChanges = e => {
        setCharacter( {
            ...character,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.getCharacter(character)
        setCharacter('')
    }

    return (
        <div className='searchForm'>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for='character'>Search for Amiibos</Label>
                    <Input
                     type='text'
                     name='character'
                     id='character'
                     placeholder='Search for Character'
                     value={character.character}
                     onChange={handleChanges}
                    />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default SearchForm;