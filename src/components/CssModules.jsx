import classes from './CssModules.module.css';

export const CssModules = () => {
    return (
        <div className={classes.container}>
            <p className={classes.title}>--CssModules--</p>
            <button className={classes.button}>FIGHT!!</button>
        </div>
    )

}