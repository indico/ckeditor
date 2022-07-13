/*!
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
(window.CKEditor5 = window.CKEditor5 || {}),
    (window.CKEditor5["@aeness/ckeditor5InsertImage"] = (function (e) {
        var t = {};
        function i(n) {
            if (t[n]) return t[n].exports;
            var s = (t[n] = { i: n, l: !1, exports: {} });
            return e[n].call(s.exports, s, s.exports, i), (s.l = !0), s.exports;
        }
        return (
            (i.m = e),
            (i.c = t),
            (i.d = function (e, t, n) {
                i.o(e, t) ||
                    Object.defineProperty(e, t, { enumerable: !0, get: n });
            }),
            (i.r = function (e) {
                "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module",
                    }),
                    Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (i.t = function (e, t) {
                if ((1 & t && (e = i(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                    return e;
                var n = Object.create(null);
                if (
                    (i.r(n),
                    Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: e,
                    }),
                    2 & t && "string" != typeof e)
                )
                    for (var s in e)
                        i.d(
                            n,
                            s,
                            function (t) {
                                return e[t];
                            }.bind(null, s)
                        );
                return n;
            }),
            (i.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return i.d(t, "a", t), t;
            }),
            (i.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (i.p = ""),
            i((i.s = 8))
        );
    })([
        function (e, t, i) {
            e.exports = i(3)("./src/ui.js");
        },
        function (e, t, i) {
            e.exports = i(3)("./src/core.js");
        },
        function (e, t, i) {
            e.exports = i(3)("./src/utils.js");
        },
        function (e, t) {
            e.exports = CKEditor5.dll;
        },
        function (e, t, i) {
            e.exports = i(3)("./src/engine.js");
        },
        function (e, t, i) {
            var n = i(6),
                s = i(7);
            "string" == typeof (s = s.__esModule ? s.default : s) &&
                (s = [[e.i, s, ""]]);
            var r = {
                injectType: "singletonStyleTag",
                attributes: { "data-cke": !0 },
                insert: "head",
                singleton: !0,
            };
            n(s, r);
            e.exports = s.locals || {};
        },
        function (e, t, i) {
            "use strict";
            var n,
                s = function () {
                    return (
                        void 0 === n &&
                            (n = Boolean(
                                window &&
                                    document &&
                                    document.all &&
                                    !window.atob
                            )),
                        n
                    );
                },
                r = (function () {
                    var e = {};
                    return function (t) {
                        if (void 0 === e[t]) {
                            var i = document.querySelector(t);
                            if (
                                window.HTMLIFrameElement &&
                                i instanceof window.HTMLIFrameElement
                            )
                                try {
                                    i = i.contentDocument.head;
                                } catch (e) {
                                    i = null;
                                }
                            e[t] = i;
                        }
                        return e[t];
                    };
                })(),
                o = [];
            function a(e) {
                for (var t = -1, i = 0; i < o.length; i++)
                    if (o[i].identifier === e) {
                        t = i;
                        break;
                    }
                return t;
            }
            function l(e, t) {
                for (var i = {}, n = [], s = 0; s < e.length; s++) {
                    var r = e[s],
                        l = t.base ? r[0] + t.base : r[0],
                        c = i[l] || 0,
                        d = "".concat(l, " ").concat(c);
                    i[l] = c + 1;
                    var u = a(d),
                        m = { css: r[1], media: r[2], sourceMap: r[3] };
                    -1 !== u
                        ? (o[u].references++, o[u].updater(m))
                        : o.push({
                              identifier: d,
                              updater: p(m, t),
                              references: 1,
                          }),
                        n.push(d);
                }
                return n;
            }
            function c(e) {
                var t = document.createElement("style"),
                    n = e.attributes || {};
                if (void 0 === n.nonce) {
                    var s = i.nc;
                    s && (n.nonce = s);
                }
                if (
                    (Object.keys(n).forEach(function (e) {
                        t.setAttribute(e, n[e]);
                    }),
                    "function" == typeof e.insert)
                )
                    e.insert(t);
                else {
                    var o = r(e.insert || "head");
                    if (!o)
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                        );
                    o.appendChild(t);
                }
                return t;
            }
            var d,
                u =
                    ((d = []),
                    function (e, t) {
                        return (d[e] = t), d.filter(Boolean).join("\n");
                    });
            function m(e, t, i, n) {
                var s = i
                    ? ""
                    : n.media
                    ? "@media ".concat(n.media, " {").concat(n.css, "}")
                    : n.css;
                if (e.styleSheet) e.styleSheet.cssText = u(t, s);
                else {
                    var r = document.createTextNode(s),
                        o = e.childNodes;
                    o[t] && e.removeChild(o[t]),
                        o.length ? e.insertBefore(r, o[t]) : e.appendChild(r);
                }
            }
            function h(e, t, i) {
                var n = i.css,
                    s = i.media,
                    r = i.sourceMap;
                if (
                    (s
                        ? e.setAttribute("media", s)
                        : e.removeAttribute("media"),
                    r &&
                        "undefined" != typeof btoa &&
                        (n +=
                            "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                                btoa(
                                    unescape(
                                        encodeURIComponent(JSON.stringify(r))
                                    )
                                ),
                                " */"
                            )),
                    e.styleSheet)
                )
                    e.styleSheet.cssText = n;
                else {
                    for (; e.firstChild; ) e.removeChild(e.firstChild);
                    e.appendChild(document.createTextNode(n));
                }
            }
            var f = null,
                g = 0;
            function p(e, t) {
                var i, n, s;
                if (t.singleton) {
                    var r = g++;
                    (i = f || (f = c(t))),
                        (n = m.bind(null, i, r, !1)),
                        (s = m.bind(null, i, r, !0));
                } else
                    (i = c(t)),
                        (n = h.bind(null, i, t)),
                        (s = function () {
                            !(function (e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e);
                            })(i);
                        });
                return (
                    n(e),
                    function (t) {
                        if (t) {
                            if (
                                t.css === e.css &&
                                t.media === e.media &&
                                t.sourceMap === e.sourceMap
                            )
                                return;
                            n((e = t));
                        } else s();
                    }
                );
            }
            e.exports = function (e, t) {
                (t = t || {}).singleton ||
                    "boolean" == typeof t.singleton ||
                    (t.singleton = s());
                var i = l((e = e || []), t);
                return function (e) {
                    if (
                        ((e = e || []),
                        "[object Array]" === Object.prototype.toString.call(e))
                    ) {
                        for (var n = 0; n < i.length; n++) {
                            var s = a(i[n]);
                            o[s].references--;
                        }
                        for (var r = l(e, t), c = 0; c < i.length; c++) {
                            var d = a(i[c]);
                            0 === o[d].references &&
                                (o[d].updater(), o.splice(d, 1));
                        }
                        i = r;
                    }
                };
            };
        },
        function (e, t) {
            e.exports =
                ".ck.ck-insert-image-form{padding:var(--ck-spacing-large);display:flex;align-items:flex-end;flex-direction:row;flex-wrap:nowrap}[dir=ltr] .ck.ck-insert-image-form>:not(:first-child),[dir=rtl] .ck.ck-insert-image-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}.ck .ck-fake-only-insert-image-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-only-insert-image-selection_collapsed{height:100%;border-right:1px solid var(--ck-color-base-text);margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}";
        },
        function (e, t, i) {
            "use strict";
            i.r(t),
                i.d(t, "OnlyInsertImage", function () {
                    return d;
                });
            var n = i(1),
                s = i(0),
                r = i(2);
            class o extends n.Command {
                constructor(e) {
                    super(e),
                        e.plugins.has("ImageUtils") ||
                            Object(r.logWarning)("image-utils-plugin-required"),
                        this.set("isImageSelected", !1);
                }
                refresh() {
                    const e =
                            this.editor.model.document.selection.getSelectedElement(),
                        t = this.editor.plugins.get("ImageUtils");
                    (this.isEnabled =
                        t.isImageAllowed(this.editor.model) || t.isImage(e)),
                        (this.isImageSelected = t.isImage(e));
                }
                execute(e) {
                    const t = this.editor.model,
                        i = t.document.selection.getSelectedElement(),
                        n = this.editor.plugins.get("ImageUtils");
                    this.editor.editing.view.focus();
                    const s = e.source;
                    if (this.isEnabled)
                        if (n.isImage(i)) this.updateImage(s, i);
                        else {
                            const e = Object.fromEntries(
                                t.document.selection.getAttributes()
                            );
                            n.insertImage(
                                { src: s, ...e },
                                t.document.selection
                            );
                        }
                }
                updateImage(e, t) {
                    this.editor.model.change((i) => {
                        i.setAttribute("src", e, t),
                            i.removeAttribute("srcset", t),
                            i.removeAttribute("sizes", t);
                    });
                }
            }
            var a = i(4);
            i(5);
            class l extends s.View {
                constructor(e) {
                    super(e);
                    const t = e.t;
                    (this.keystrokes = new r.KeystrokeHandler()),
                        (this._focusables = new s.ViewCollection()),
                        (this._focusTracker = new r.FocusTracker()),
                        (this._children = this.createCollection()),
                        (this.urlInputView = this._createUrlInput(
                            t("Insert image via URL")
                        )),
                        (this.saveButtonView = this._createButton(
                            t("Insert"),
                            n.icons.check,
                            "ck-button-save"
                        )),
                        (this.saveButtonView.type = "submit"),
                        (this.cancelButtonView = this._createButton(
                            t("Cancel"),
                            n.icons.cancel,
                            "ck-button-cancel",
                            "cancel"
                        )),
                        this.setTemplate({
                            tag: "form",
                            attributes: {
                                class: ["ck", "ck-insert-image-form"],
                                tabindex: "-1",
                            },
                            children: this._children,
                        });
                }
                _createUrlInput(e) {
                    const t = new s.LabeledFieldView(
                        this.locale,
                        s.createLabeledInputText
                    );
                    return (
                        (t.fieldView.placeholder = "https://example.com"),
                        (t.label = e),
                        this._children.add(t),
                        this._focusables.add(t),
                        this._focusTracker.add(t.element),
                        t
                    );
                }
                _createButton(e, t, i, n) {
                    const r = new s.ButtonView(this.locale);
                    return (
                        r.set({ label: e, icon: t, tooltip: !0 }),
                        r.extendTemplate({ attributes: { class: i } }),
                        n && r.delegate("execute").to(this, n),
                        this._children.add(r),
                        this._focusables.add(r),
                        this._focusTracker.add(r.element),
                        r
                    );
                }
                render() {
                    super.render(),
                        Object(s.submitHandler)({ view: this }),
                        this.keystrokes.listenTo(this.element),
                        new s.FocusCycler({
                            focusables: this._focusables,
                            focusTracker: this._focusTracker,
                            keystrokeHandler: this.keystrokes,
                            actions: {
                                focusPrevious: "shift + tab",
                                focusNext: "tab",
                            },
                        }).focusFirst();
                }
                resetFormForInsert() {
                    const e = this.locale.t;
                    (this.urlInputView.fieldView.element.value = ""),
                        (this.saveButtonView.label = e("Insert"));
                }
                resetFormForUpdate(e) {
                    const t = this.locale.t;
                    (this.urlInputView.fieldView.element.value = e),
                        (this.saveButtonView.label = t("Update")),
                        (this.urlInputView.label = t("Update image URL"));
                }
            }
            class c extends n.Plugin {
                constructor(e) {
                    super(e),
                        this.set("isActiveView", !1),
                        (this.formView = new l(e.locale));
                }
                static get requires() {
                    return [s.ContextualBalloon];
                }
                static get pluginName() {
                    return "InsertImageForm";
                }
                get viewElement() {
                    return this.formView.element;
                }
                init() {
                    const e = this.editor;
                    e.editing.view.addObserver(a.ClickObserver),
                        this._initUserInteractionsFromFormView(e),
                        (this._balloon = e.plugins.get(s.ContextualBalloon));
                }
                _initUserInteractionsFromFormView(e) {
                    this.listenTo(this.formView, "submit", () => {
                        (0 !=
                            this.formView.urlInputView.fieldView.element
                                .value) !=
                            null &&
                            this.formView.urlInputView.fieldView.element.value.trim()
                                .length &&
                            (e.execute("imageinsert", {
                                source: this.formView.urlInputView.fieldView
                                    .element.value,
                            }),
                            this.hideUI());
                    }),
                        this.listenTo(this.formView, "cancel", () => {
                            this.hideUI();
                        }),
                        this.formView.keystrokes.set("Esc", () => {
                            this.hideUI();
                        });
                }
                destroy() {
                    super.destroy(), this.formView.destroy();
                }
                _addFormView() {
                    this._isFormInBalloon ||
                        (this._balloon.add({
                            view: this.formView,
                            position: this._getBalloonPositionData(),
                        }),
                        this._balloon.visibleView === this.formView &&
                            this.formView.urlInputView.fieldView.select());
                }
                _removeFormView() {
                    var e;
                    this._isFormInBalloon &&
                        (this.formView.saveButtonView.focus(),
                        this._balloon.remove(this.formView),
                        this.editor.editing.view.focus(),
                        (e = this.editor.model).markers.has(
                            "only-insert-image"
                        ) &&
                            e.change((e) => {
                                e.removeMarker("only-insert-image");
                            }));
                }
                _showUI() {
                    if (
                        this.editor.plugins
                            .get("ImageUtils")
                            .isImage(
                                this.editor.model.document.selection.getSelectedElement()
                            )
                    ) {
                        const e =
                            this.editor.model.document.selection.getSelectedElement();
                        this.formView.resetFormForUpdate(e.getAttribute("src"));
                    } else this.formView.resetFormForInsert();
                    this._addFormView(), (this.isActiveView = !0);
                }
                hideUI() {
                    this._isFormInBalloon &&
                        (this.editor.editing.view.focus(),
                        this._removeFormView(),
                        (this.isActiveView = !1));
                }
                swapUI() {
                    this.isActiveView ? this.hideUI() : this._showUI();
                }
                get _isFormInBalloon() {
                    return this._balloon.hasView(this.formView);
                }
                get _isFormVisible() {
                    return this._balloon.visibleView == this.formView;
                }
                _getBalloonPositionData() {
                    const e = this.editor.editing.view,
                        t = e.document;
                    return {
                        target: e.domConverter.viewRangeToDom(
                            t.selection.getFirstRange()
                        ),
                    };
                }
            }
            class d extends n.Plugin {
                constructor(e) {
                    super(e),
                        (this._command = new o(e)),
                        e.commands.add("imageinsert", this._command);
                }
                static get requires() {
                    return [c];
                }
                static get pluginName() {
                    return "OnlyInsertImage";
                }
                init() {
                    const e = this.editor,
                        t = e.t;
                    this._form = e.plugins.get(c);
                    e.ui.componentFactory.add("onlyInsertImage", (i) => {
                        const r = new s.ButtonView(i);
                        return (
                            r.set({
                                label: t("Insert image"),
                                icon: n.icons.image,
                                tooltip: !0,
                                isEnabled: !0,
                            }),
                            this.listenTo(r, "execute", () => {
                                var e;
                                (e = this.editor.model).change((t) => {
                                    const i =
                                        e.document.selection.getFirstRange();
                                    if (e.markers.has("only-insert-image"))
                                        if (i.start.isAtEnd) {
                                            console.log(
                                                "updateMarker range.start.isAtEnd"
                                            );
                                            const n =
                                                i.start.getLastMatchingPosition(
                                                    ({ item: t }) =>
                                                        !e.schema.isContent(t),
                                                    { boundaries: i }
                                                );
                                            t.updateMarker(
                                                "only-insert-image",
                                                {
                                                    range: t.createRange(
                                                        n,
                                                        i.end
                                                    ),
                                                }
                                            );
                                        } else
                                            console.log("updateMarker other"),
                                                t.updateMarker(
                                                    "only-insert-image",
                                                    { range: i }
                                                );
                                    else if (i.start.isAtEnd) {
                                        console.log(
                                            "addMarker range.start.isAtEnd"
                                        );
                                        const n =
                                            i.start.getLastMatchingPosition(
                                                ({ item: t }) =>
                                                    !e.schema.isContent(t),
                                                { boundaries: i }
                                            );
                                        t.addMarker("only-insert-image", {
                                            usingOperation: !1,
                                            affectsData: !1,
                                            range: t.createRange(n, i.end),
                                        });
                                    } else
                                        t.addMarker("only-insert-image", {
                                            usingOperation: !1,
                                            affectsData: !1,
                                            range: i,
                                        });
                                }),
                                    this._form.swapUI();
                            }),
                            r.bind("isEnabled").to(this._command, "isEnabled"),
                            r.bind("isOn").to(this._command, "isImageSelected"),
                            r.listenTo(
                                this._command,
                                "change:isImageSelected",
                                () => {
                                    this._command.isImageSelected
                                        ? (r.label = t("Update image URL"))
                                        : (r.label = t("Insert image"));
                                }
                            ),
                            this.listenTo(r, "render", () => {
                                this.listenTo(
                                    this._form.formView,
                                    "render",
                                    () => {
                                        this._initUserInteractionsFromEditor(r);
                                    }
                                );
                            }),
                            (function (e) {
                                e.conversion
                                    .for("editingDowncast")
                                    .markerToHighlight({
                                        model: "only-insert-image",
                                        view: {
                                            classes: [
                                                "ck-fake-only-insert-image-selection",
                                            ],
                                        },
                                    }),
                                    e.conversion
                                        .for("editingDowncast")
                                        .markerToElement({
                                            model: "only-insert-image",
                                            view: {
                                                name: "span",
                                                classes: [
                                                    "ck-fake-only-insert-image-selection",
                                                    "ck-fake-only-insert-image-selection_collapsed",
                                                ],
                                            },
                                        });
                            })(e),
                            r
                        );
                    });
                }
                _initUserInteractionsFromEditor(e) {
                    this.editor.keystrokes.set("Esc", () => {
                        this.isActiveView && this.hideUI();
                    }),
                        Object(s.clickOutsideHandler)({
                            emitter: this._form.formView,
                            activator: () => this._form.isActiveView,
                            contextElements: [
                                this._form.viewElement,
                                e.element,
                            ],
                            callback: () => this._form.hideUI(),
                        });
                }
            }
        },
    ]));
