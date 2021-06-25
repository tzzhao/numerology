import React, { ChangeEvent, PureComponent } from 'react';
import {TextField} from '@material-ui/core';
import { StringToNumberSummary } from './StringToNumberSummary';


interface StringToNumberSectionProps {

}

interface StringToNumberSectionState {
    words: string
}

export class StringToNumberSection extends PureComponent<StringToNumberSectionProps, StringToNumberSectionState> {

    constructor(props: StringToNumberSectionProps) {
        super(props);
        this.state = {
            words: ''
        }
    }

    public render() {
        return (<>
            <TextField className="search-input" label="Recherche de mots" onChange={this.onInputChange} />
            <StringToNumberSummary words={this.state.words}/>
        </>);
    }

    private onInputChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        this.setState({
            words: event.target.value
        });
    }
}