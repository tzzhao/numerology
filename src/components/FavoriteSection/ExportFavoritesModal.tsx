import React, { PureComponent } from "react";
import { connect, ConnectedProps } from "react-redux";
import { SavedWordsActions, SavedWordsSelectors } from "../../stores/savedWords.slice";
import { RootState } from "../../stores/store";
import { Button, Dialog,DialogActions, DialogContent,  DialogTitle, TextareaAutosize } from "@material-ui/core";

interface ExportFavoriteModal {
    opened: boolean;
}

class ExportFavoriteModalBase extends PureComponent<PropsFromRedux, ExportFavoriteModal> {

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
        Exporter
      </Button>
      <Dialog
        open={this.state.opened}
        onClose={this.handleClose}
      >
          <DialogTitle>Exporter les favoris</DialogTitle>
          <DialogContent>
          <TextareaAutosize readOnly ref={this.textFieldRef} rowsMin={3} defaultValue={this.getExportContent()}/>
          </DialogContent>
          <DialogActions>
                <Button color="primary" onClick={this.handleClose}>
            Fermer
        </Button>
        </DialogActions>
      </Dialog>
      </>
    }

    private handleOpen = () => {
        this.setState({opened: true});
    }

    private handleClose = () => {
        this.setState({opened: false});
    }

    private getExportContent = () => {
        let content = '';
        Object.keys(this.props.savedWords).forEach((key:any) => {
            this.props.savedWords[key].forEach((word: string) => {
                content += ((content.length >0) ? ',' : '') + word;
            })
        });
        return content;
    }
}

const mapState = (state: RootState) => ({
    savedWords: SavedWordsSelectors.selectSavedWords(state),
})

const mapDispatch = SavedWordsActions;

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;


export const ExportFavoriteModal = connector(ExportFavoriteModalBase);