//selectores de las distintas pantallas
class selectors{
//pantalla login    
    login_select = {
        users: '.mat-mdc-form-field.ng-tns-c1798928316-1 > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex',
        password: '#password',
        btn_iniciar_sesion: '.mdc-button__label > .ng-tns-c1002258968-0',
        msg_invald:'#mat-mdc-error-2',
        pop_up_verif_pass:'.swal2-popup',
        btn_cancelar:'.swal2-cancel',
        btn_verif:'.swal2-confirm',
        btn_logout:':nth-child(2) > fuse-vertical-navigation-basic-item.ng-star-inserted > .fuse-vertical-navigation-item-wrapper > .mat-mdc-tooltip-trigger'
    }
    menu_colaborador = {
        Dashboard: ':nth-child(3) > :nth-child(2) > .fuse-vertical-navigation-item-wrapper > .mat-mdc-tooltip-trigger',
        Legajo: ':nth-child(3) > .fuse-vertical-navigation-item-wrapper > .mat-mdc-tooltip-trigger > .fuse-vertical-navigation-item-title-wrapper > .fuse-vertical-navigation-item-title > span',
        Ayuda: ':nth-child(4) > .fuse-vertical-navigation-item-wrapper > .mat-mdc-tooltip-trigger > .fuse-vertical-navigation-item-title-wrapper > .fuse-vertical-navigation-item-title > span'
    }
    legajo_colaborador = {
        MisNovedades: '#mat-tab-label-0-0',
        DatosBasicos: '#mat-tab-label-0-1',
        Legajo: '#mat-tab-label-0-2',
        SoloLectura:'.soloLect',
        Historial: '#mat-tab-label-2-0', 
        PeriodoCorriente: '#mat-tab-label-2-1',
        aFuturo: '#mat-tab-label-2-2',
        CrearNovedad: '#addNovedadButton'
    }

    menu_lider = {

    }
    menu_rrhh = {
        
    }
//proxima pantalla
}
module.exports = new selectors();