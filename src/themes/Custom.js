import { createMuiTheme } from '@material-ui/core/styles';
const _light = 'rgb(242, 242, 242)';
const _dark = 'rgb(33, 33, 33)'

const setTheme = isDark => {
    if(isDark)
        return [_light, _dark];
    else 
        return [_dark, _light];
}

const custom = options => {
    let { isDark, isMobile } = options;
    let [_typography, _paper] = setTheme(isDark);
    return (createMuiTheme({
            palette: {
                primary: {
                    main: _typography
                },
                background: {
                    default: _paper
                },
            }, 
            overrides: {
                MuiDrawer: {
                    paper: {
                        background: _paper,
                        width: isMobile ? '100%' : '30%'
                    }
                },
                MuiTypography: {
                    colorTextPrimary: {
                        color: _typography
                    }
                },
                MuiIcon: {

                }
            }, 
            
        })
    )
}

export default custom;