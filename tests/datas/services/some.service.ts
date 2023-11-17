export const SomeService = {
    name: 'some',
    actions: {
        upload: {
            openapi: {
                responses: {
                    200: {
                        description: '',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: {
                                        type: 'object',
                                        examples: [{ id: 1, filename: 'foo.txt', mimetype: 'text/plain', sizeInBytes: 100 }]
                                    }
                                }
                            }
                        }
                    },
                    400: {
                        $ref: '#/components/responses/FileNotExist'
                    },
                    401: {
                        $ref: '#/components/responses/UnauthorizedError'
                    },
                    413: {
                        $ref: '#/components/responses/FileTooBig'
                    },
                    422: {
                        $ref: '#/components/responses/ValidationError'
                    },
                    default: {
                        $ref: '#/components/responses/ServerError'
                    }
                }
            },
            handler() {}
        },
        update: {
            openapi: {
                summary: 'Foo bar baz'
            },
            params: {
                $$strict: 'remove',
                roles: { type: 'array', items: 'string', enum: ['user', 'admin'] },
                sex: { type: 'enum', values: ['male', 'female'], default: 'female' },
                id: { type: 'number', convert: true, default: 5 },
                numberBy: 'number',
                someNum: { $$t: 'Is some num', type: 'number', convert: true },
                types: {
                    type: 'array',
                    $$t: 'Types arr',
                    default: [{ id: 1, typeId: 5 }],
                    length: 1,
                    items: {
                        type: 'object',
                        strict: 'remove',
                        default: { id: 1, typeId: 5 },
                        props: {
                            id: { type: 'number', optional: true },
                            typeId: { type: 'number', optional: true }
                        }
                    }
                },
                bars: {
                    type: 'array',
                    $$t: 'Bars arr',
                    min: 1,
                    max: 2,
                    items: {
                        type: 'object',
                        strict: 'remove',
                        props: {
                            id: { type: 'number', optional: true },
                            fooNum: { $$t: 'fooNum', type: 'number', optional: true }
                        }
                    }
                },
                someObj: {
                    $$t: 'Some obj',
                    default: { name: 'bar' },
                    type: 'object',
                    strict: 'remove',
                    props: {
                        id: { $$t: 'Some obj ID', type: 'number', optional: true },
                        numberId: { type: 'number', optional: true },
                        name: { type: 'string', optional: true, max: 100 }
                    }
                },
                someBool: { type: 'boolean', optional: true },
                desc: { type: 'string', optional: true, max: 10, min: 4 },
                email: 'email',
                date: 'date|optional|convert|min:0|max:99|default:1998-01-10T13:00:00.000Z',
                uuid: 'uuid',
                url: 'url',
                shortObject: {
                    $$type: 'object',
                    desc: { type: 'string', optional: true, max: 10000 },
                    url: 'url'
                },
                shortObject2: {
                    $$type: 'object|optional',
                    desc: { type: 'string', optional: true, max: 10000 },
                    url: 'url'
                }
            },
            handler() {}
        },
        /**
         * Action from moleculer-db mixin
         */
        find: {
            openapi: {},
            cache: {
                keys: ['populate', 'fields', 'limit', 'offset', 'sort', 'search', 'searchFields', 'query']
            },
            params: {
                roles: { type: 'array', items: 'string', enum: ['user', 'admin'] },
                sex: { type: 'enum', values: ['male', 'female'] },
                populate: [
                    { type: 'string', optional: true },
                    { type: 'array', optional: true, items: 'string' }
                ],
                fields: [
                    { type: 'string', optional: true },
                    { type: 'array', optional: true, items: 'string' }
                ],
                limit: { type: 'number', integer: true, min: 0, optional: true, convert: true },
                offset: { type: 'number', integer: true, min: 0, optional: true, convert: true },
                sort: { type: 'string', optional: true },
                search: { type: 'string', optional: true, default: 'find me now' },
                searchFields: [
                    { type: 'string', optional: true },
                    { type: 'array', optional: true, items: 'string' }
                ],
                query: [
                    { type: 'object', optional: true },
                    { type: 'string', optional: true }
                ]
            },
            handler() {}
        },
        go: {
            openapi: {
                responses: {
                    200: {
                        description: ``,
                        content: {
                            'application/json': {
                                schema: {
                                    type: `object`,
                                    examples: [{ line: `number`, text: `string` }]
                                }
                            }
                        }
                    }
                }
            },
            params: {
                line: { type: `number` }
            },
            handler() {}
        },
        login: {
            params: {
                password: { type: 'string', min: 8, pattern: /^[a-zA-Z0-9]+$/ },
                repeatPassword: { type: 'string', min: 8, pattern: '^[a-zA-Z0-9]+$' },
                confirmPassword: { type: 'equal', field: 'password' }
            },
            handler() {}
        }
    }
};
