export type Currency =
    | 'ARS' // Peso Argentino
    | 'BOB' // Boliviano
    | 'CLP' // Peso Chileno
    | 'COP' // Peso Colombiano
    | 'CRC' // Colón Costarricense
    | 'CUP' // Peso Cubano
    | 'DOP' // Peso Dominicano
    | 'EUR' // Euro (España)
    | 'GTQ' // Quetzal Guatemalteco
    | 'HNL' // Lempira Hondureño
    | 'MXN' // Peso Mexicano
    | 'NIO' // Córdoba Nicaragüense
    | 'PAB' // Balboa Panameño
    | 'PEN' // Sol Peruano
    | 'PYG' // Guaraní Paraguayo
    | 'USD' // Dólar Estadounidense (también usado en Ecuador, El Salvador y Panamá)
    | 'UYU' // Peso Uruguayo
    | 'VES' // Bolívar Venezolano;

export interface CurrencyInfo {
    code: Currency;
    description: string;
}
