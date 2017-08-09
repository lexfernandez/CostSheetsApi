'use strict';

var UnitsOfMeasurement = [
    { description: 'Kilolitro', abbreviation: 'kl', type: 1, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Hectolitro', abbreviation: 'hl', type: 1, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Decalitro', abbreviation: 'dal', type: 1, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Litro', abbreviation: 'l', type: 1, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Galon', abbreviation: 'gl', type: 1, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Decilitro', abbreviation: 'dl', type: 1, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Centilitro', abbreviation: 'cl', type: 1, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Mililitro', abbreviation: 'ml', type: 1, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Kilómetro', abbreviation: 'km', type: 4, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Hectómetro', abbreviation: 'hm', type: 4, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Decámetro', abbreviation: 'dam', type: 4, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Metro', abbreviation: 'm', type: 4, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Decímetro', abbreviation: 'dm', type: 4, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Centímetro', abbreviation: 'cm', type: 4, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Milímetro', abbreviation: 'mm', type: 4, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Pulgada', abbreviation: 'inch', type: 4, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Pie', abbreviation: 'ft', type: 4, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Yarda', abbreviation: 'yd', type: 4, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Milla', abbreviation: 'mi', type: 4, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Tonelada Métrica (1 000 Kg)', abbreviation: 't', type: 3, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Onza', abbreviation: 'oz', type: 3, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Libra', abbreviation: 'lb', type: 3, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Minuto', abbreviation: 'min', type: 6, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Hora', abbreviation: 'hr', type: 6, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Segundos', abbreviation: 'seg', type: 6, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Mes', abbreviation: 'mes', type: 6, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Día', abbreviation: 'dia', type: 6, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Año', abbreviation: 'año', type: 6, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Pliego', abbreviation: 'pliego', type: 5, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Cada Uno', abbreviation: 'c/u', type: 5, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Millar', abbreviation: 'millar', type: 5, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Bolsa', abbreviation: 'bolsa', type: 5, isDeleted: false, createdAt: new Date(), updatedAt: new Date() },
    { description: 'Lance', abbreviation: 'lance', type: 5, isDeleted: false, createdAt: new Date(), updatedAt: new Date() }
];

module.exports = UnitsOfMeasurement;