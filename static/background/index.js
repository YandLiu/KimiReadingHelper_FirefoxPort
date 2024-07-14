var e, t;
'function' == typeof (e = globalThis.define) && ((t = e), (e = null)),
    (function (t, r, i, s, a) {
        var n =
                'undefined' != typeof globalThis
                    ? globalThis
                    : 'undefined' != typeof self
                    ? self
                    : 'undefined' != typeof window
                    ? window
                    : 'undefined' != typeof global
                    ? global
                    : {},
            o = 'function' == typeof n[s] && n[s],
            l = o.cache || {},
            c =
                'undefined' != typeof module &&
                'function' == typeof module.require &&
                module.require.bind(module);
        function u(e, r) {
            if (!l[e]) {
                if (!t[e]) {
                    var i = 'function' == typeof n[s] && n[s];
                    if (!r && i) return i(e, !0);
                    if (o) return o(e, !0);
                    if (c && 'string' == typeof e) return c(e);
                    var a = Error("Cannot find module '" + e + "'");
                    throw ((a.code = 'MODULE_NOT_FOUND'), a);
                }
                (d.resolve = function (r) {
                    var i = t[e][1][r];
                    return null != i ? i : r;
                }),
                    (d.cache = {});
                var h = (l[e] = new u.Module(e));
                t[e][0].call(h.exports, d, h, h.exports, this);
            }
            return l[e].exports;
            function d(e) {
                var t = d.resolve(e);
                return !1 === t ? {} : u(t);
            }
        }
        (u.isParcelRequire = !0),
            (u.Module = function (e) {
                (this.id = e), (this.bundle = u), (this.exports = {});
            }),
            (u.modules = t),
            (u.cache = l),
            (u.parent = o),
            (u.register = function (e, r) {
                t[e] = [
                    function (e, t) {
                        t.exports = r;
                    },
                    {}
                ];
            }),
            Object.defineProperty(u, 'root', {
                get: function () {
                    return n[s];
                }
            }),
            (n[s] = u);
        for (var h = 0; h < r.length; h++) u(r[h]);
        if (i) {
            var d = u(i);
            'object' == typeof exports && 'undefined' != typeof module
                ? (module.exports = d)
                : 'function' == typeof e && e.amd
                ? e(function () {
                      return d;
                  })
                : a && (this[a] = d);
        }
    })(
        {
            '1o5uu': [
                function (e, t, r) {
                    e('9375349fec7c0a58').register(
                        JSON.parse(
                            '{"abzv4":"index.js","jbPgk":"inject.fb49ef53.js","lp7Ft":"inner.07e179da.js"}'
                        )
                    );
                },
                {'9375349fec7c0a58': 'e0BGj'}
            ],
            e0BGj: [
                function (e, t, r) {
                    var i = {};
                    (t.exports.register = function (e) {
                        for (var t = Object.keys(e), r = 0; r < t.length; r++)
                            i[t[r]] = e[t[r]];
                    }),
                        (t.exports.resolve = function (e) {
                            var t = i[e];
                            if (null == t)
                                throw Error(
                                    'Could not resolve bundle with id ' + e
                                );
                            return t;
                        });
                },
                {}
            ],
            kgW6q: [
                function (e, t, r) {
                    e('../../../src/background/index');
                },
                {'../../../src/background/index': 'iqY5N'}
            ],
            iqY5N: [
                function (e, t, r) {
                    var i = e('@parcel/transformer-js/src/esmodule-helpers.js'),
                        s = e('../store'),
                        a = i.interopDefault(s),
                        n = e('url:../inject'),
                        o = i.interopDefault(n),
                        l = e('url:../inner'),
                        c = i.interopDefault(l);
                    let u = (0, c.default)
                            .split('/')
                            .reverse()[0]
                            .split('?')[0],
                        h = (0, o.default)
                            .split('/')
                            .reverse()[0]
                            .split('?')[0];
                    class d {
                        constructor() {
                            this.bindEvent();
                        }
                        bindEvent() {
                            chrome.action.onClicked.addListener(e => {
                                let {
                                        protocol: t,
                                        hostname: r,
                                        pathname: i
                                    } = new URL(e.url || ''),
                                    s = `${t}//${r}${i}`;
                                ['file:', 'https:', 'http:'].includes(t) &&
                                    (browser.sidebarAction.setPanel({
                                        tabId: e.id,
                                        panel: `tabs/sidepanel.html?url=${encodeURIComponent(
                                            s
                                        )}&tabId=${e.id}`
                                    }),
                                    browser.sidebarAction.open()),
                                    chrome.scripting.executeScript(
                                        {
                                            target: {tabId: e.id},
                                            func: e => (
                                                document.documentElement.setAttribute(
                                                    'tabid',
                                                    e.tabId.toString()
                                                ),
                                                !!window
                                                    .getComputedStyle(
                                                        document.documentElement
                                                    )
                                                    .getPropertyValue(
                                                        '--arc-palette-title'
                                                    )
                                            ),
                                            args: [{tabId: e.id}]
                                        },
                                        ([t]) => {
                                            t.result &&
                                                chrome.scripting.executeScript({
                                                    target: {tabId: e.id},
                                                    files: [u]
                                                });
                                        }
                                    );
                            }),
                                chrome.runtime.onMessage.addListener(e => {
                                    'kimiTokenResponse' === e.action &&
                                        e.data &&
                                        (0, a.default).saveKimiToken(e.data),
                                        'flomoTokenResponse' === e.action &&
                                            e.data &&
                                            (0, a.default).saveFlomoToken(
                                                e.data
                                            ),
                                        'getTabDetail' === e.action &&
                                            e.data.tabId &&
                                            chrome.scripting.executeScript(
                                                {
                                                    target: {
                                                        tabId: e.data.tabId
                                                    },
                                                    files: [h]
                                                },
                                                () => {
                                                    chrome.tabs.sendMessage(
                                                        e.data.tabId,
                                                        {
                                                            action: 'getTabDetail',
                                                            data: {
                                                                tabId: e.data
                                                                    .tabId
                                                            }
                                                        }
                                                    );
                                                }
                                            ),
                                        'appendTabDetail' === e.action &&
                                            chrome.scripting.executeScript(
                                                {
                                                    target: {
                                                        tabId: e.data.tabId
                                                    },
                                                    files: [h]
                                                },
                                                () => {
                                                    chrome.tabs.sendMessage(
                                                        e.data.tabId,
                                                        {
                                                            action: 'appendTabDetail',
                                                            data: {
                                                                tabId: e.data
                                                                    .tabId
                                                            }
                                                        }
                                                    );
                                                }
                                            );
                                });
                        }
                    }
                    (async () => {
                        new d();
                    })();
                },
                {
                    '../store': 'hKsTH',
                    'url:../inject': '5R4oF',
                    'url:../inner': '81jBp',
                    '@parcel/transformer-js/src/esmodule-helpers.js': 'f6DG4'
                }
            ],
            hKsTH: [
                function (e, t, r) {
                    e(
                        '@parcel/transformer-js/src/esmodule-helpers.js'
                    ).defineInteropFlag(r);
                    var i = e('@plasmohq/storage');
                    let s = new i.Storage({area: 'local'}),
                        a = new (class {
                            async saveRelation(e, t) {
                                let r = await this.getAllRelation();
                                await s.set(this.relationKey, {...r, [t]: e});
                            }
                            async deleteRelation(e) {
                                let t = await this.getAllRelation();
                                delete t[e], await s.set(this.relationKey, t);
                            }
                            async getAllRelation() {
                                let e = await s.get(this.relationKey);
                                return e || {};
                            }
                            async saveKimiToken(e) {
                                await s.set(this.kimiTokenKey, e);
                            }
                            async getKimiToken() {
                                return s.get(this.kimiTokenKey);
                            }
                            async saveFlomoToken(e) {
                                await s.set(this.flomoTokenKey, e);
                            }
                            async getFlomoToken() {
                                return await s.get(this.flomoTokenKey);
                            }
                            async saveSystemConfig(e) {
                                let t = await this.getSystemConfig();
                                await s.set(this.systemConfigKey, {
                                    ...(t || {}),
                                    ...e
                                });
                            }
                            async getSystemConfig() {
                                return await s.get(this.systemConfigKey);
                            }
                            async getPormptOrder() {
                                let e = await s.get(this.customPromptSortOrder);
                                return e || {};
                            }
                            async savePormptOrder(e) {
                                let t = await this.getPormptOrder();
                                await s.set(this.customPromptSortOrder, {
                                    ...t,
                                    ...e
                                });
                            }
                            watchStore(e) {
                                s.watch({
                                    [this.kimiTokenKey]: t => {
                                        e({token: t.newValue});
                                    },
                                    [this.systemConfigKey]: t => {
                                        e({systemConfig: t.newValue});
                                    }
                                });
                            }
                            unWatchAll() {
                                s.unwatchAll();
                            }
                            constructor() {
                                (this.kimiTokenKey = 'kimi-token-key'),
                                    (this.relationKey = 'kimi-relation-key'),
                                    (this.flomoTokenKey = 'flomo-token-key'),
                                    (this.systemConfigKey =
                                        'system-config-key'),
                                    (this.customPromptSortOrder =
                                        'kimi-custom-prompt-sort-order');
                            }
                        })();
                    r.default = a;
                },
                {
                    '@plasmohq/storage': '3wfAg',
                    '@parcel/transformer-js/src/esmodule-helpers.js': 'f6DG4'
                }
            ],
            '3wfAg': [
                function (e, t, r) {
                    var i = e('@parcel/transformer-js/src/esmodule-helpers.js');
                    i.defineInteropFlag(r),
                        i.export(r, 'BaseStorage', () => o),
                        i.export(r, 'Storage', () => l);
                    var s = e('pify'),
                        a = i.interopDefault(s),
                        n = () => {
                            try {
                                let e =
                                    globalThis.navigator?.userAgent.match(
                                        /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
                                    ) || [];
                                if ('Chrome' === e[1])
                                    return (
                                        100 > parseInt(e[2]) ||
                                        globalThis.chrome.runtime?.getManifest()
                                            ?.manifest_version === 2
                                    );
                            } catch {}
                            return !1;
                        },
                        o = class {
                            #e;
                            #t;
                            get primaryClient() {
                                return this.#t;
                            }
                            #r;
                            get secondaryClient() {
                                return this.#r;
                            }
                            #i;
                            get area() {
                                return this.#i;
                            }
                            get hasWebApi() {
                                try {
                                    return (
                                        'u' > typeof window &&
                                        !!window.localStorage
                                    );
                                } catch (e) {
                                    return console.error(e), !1;
                                }
                            }
                            #s = new Map();
                            #a;
                            get copiedKeySet() {
                                return this.#a;
                            }
                            isCopied = e =>
                                this.hasWebApi &&
                                (this.allCopied || this.copiedKeySet.has(e));
                            #n = !1;
                            get allCopied() {
                                return this.#n;
                            }
                            getExtStorageApi = () =>
                                globalThis.browser?.storage ||
                                globalThis.chrome?.storage;
                            get hasExtensionApi() {
                                try {
                                    return !!this.getExtStorageApi();
                                } catch (e) {
                                    return console.error(e), !1;
                                }
                            }
                            isWatchSupported = () => this.hasExtensionApi;
                            keyNamespace = '';
                            isValidKey = e => e.startsWith(this.keyNamespace);
                            getNamespacedKey = e => `${this.keyNamespace}${e}`;
                            getUnnamespacedKey = e =>
                                e.slice(this.keyNamespace.length);
                            constructor({
                                area: e = 'sync',
                                allCopied: t = !1,
                                copiedKeyList: r = []
                            } = {}) {
                                this.setCopiedKeySet(r),
                                    (this.#i = e),
                                    (this.#n = t);
                                try {
                                    this.hasWebApi &&
                                        (t || r.length > 0) &&
                                        (this.#r = window.localStorage);
                                } catch {}
                                try {
                                    this.hasExtensionApi &&
                                        ((this.#e = this.getExtStorageApi()),
                                        n()
                                            ? (this.#t = (0, a.default)(
                                                  this.#e[this.area],
                                                  {
                                                      exclude: [
                                                          'getBytesInUse'
                                                      ],
                                                      errorFirst: !1
                                                  }
                                              ))
                                            : (this.#t = this.#e[this.area]));
                                } catch {}
                            }
                            setCopiedKeySet(e) {
                                this.#a = new Set(e);
                            }
                            rawGetAll = () => this.#t?.get();
                            getAll = async () =>
                                Object.entries(await this.rawGetAll())
                                    .filter(([e]) => this.isValidKey(e))
                                    .reduce(
                                        (e, [t, r]) => (
                                            (e[this.getUnnamespacedKey(t)] = r),
                                            e
                                        ),
                                        {}
                                    );
                            copy = async e => {
                                let t = void 0 === e;
                                if (
                                    (!t && !this.copiedKeySet.has(e)) ||
                                    !this.allCopied ||
                                    !this.hasExtensionApi
                                )
                                    return !1;
                                let r = this.allCopied
                                    ? await this.rawGetAll()
                                    : await this.#t.get(
                                          (t
                                              ? [...this.copiedKeySet]
                                              : [e]
                                          ).map(this.getNamespacedKey)
                                      );
                                if (!r) return !1;
                                let i = !1;
                                for (let e in r) {
                                    let t = r[e],
                                        s = this.#r?.getItem(e);
                                    this.#r?.setItem(e, t), (i ||= t !== s);
                                }
                                return i;
                            };
                            rawGet = async e =>
                                this.hasExtensionApi
                                    ? (await this.#t.get(e))[e]
                                    : this.isCopied(e)
                                    ? this.#r?.getItem(e)
                                    : null;
                            rawSet = async (e, t) => (
                                this.isCopied(e) && this.#r?.setItem(e, t),
                                this.hasExtensionApi &&
                                    (await this.#t.set({[e]: t})),
                                null
                            );
                            clear = async (e = !1) => {
                                e && this.#r?.clear(), await this.#t.clear();
                            };
                            rawRemove = async e => {
                                this.isCopied(e) && this.#r?.removeItem(e),
                                    this.hasExtensionApi &&
                                        (await this.#t.remove(e));
                            };
                            removeAll = async () => {
                                let e = Object.keys(await this.getAll());
                                await Promise.all(e.map(this.remove));
                            };
                            watch = e => {
                                let t = this.isWatchSupported();
                                return t && this.#o(e), t;
                            };
                            #o = e => {
                                for (let t in e) {
                                    let r = this.getNamespacedKey(t),
                                        i =
                                            this.#s.get(r)?.callbackSet ||
                                            new Set();
                                    if ((i.add(e[t]), i.size > 1)) continue;
                                    let s = (e, t) => {
                                        if (t !== this.area || !e[r]) return;
                                        let i = this.#s.get(r);
                                        if (!i)
                                            throw Error(
                                                `Storage comms does not exist for nsKey: ${r}`
                                            );
                                        Promise.all([
                                            this.parseValue(e[r].newValue),
                                            this.parseValue(e[r].oldValue)
                                        ]).then(([e, r]) => {
                                            for (let s of i.callbackSet)
                                                s(
                                                    {newValue: e, oldValue: r},
                                                    t
                                                );
                                        });
                                    };
                                    this.#e.onChanged.addListener(s),
                                        this.#s.set(r, {
                                            callbackSet: i,
                                            listener: s
                                        });
                                }
                            };
                            unwatch = e => {
                                let t = this.isWatchSupported();
                                return t && this.#l(e), t;
                            };
                            #l(e) {
                                for (let t in e) {
                                    let r = this.getNamespacedKey(t),
                                        i = e[t],
                                        s = this.#s.get(r);
                                    s &&
                                        (s.callbackSet.delete(i),
                                        0 === s.callbackSet.size &&
                                            (this.#s.delete(r),
                                            this.#e.onChanged.removeListener(
                                                s.listener
                                            )));
                                }
                            }
                            unwatchAll = () => this.#c();
                            #c() {
                                this.#s.forEach(({listener: e}) =>
                                    this.#e.onChanged.removeListener(e)
                                ),
                                    this.#s.clear();
                            }
                            async getItem(e) {
                                return this.get(e);
                            }
                            async setItem(e, t) {
                                await this.set(e, t);
                            }
                            async removeItem(e) {
                                return this.remove(e);
                            }
                        },
                        l = class extends o {
                            get = async e => {
                                let t = this.getNamespacedKey(e),
                                    r = await this.rawGet(t);
                                return this.parseValue(r);
                            };
                            set = async (e, t) => {
                                let r = this.getNamespacedKey(e),
                                    i = JSON.stringify(t);
                                return this.rawSet(r, i);
                            };
                            remove = async e => {
                                let t = this.getNamespacedKey(e);
                                return this.rawRemove(t);
                            };
                            setNamespace = e => {
                                this.keyNamespace = e;
                            };
                            parseValue = async e => {
                                try {
                                    if (void 0 !== e) return JSON.parse(e);
                                } catch (e) {
                                    console.error(e);
                                }
                            };
                        };
                },
                {
                    pify: '2mL3q',
                    '@parcel/transformer-js/src/esmodule-helpers.js': 'f6DG4'
                }
            ],
            '2mL3q': [
                function (e, t, r) {
                    var i = e('@parcel/transformer-js/src/esmodule-helpers.js');
                    i.defineInteropFlag(r), i.export(r, 'default', () => n);
                    let s = (e, t, r, i) =>
                            function (...s) {
                                let a = t.promiseModule;
                                return new a((a, n) => {
                                    t.multiArgs
                                        ? s.push((...e) => {
                                              t.errorFirst
                                                  ? e[0]
                                                      ? n(e)
                                                      : (e.shift(), a(e))
                                                  : a(e);
                                          })
                                        : t.errorFirst
                                        ? s.push((e, t) => {
                                              e ? n(e) : a(t);
                                          })
                                        : s.push(a);
                                    let o = this === r ? i : this;
                                    Reflect.apply(e, o, s);
                                });
                            },
                        a = new WeakMap();
                    function n(e, t) {
                        t = {
                            exclude: [/.+(?:Sync|Stream)$/],
                            errorFirst: !0,
                            promiseModule: Promise,
                            ...t
                        };
                        let r = typeof e;
                        if (
                            !(
                                null !== e &&
                                ('object' === r || 'function' === r)
                            )
                        )
                            throw TypeError(
                                `Expected \`input\` to be a \`Function\` or \`Object\`, got \`${
                                    null === e ? 'null' : r
                                }\``
                            );
                        let i = (e, r) => {
                                let i = a.get(e);
                                if ((i || ((i = {}), a.set(e, i)), r in i))
                                    return i[r];
                                let s = e =>
                                        'string' == typeof e ||
                                        'symbol' == typeof r
                                            ? r === e
                                            : e.test(r),
                                    n = Reflect.getOwnPropertyDescriptor(e, r),
                                    o =
                                        void 0 === n ||
                                        n.writable ||
                                        n.configurable,
                                    l = t.include
                                        ? t.include.some(e => s(e))
                                        : !t.exclude.some(e => s(e)),
                                    c = l && o;
                                return (i[r] = c), c;
                            },
                            n = new WeakMap(),
                            o = new Proxy(e, {
                                apply(e, r, i) {
                                    let a = n.get(e);
                                    if (a) return Reflect.apply(a, r, i);
                                    let l = t.excludeMain ? e : s(e, t, o, e);
                                    return n.set(e, l), Reflect.apply(l, r, i);
                                },
                                get(e, r) {
                                    let a = e[r];
                                    if (!i(e, r) || a === Function.prototype[r])
                                        return a;
                                    let l = n.get(a);
                                    if (l) return l;
                                    if ('function' == typeof a) {
                                        let r = s(a, t, o, e);
                                        return n.set(a, r), r;
                                    }
                                    return a;
                                }
                            });
                        return o;
                    }
                },
                {'@parcel/transformer-js/src/esmodule-helpers.js': 'f6DG4'}
            ],
            f6DG4: [
                function (e, t, r) {
                    (r.interopDefault = function (e) {
                        return e && e.__esModule ? e : {default: e};
                    }),
                        (r.defineInteropFlag = function (e) {
                            Object.defineProperty(e, '__esModule', {value: !0});
                        }),
                        (r.exportAll = function (e, t) {
                            return (
                                Object.keys(e).forEach(function (r) {
                                    'default' === r ||
                                        '__esModule' === r ||
                                        t.hasOwnProperty(r) ||
                                        Object.defineProperty(t, r, {
                                            enumerable: !0,
                                            get: function () {
                                                return e[r];
                                            }
                                        });
                                }),
                                t
                            );
                        }),
                        (r.export = function (e, t, r) {
                            Object.defineProperty(e, t, {
                                enumerable: !0,
                                get: r
                            });
                        });
                },
                {}
            ],
            '5R4oF': [
                function (e, t, r) {
                    t.exports =
                        e('7a6d5ad976e6a8f').getBundleURL('abzv4') +
                        '../../' +
                        e('ef36245e03121058').resolve('jbPgk');
                },
                {'7a6d5ad976e6a8f': 'e5Rdr', ef36245e03121058: 'e0BGj'}
            ],
            e5Rdr: [
                function (e, t, r) {
                    var i = {};
                    function s(e) {
                        return (
                            ('' + e).replace(
                                /^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,
                                '$1'
                            ) + '/'
                        );
                    }
                    (r.getBundleURL = function (e) {
                        var t = i[e];
                        return (
                            t ||
                                ((t = (function () {
                                    try {
                                        throw Error();
                                    } catch (t) {
                                        var e = ('' + t.stack).match(
                                            /(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g
                                        );
                                        if (e) return s(e[2]);
                                    }
                                    return '/';
                                })()),
                                (i[e] = t)),
                            t
                        );
                    }),
                        (r.getBaseURL = s),
                        (r.getOrigin = function (e) {
                            var t = ('' + e).match(
                                /(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/
                            );
                            if (!t) throw Error('Origin not found');
                            return t[0];
                        });
                },
                {}
            ],
            '81jBp': [
                function (e, t, r) {
                    t.exports =
                        e('beb1da9801995fd8').getBundleURL('abzv4') +
                        '../../' +
                        e('8b77c98eebb76924').resolve('lp7Ft');
                },
                {beb1da9801995fd8: 'e5Rdr', '8b77c98eebb76924': 'e0BGj'}
            ]
        },
        ['1o5uu', 'kgW6q'],
        'kgW6q',
        'parcelRequirec277'
    ),
    (globalThis.define = t);
