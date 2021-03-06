import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


const SearchForm = props => {
    const [character, setCharacter] = useState('')

    const handleChanges = e => {
        setCharacter({
            ...character,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.getCharacter(character)
        setCharacter({character: ''})
    }

    return (
        <div className='searchForm'>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for='character'>Search for Amiibos</Label>
                    <Input
                     required
                     type='text'
                     name='character'
                     id='character'
                     placeholder='Character Name'
                     value={character.character}
                     onChange={handleChanges}
                    />
                </FormGroup>
                <Button color='primary'>Submit</Button>
            </Form>
        </div>
    )
}

export default SearchForm;