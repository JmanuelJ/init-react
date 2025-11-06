
export const currencyFormatter = (value: number) => {

    return value.toLocaleString('es-Es', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2,
    });
};