import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import React, { PureComponent } from "react";
import { connect, ConnectedProps } from "react-redux";
import { StringToNumberModel } from "../../interfaces/stringToNumber.interfaces";
import { SavedWordsActions, SavedWordsSelectors } from "../../stores/savedWords.slice";
import { RootState } from "../../stores/store";
import { StringToNumberUtils } from "../../utils/stringToNumber.utils";
import { ChemicalElementsUtils} from '../../utils/chemicalElements.utils';
import StarIcon from '@material-ui/icons/Star';

interface StringToNumberSummaryProps extends PropsFromRedux {
    words: string
}

export class StringToNumberSummaryBase extends PureComponent<StringToNumberSummaryProps> {
    public render() {
        const models = StringToNumberUtils.getModels(this.props.words)
        return <TableContainer component={Paper}>
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell>Mot</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Element</TableCell>
                    <TableCell>Mots favoris similaires</TableCell>
                    <TableCell>Favoris</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {this.renderNumbers(models.models)}
            {models.models.length > 1 && this.renderTotal(models.word, models.total)}
            </TableBody>
        </Table>
        </TableContainer>
    }

    private renderNumbers(models: StringToNumberModel[]) {
        const labelSet = new Set<string>();
        const modelsToUse: StringToNumberModel[] = [];
        models.forEach((model: StringToNumberModel) => {
            if (!labelSet.has(model.label)) {
                modelsToUse.push(model);
                labelSet.add(model.label);
            }
        })
        return modelsToUse.map((model) => 
            this.renderRow(model.label, model.number)
        );
    }

    private renderTotal(words: string, total: number) {
        return this.renderRow(words, total);
    }

    private renderRow(label: string, number: number) {
        const chemicalElement = ChemicalElementsUtils.getChemicalElement(number);
        const relatedSavedWords = this.props.savedWords?.[number] || [];
        const linkedWords = relatedSavedWords.filter((el) => el !== label).join(', ');
        const isFavorite = relatedSavedWords.includes(label);
        return <TableRow key={label}>
            <TableCell component="th" scope="row">{label}</TableCell>
            <TableCell>{number}</TableCell>
            <TableCell>{!!chemicalElement ? `${chemicalElement.name} (${chemicalElement.symbol})` : ''}</TableCell>
            <TableCell>{linkedWords}</TableCell>
            <TableCell>{this.renderSaveButton(label, isFavorite)}</TableCell>
        </TableRow>
    }

    private renderSaveButton(label: string, isFavorite: boolean) {
        if (isFavorite) {
            return <StarIcon className="favorited-icon" onClick={() => this.props.removeWord(label)} />
        } else {
            return <StarIcon onClick={() => this.props.saveWord(label)} className="not-favorited-icon" />
        }
    }
}

const mapState = (state: RootState) => ({
    savedWords: SavedWordsSelectors.selectSavedWords(state),
})

const mapDispatch = SavedWordsActions;

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;


export const StringToNumberSummary = connector(StringToNumberSummaryBase);