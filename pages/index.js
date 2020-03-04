import Head from 'next/head'
import Header from '../components/header'
import TableOfContents from '../components/TableOfContents'
import TechniqieBody from '../components/TechniqueBody'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: (theme.zIndex.drawer),
  },
  drawer: {
    width: '300px',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '300px',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

const Home = () => {
  const classes = useStyles();
  
  return (
  
  <div className={classes.root}>
    <Head>
      <title>Techniques</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <CssBaseline/>
    <Header args={{classArgs: classes}}/>

    <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <List>
          {['Processes', 'Process Elements', 'Techniques', 'Experieces'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Knowledge Resources', 'Examples', 'Templates'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
    </Drawer>
    <div className="grid">
      <main className={`grid__col-9 ${classes.content}`}>
      <div className={classes.toolbar} />
      <div className="dl-container">
          <TechniqieBody/>
        </div> 
      </main>
      <sidebar className={`grid__col-3 ${classes.content}`}>
        <div className="dl-container">
          <TableOfContents/>
        </div>
      </sidebar>

    </div>

    <footer>
    </footer>

    <style jsx>{`
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
          font-weight: 400;
          font-size: 1.2em;
      }
      .dl-container{
        padding: 3em 1em !important;
      }
      * {
        box-sizing: border-box;
      }

      .btn {
        background: blue; }
      
      /**grid Container*/
      .grid {
        display: grid;
        grid-template-columns: repeat(12, 1fr [col-start]);
        grid-auto-rows: auto;
        /**
              __col-start, col-end, row-end, row-start can be attached to item element
          */
        /** where column should end*/
        /** where column should start*/ }
        .grid__box {
          display: grid;
          grid-column-start: 1;
          grid-column-end: 13;
          grid-template-columns: repeat(12, 1fr); }
        .grid__box--uniform {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          grid-column-start: 1;
          grid-column-end: 13; }
        .grid__col-start-1 {
          grid-column-start: 1; }
        .grid__col-start-2 {
          grid-column-start: 2; }
        .grid__col-start-3 {
          grid-column-start: 3; }
        .grid__col-start-4 {
          grid-column-start: 4; }
        .grid__col-start-5 {
          grid-column-start: 5; }
        .grid__col-start-6 {
          grid-column-start: 6; }
        .grid__col-start-7 {
          grid-column-start: 7; }
        .grid__col-start-8 {
          grid-column-start: 8; }
        .grid__col-start-9 {
          grid-column-start: 9; }
        .grid__col-start-10 {
          grid-column-start: 10; }
        .grid__col-start-11 {
          grid-column-start: 11; }
        .grid__col-start-12 {
          grid-column-start: 12; }
        .grid__col-end-1 {
          grid-column-end: 1; }
        .grid__col-end-2 {
          grid-column-end: 2; }
        .grid__col-end-3 {
          grid-column-end: 3; }
        .grid__col-end-4 {
          grid-column-end: 4; }
        .grid__col-end-5 {
          grid-column-end: 5; }
        .grid__col-end-6 {
          grid-column-end: 6; }
        .grid__col-end-7 {
          grid-column-end: 7; }
        .grid__col-end-8 {
          grid-column-end: 8; }
        .grid__col-end-9 {
          grid-column-end: 9; }
        .grid__col-end-10 {
          grid-column-end: 10; }
        .grid__col-end-11 {
          grid-column-end: 11; }
        .grid__col-end-12 {
          grid-column-end: 12; }
        .grid__col-end-13 {
          grid-column-end: 13; }
        .grid__row-start-1 {
          grid-row-start: 1; }
        .grid__row-start-2 {
          grid-row-start: 2; }
        .grid__row-end-2 {
          grid-row-end: 2; }
        .grid__row-end-3 {
          grid-row-end: 3; }
        .grid__col-1 {
          grid-column-end: span 1; }
        .grid__col-2 {
          grid-column-end: span 2; }
        .grid__col-3 {
          grid-column-end: span 3; }
        .grid__col-4 {
          grid-column-end: span 4; }
        .grid__col-5 {
          grid-column-end: span 5; }
        .grid__col-6 {
          grid-column-end: span 6; }
        .grid__col-7 {
          grid-column-end: span 7; }
        .grid__col-8 {
          grid-column-end: span 8; }
        .grid__col-9 {
          grid-column-end: span 9; }
        .grid__col-10 {
          grid-column-end: span 10; }
        .grid__col-11 {
          grid-column-end: span 11; }
        .grid__col-12 {
          grid-column-end: span 12; }
        .grid__col {
          grid-column: span auto; }
      
      .header {
        padding: .5rem 1rem; }
        .header__nav-item {
          padding: 1em 0.5em;
          text-align: center; }
      
      .link {
        text-decoration: none;
        color: yellow; }
    `}</style>
  </div>
)
}

export default Home
