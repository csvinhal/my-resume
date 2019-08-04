import { FormControl, Grid, Input, InputLabel, Paper, withStyles } from "@material-ui/core";
import React from "react";
import Layout from "../../../hoc/Layout";

const styles = theme => ({
    root: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(2),
    },
});

const submitHandler = () => {};
const inputChangedHandler = () => {};

const newResume = props => {
    const { classes } = props;
    return (
        <Layout>
            <Paper>
                <form onSubmit={submitHandler} noValidate>
                    <Grid container className={classes.root} direction="row" spacing={2}>
                        <Grid item xs={4}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="ff-name">Name</InputLabel>
                                <Input
                                    id="ff-name"
                                    name="name"
                                    autoComplete="off"
                                    autoFocus
                                    onChange={inputChangedHandler}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item xs={4}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="ff-email">E-mail</InputLabel>
                                <Input
                                    id="ff-email"
                                    name="email"
                                    autoComplete="off"
                                    autoFocus
                                    onChange={inputChangedHandler}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Layout>
    );
};

export default withStyles(styles)(newResume);
