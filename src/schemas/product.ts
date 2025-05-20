export const search = {
    querystring: {
        type: "object",
        properties: {
            name: { type: "string" },
        },
        required: ["name"],
    },
};

export const getOrDelete = {
    params: {
        type: "object",
        properties: {
            id: { type: "string" },
        },
        required: ["id"],
    },
};

export const create = {
    body: {
        type: "object",
        properties: {
            name: { type: "string" },
            price: { type: "number" },
            cover: { type: "string" },
            categoryId: { type: "string" },
        },
        required: ["name", "price", "cover", "categoryId"],
    },
};

export const update = {
    params: {
        type: "object",
        properties: {
            id: { type: "string" },
        },
        required: ["id"],
    },
    body: {
        type: "object",
        properties: {
            name: { type: "string" },
            price: { type: "number" },
            cover: { type: "string" },
            categoryId: { type: "string" },
        },
    },
};
