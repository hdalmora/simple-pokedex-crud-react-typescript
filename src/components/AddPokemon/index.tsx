import React from "react";
import { PokemonModel } from "../../models/PokemonModel";
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { usePokedex } from "../../hooks/usePokedex";
import {
  TextField,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
} from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as S from "./styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

export default function AddPokemon() {
  const classes = useStyles();

  const { isFetchingPokedex, addPokemon } = usePokedex();
  const { handleSubmit, control } = useForm();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = (data: PokemonModel) => {
    setOpen(false);
    addPokemon(data);
  };

  if (isFetchingPokedex) return <></>;

  return (
    <S.Container>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        + Adicionar novo Pokemon
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Novo Pokemon</DialogTitle>
        <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            <DialogContentText>
              Preencha os campos abaixo com as informações do novo Pokemon
            </DialogContentText>

            <Controller
              name="pokemonName"
              control={control}
              defaultValue=""
              rules={{ required: "Nome é obrigatório", minLength: 5 }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Pokemon"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />

            <Controller
              name="strength"
              control={control}
              defaultValue=""
              rules={{
                required: "Força é obrigatória",
                min: 1,
                max: 100,
              }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Força"
                  variant="outlined"
                  type="number"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />

            <Controller
              name="pokemonImageUrl"
              control={control}
              defaultValue=""
              rules={{ required: "Imagem é obrigatória", minLength: 5 }}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label="Pokemon Image"
                  variant="outlined"
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
            />

            <br />
            <br />
            <FormLabel component="legend">Pokemon Type</FormLabel>

            <Controller
              name="pokemonType"
              control={control}
              defaultValue="Bug"
              render={({ field: { onChange, value } }) => (
                <RadioGroup
                  aria-label="pokemonTypeLabel"
                  name="pokemonTypeLabel"
                  value={value}
                  onChange={onChange}
                >
                  <FormControlLabel
                    value="Bug"
                    control={<Radio />}
                    label="Bug"
                  />
                  <FormControlLabel
                    value="Ghost"
                    control={<Radio />}
                    label="Ghost"
                  />
                  <FormControlLabel
                    value="Steel"
                    control={<Radio />}
                    label="Steel"
                  />
                  <FormControlLabel
                    value="Fire"
                    control={<Radio />}
                    label="Fire"
                  />
                  <FormControlLabel
                    value="Rock"
                    control={<Radio />}
                    label="Rock"
                  />
                  <FormControlLabel
                    value="Water"
                    control={<Radio />}
                    label="Water"
                  />
                  <FormControlLabel
                    value="Electric"
                    control={<Radio />}
                    label="Electric"
                  />
                  <FormControlLabel
                    value="Psychic"
                    control={<Radio />}
                    label="Psychic"
                  />
                </RadioGroup>
              )}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button type="submit" color="primary">
              Criar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </S.Container>
  );
}
