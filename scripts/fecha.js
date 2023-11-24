const conseguirFecha = date => {
    const dia = date.getDate();
    const mes = date.getMonth() + 1;
    const año = date.getFullYear();
    console.log(date);
    return `${dia}/${mes}/${año}`;
}
