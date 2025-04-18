export type PersonalAccountType =
    'Efectivo' |
    'Corriente/Débito' |
    'Ahorro' |
    'Digital/Billetera Electrónica' |
    'Tarjeta de Crédito' |
    'Brokerage' |
    'Fondo de Inversión' |
    'Criptomoneda' |
    'Préstamo' |
    'Bienes Raíces' |
    'Activos' |
    'Presupuesto' |
    'Objetivo de Ahorro' |
    'Fondo de Emergencia' |
    'Compartida';

export type PersonalAccountCode =
    'EFE' | // Efectivo
    'CCD' | // Cuenta Corriente/Débito
    'CAH' | // Cuenta de Ahorro
    'CDE' | // Cuentas Digitales/Electrónicas
    'TCR' | // Tarjetas de Crédito
    'CBR' | // Cuenta de Brokerage
    'FIN' | // Fondos de Inversión
    'CRP' | // Criptomonedas
    'PRS' | // Préstamo
    'BRA' | // Bienes Raíces
    'ACT' | // Activos
    'PRE' | // Presupuesto
    'OAH' | // Objetivos de Ahorro
    'FEM' | // Fondo de Emergencia
    'CCM';  // Cuentas Compartidas

export interface PersonalAccountInfo {
    code: PersonalAccountCode;
    description: PersonalAccountType;
}
