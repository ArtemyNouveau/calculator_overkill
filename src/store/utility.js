export const updateObject = (oldObject, updatedValues) => {
    const copy = JSON.parse(JSON.stringify(oldObject))
    return {
        ...copy,
        ...updatedValues
    }
};
