import React from 'react';
import { makeStyles, Switch ,Hidden, Box, AppBar, Grid, Toolbar, IconButton, Typography, Button, List, Divider, ListItem, ListItemIcon, ListItemText, ListSubheader, Drawer, useTheme } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import VideoCall from '@material-ui/icons/VideoCall';
import MoreVert from '@material-ui/icons/MoreVert';
import Apps from '@material-ui/icons/Apps';
import HomeIcon from '@material-ui/icons/Home';
import Subscriptions from '@material-ui/icons/Subscriptions';
import Whatshot from '@material-ui/icons/Whatshot';
import VideoLibrary from '@material-ui/icons/VideoLibrary';
import History from '@material-ui/icons/History';
import AddCircle from '@material-ui/icons/AddCircle'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: theme.palette.background.dark
    },
    appBar: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1
    },
    logo: {
        height: 80,
        cursor: 'pointer'
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: 'none'
    },
    icons: {
        padding: theme.spacing(2)
    },
    menuIcon: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(4)
    },
    grow: {
        flexGrow: 1
    },
    listItensText: {
        fontSize: 14
    },
    listItem: {
        paddingTop: 4,
        paddingBottom: 4
    },
    subHeader: {
        textTransform: 'uppercase'
    }
}));

const videos = [
    {
        id: 1,
        title: 'Billie Eilish - my future (Live)',
        channel: 'Billie Eilis',
        views: '2,1 mi de visualizações',
        date: '19 de ago. de 2020',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb1.jpg'
    },
    {
        id: 2,
        title: 'Call of Duty Black Ops: Cold War - Official Teaser Trailer',
        channel: 'IGN',
        views: '2,2 mi de visualizações',
        date: '20 de ago. de 2020',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb2.jpg'
    },
    {
        id: 3,
        title: 'Alok, Martin Jensen, Jason Derulo - Dont Cry For Me',
        channel: 'Alok',
        views: '88,9 mil de visualizações',
        date: '13 de ago. de 2020',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb3.jpg'
    },
    {
        id: 4,
        title: 'PlayStation 5 – Play Has No Limits',
        channel: 'PlayStation',
        views: '681 mil de visualizações',
        date: '20 de ago. de 2020',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb4.jpg'
    },
    {
        id: 5,
        title: 'Frio no Acre, neve em São Paulo e gelo no Sul do Brasil',
        channel: 'Band Jornalismo',
        views: '116 mil de visualizações',
        date: '18 de ago. de 2020',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb5.jpg'
    },
    {
        id: 6,
        title: 'Maroon 5 - Girls Like You ft. Cardi B (Official Music Video)',
        channel: 'Maroon 5',
        views: '2,7 bi de visualizações',
        date: 'há 2 anos',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb6.jpg'
    },
    {
        id: 7,
        title: 'Butantan poderá ter vacina contra coronavírus registrada em ',
        channel: 'Vejapontocom',
        views: '47 mil de visualizações',
        date: 'há 1 semana',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb7.jpg'
    },
    {
        id: 8,
        title: 'MASTERCHEF BRASIL (18/08/2020) | PARTE 2 | EP 06 | TEMP 07',
        channel: 'MasterChef Brasil',
        views: '830 mil de visualizações',
        date: 'há 1 dia',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb8.jpg'
    },
    {
        id: 9,
        title: 'Billie Eilish - bad guy',
        channel: 'Billie Eilish',
        views: '946 mi de visualizações',
        date: 'há 1 ano',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb9.jpg'
    },
    {
        id: 10,
        title: 'DRAW MY LIFE - CANAL IN',
        channel: 'Canal in',
        views: '71 mil de visualizações',
        date: 'há 8 semanas',
        avatar: '/images/avatar.jpeg',
        thumb: '/images/thumb10.jpg'
    }
];

