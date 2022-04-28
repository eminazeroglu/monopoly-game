import Swal from "sweetalert2";

export const flatten = arr => {
    return arr ? arr.reduce((result, item) => [
        ...result,
        {...item},
        ...flatten(item.children)
    ], []) : [];
}

export const dialog = (params = {}) => {
    const title = params.title || "Bildiriş";
    const html = params.message || null;
    const icon = params.icon || 'info';
    const iconColor = params.iconColor || '';
    const iconHtml = params.iconHtml || '';
    const confirmButtonText = params.buttonYesText || "Bəli";
    const confirmButtonColor = params.buttonYesColor || '#16a34a';
    const cancelButtonColor = params.buttonNoColor || '#b91c1c';
    const cancelButtonText = params.buttonNoText || "Xeyr";
    const showCancelButton = params.buttonNo !== false;
    const showConfirmButton = params.buttonYes !== false;
    const customClass = params.customClass || {};

    return new Promise((resolve, reject) => {
        Swal.fire({
            customClass,
            icon,
            iconColor,
            iconHtml,
            title,
            html,
            confirmButtonColor,
            confirmButtonText,
            cancelButtonColor,
            cancelButtonText,
            showConfirmButton,
            showCancelButton
        })
        .then(r => {
            if (r.value) {
                resolve('yes');
            }
            else if (r.dismiss === 'backdrop') {
                resolve('close');
            }
            else if (r.dismiss === 'cancel') {
                resolve('no');
            }
        })
    })
}

export const recursiveSearch = (find, search, arr, objectName = 'children') => {
    // eslint-disable-next-line array-callback-return
    return arr.reduce((a, item) => {
        if (a) return a;
        if (item[find] === search) return item;
        if (item[objectName]) return recursiveSearch(find, search, item[objectName], objectName)
    }, null);
}

export const recursiveNotSearch = (find, search, arr, objectName = 'children') => {
    return arr.filter(o => {
        const keep = o[find] !== search;
        if (keep && o[objectName]) o[objectName] = recursiveNotSearch(find, search, o[objectName], objectName);
        return keep;
    });
}

export const groupBy = (xs, key) => {
    return xs.reduce(function(rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
}
