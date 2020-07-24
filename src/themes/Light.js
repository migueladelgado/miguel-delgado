import { createMuiTheme } from '@material-ui/core/styles';
const _light = 'rgb(242, 242, 242)';
const _dark = 'rgb(33, 33, 33)'
const light = createMuiTheme({
    palette: {
        primary: {
            main: _dark
        },
        background: {
            default: _light
        },
    }, 
    overrides: {
        MuiDrawer: {
            paper: {
                background: _light,
                width: '30%'
            }
        },
        MuiTypography: {
            colorTextPrimary: {
                color: _dark
            }
        }
    }, 
    
});

export default light;