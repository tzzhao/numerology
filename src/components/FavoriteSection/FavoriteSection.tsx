import React, { PureComponent } from "react";
import { connect, ConnectedProps } from "react-redux";
import { SavedWordsActions, SavedWordsSelectors } from "../../stores/savedWords.slice";
import { RootState } from "../../stores/store";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import { ChemicalElementsUtils } from "../../utils/chemicalElements.utils";
import { StringToNumberModel } from "../../interfaces/stringToNumber.interfaces";
import { StringToNumberUtils } from "../../utils/stringToNumber.utils";
import {ImportFavoriteModal} from './ImportFavoritesModal';
import {ExportFavoriteModal} from './ExportFavoritesModal';
import DeleteIcon from '@material-ui/icons/Delete';

interface FavoriteProps extends PropsFromRedux {

}

class FavoriteSectionBase extends PureComponent<FavoriteProps> {
    public render() {
        return <> 
        <ImportFavoriteModal />
        <ExportFavoriteModal />
        <TableContainer component={Paper}>
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell>Mot</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Element</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {this.renderRows()}
            </TableBody>
        </Table>
        </TableContainer>
        </>
    }

    private renderRows() {
        const favorites: StringToNumberModel[] = [];
        Object.keys(this.props.savedWords).forEach((key: any) => {
            const array = this.props.savedWords[key];
            array.forEach((el: string) => {
                const models = StringToNumberUtils.getModels(el);
                favorites.push({label: models.word, number: models.total});
            });
        });
        favorites.sort((a: StringToNumberModel, b: StringToNumberModel) => {
            if (a.label < b.label) {
                return -1;
            } else if (a.label > b.label) {
                return 1;
            }
            return 0;
        });
        return favorites.map((model) => this.renderRow(model.label, model.number));
    }

    private renderRow(label: string, number: number) {
        const chemicalElement = ChemicalElementsUtils.getChemicalElement(number);
        const relatedSavedWords = this.props.savedWords?.[number] || [];
        const linkedWords = relatedSavedWords.filter((el) => el !== label).join(', ');
        return <TableRow key={label}>
            <TableCell component="th" scope="row">{label}</TableCell>
            <TableCell>{number}</TableCell>
            <TableCell>{!!chemicalElement ? `${chemicalElement.name} (${chemicalElement.symbol})` : ''}</TableCell>
            <TableCell>{this.renderRemoveButton(label)}</TableCell>
        </TableRow>
    }

    private renderRemoveButton(label: string) {
        return <DeleteIcon className="delete-icon" onClick={() => this.props.removeWord(label)} />
    }
}

const mapState = (state: RootState) => ({
    savedWords: SavedWordsSelectors.selectSavedWords(state),
})

const mapDispatch = SavedWordsActions;

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;


export const FavoriteSection = connector(FavoriteSectionBase);