function Home({darkMode, setDarkMode}) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.root}>
            <AppBar color='inherit' className={classes.appBar}>
                <Toolbar>
                    <IconButton className={classes.menuIcon}>
                        <MenuIcon />
                    </IconButton>
                    <img src={theme.palette.type === 'dark' ? '/images/youtube-logo-branco.png' : '/images/youtube-logo.png'} alt="logo" className={classes.logo} />
                    <div className={classes.grow} />
                    <Switch value={darkMode} onChange={() => setDarkMode(!darkMode)}/>
                    <IconButton className={classes.icons}>
                        <VideoCall />
                    </IconButton>
                    <IconButton className={classes.icons}>
                        <Apps />
                    </IconButton>
                    <IconButton className={classes.icons}>
                        <MoreVert />
                    </IconButton>
                    <Button variant="outlined" color="secondary" startIcon={<AccountCircle />}>Fazer Login</Button>
                </Toolbar>
            </AppBar>

            <Box display='flex'>
                <Hidden mdDown>
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        <Toolbar />
                        <div className={classes.drawerContainer}>
                            <List>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                                    <ListItemText primary={'Inicio'} classes={{ primary: classes.listItensText }} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<Whatshot />}</ListItemIcon>
                                    <ListItemText primary={'Em alta'} classes={{ primary: classes.listItensText }} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                                    <ListItemText primary={'Inscrições'} classes={{ primary: classes.listItensText }} />
                                </ListItem>
                            </List>
                            <Divider />
                            <List>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
                                    <ListItemText primary={'Biblioteca'} classes={{ primary: classes.listItensText }} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<History />}</ListItemIcon>
                                    <ListItemText primary={'Historico'} classes={{ primary: classes.listItensText }} />
                                </ListItem>
                            </List>
                            <Divider />
                            <Box p={7}>
                                <Typography variant='body2'>
                                    Faça o login para curtir os videos, comentar e se inscrever.
                        </Typography>
                                <Box mt={2}>
                                    <Button variant='outlined' color='secondary' startIcon={<AddCircle />}>
                                        Fazer Login
                            </Button>
                                </Box>
                            </Box>
                            <Divider />
                            <List subheader={<ListSubheader component='div' id='nested-list-subheader' className={classes.subHeader}>O Melhor do Youtube</ListSubheader>}>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<AddCircle />}</ListItemIcon>
                                    <ListItemText primary={'Musica'} classes={{ primary: classes.listItensText }} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<AddCircle />}</ListItemIcon>
                                    <ListItemText primary={'Esportes'} classes={{ primary: classes.listItensText }} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<AddCircle />}</ListItemIcon>
                                    <ListItemText primary={'Jogos'} classes={{ primary: classes.listItensText }} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<AddCircle />}</ListItemIcon>
                                    <ListItemText primary={'Filmes'} classes={{ primary: classes.listItensText }} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<AddCircle />}</ListItemIcon>
                                    <ListItemText primary={'Noticias'} classes={{ primary: classes.listItensText }} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<AddCircle />}</ListItemIcon>
                                    <ListItemText primary={'Ao vivo'} classes={{ primary: classes.listItensText }} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<AddCircle />}</ListItemIcon>
                                    <ListItemText primary={'Destaques'} classes={{ primary: classes.listItensText }} />
                                </ListItem>
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<AddCircle />}</ListItemIcon>
                                    <ListItemText primary={'Videos 360'} classes={{ primary: classes.listItensText }} />
                                </ListItem>
                                <Divider />
                                <ListItem button classes={{ root: classes.listItem }}>
                                    <ListItemIcon>{<AddCircle />}</ListItemIcon>
                                    <ListItemText primary={'Procurar mais'} classes={{ primary: classes.listItensText }} />
                                </ListItem>
                            </List>
                        </div>
                    </Drawer>
                </Hidden>

                <Box p={8}>
                    <Toolbar />
                    <Typography variant='h5' color='textPrimary' style={{ fontWeight: 600 }}>
                        Recomendados
                    </Typography>

                    <Grid container spacing={5}>
                        {
                            videos.map((item, index) => (
                                <Grid item lg={3} md={4} sm={6} xs={12}>
                                    <Box>
                                        <img style={{ width: '100%' }} alt={item.title} src={item.thumb} />
                                        <Box>
                                            <Typography style={{ fontWeight: 600 }} gutterBottom variant='body1' color='textPrimary'>
                                                {item.title}
                                            </Typography>

                                            <Typography display='block' variant='body2' color='textSecondary'>
                                                {item.channel}
                                            </Typography>

                                            <Typography variant='body2' color='textSecondary'>
                                                {`${item.views} ° ${item.date}`}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            </Box>
        </div>
    );
}

export default Home;