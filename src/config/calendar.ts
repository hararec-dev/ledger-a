import { LocaleConfig } from 'react-native-calendars';

export const configureCalendarLocale = (): void => {
    LocaleConfig.locales.es = {
        monthNames: [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre',
        ],
        monthNamesShort: [
            'Ene.',
            'Feb.',
            'Mar.',
            'Abr.',
            'May.',
            'Jun.',
            'Jul.',
            'Ago.',
            'Sep.',
            'Oct.',
            'Nov.',
            'Dic.',
        ],
        dayNames: [
            'Domingo',
            'Lunes',
            'Martes',
            'Miércoles',
            'Jueves',
            'Viernes',
            'Sábado',
        ],
        dayNamesShort: [
            'Domingo',
            'Lunes',
            'Martes',
            'Miércoles',
            'Jueves',
            'Viernes',
            'Sábado',
        ],
        today: 'Hoy',
    };
    LocaleConfig.defaultLocale = 'es';
};
