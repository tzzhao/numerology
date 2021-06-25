import React, { PureComponent } from "react";
import { connect, ConnectedProps } from "react-redux";
import { SavedWordsActions, SavedWordsSelectors } from "../../stores/savedWords.slice";
import { RootState } from "../../stores/store";
import { Button, Dialog, DialogContent, DialogActions,DialogTitle, TextareaAutosize } from "@material-ui/core";

interface ImportFavoriteModal {
    opened: boolean;
}

class ImportFavoriteModalBase extends PureComponent<PropsFromRedux, ImportFavoriteModal> {

    private textFieldRef: React.RefObject<HTMLTextAreaElement> = React.createRef<HTMLTextAreaElement>();

    constructor(props: PropsFromRedux) {
        super(props);
        this.state = {
            opened: false
        }
    }

    public render() {
        return <>
        <Button type="button" onClick={this.handleOpen}>
        Importer
      </Button>

      <Dialog
        open={this.state.opened}
        onClose={this.handleClose}
      >
          <DialogTitle>Importer des favoris</DialogTitle>
                <DialogContent>
        <TextareaAutosize ref={this.textFieldRef} rowsMin={3} placeholder="Ajouter de nouveaux favoris separes par ','"/>
        </DialogContent>
        <DialogActions>
        <Button color="primary" onClick={this.importFavorites}>
            Importer
        </Button>
                <Button color="primary" onClick={this.handleClose}>
            Fermer
        </Button>
        </DialogActions>

      </Dialog>
      </>
    }

    private importFavorites = () => {
        const value = this.textFieldRef.current?.value;
        if (value) {
            this.props.importFavorites(value);
        }

        this.handleClose();
    };

    private handleOpen = () => {
        this.setState({opened: true});
    }

    private handleClose = () => {
        this.setState({opened: false});
    }
}

const mapState = (state: RootState) => ({
    savedWords: SavedWordsSelectors.selectSavedWords(state),
})

const mapDispatch = SavedWordsActions;

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;


export const ImportFavoriteModal = connector(ImportFavoriteModalBase);