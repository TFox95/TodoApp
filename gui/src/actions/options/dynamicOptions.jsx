
export const categoryOptions = (categories) => {
    let loadedCategories = [];

    for (let i in categories) {
        loadedCategories.push(categories[i]);
    };

    let dynamicCategories = loadedCategories.map((data) => {
        return <option key={data.id} value={data.id}>{data.title}</option>;
    });

    return dynamicCategories;
};
export const priorityOptions = (priorities) => {
    let loadedPriorities = [];

    for (let i in priorities) {
        loadedPriorities.push(priorities[i])
    }

    let dynamicPriorities = loadedPriorities.map((data) => {
        return <option key={data.id} value={data.id}>{data.title}</option>;
    });

    return dynamicPriorities;
};

