import {
    ButtonView,
    FocusCycler,
    LabeledFieldView,
    View,
    ViewCollection,
    createLabeledInputText,
    submitHandler,
} from "ckeditor5/src/ui";

import { FocusTracker } from "ckeditor5/src/utils";
import { KeystrokeHandler } from "ckeditor5/src/utils";

import { icons } from "ckeditor5/src/core";
import "../../theme/onlyinsertimageform.css";

// Event submit : Fired when the form view is submitted
// Event cancel : Fired when the form view is canceled
export default class OnlyInsertImageFormView extends View {
    constructor(locale) {
        super(locale);

        const t = locale.t;

        /**
         * Tracks information about keystrokes in the form.
         * It will be used by the action form to close the UI.
         */
        this.keystrokes = new KeystrokeHandler();

        /**
         * A collection of views that can be focused in the form.
         */
        this._focusables = new ViewCollection();

        /**
         * Tracks information about DOM focus in the form.
         */
        this._focusTracker = new FocusTracker();

        // Creates a new collection of views, which can be used as children of this view.
        this._children = this.createCollection();

        /**
         * The URL input view.
         */
        this.urlInputView = this._createUrlInput(t("Insert image via URL"));

        /**
         * The Save button view.
         * Fired submit event when clicked.
         */
        this.saveButtonView = this._createButton(
            t("Insert"),
            icons.check,
            "ck-button-save"
        );
        this.saveButtonView.type = "submit";

        /**
         * The Cancel button view.
         * Fired cancel event when clicked.
         */
        this.cancelButtonView = this._createButton(
            t("Cancel"),
            icons.cancel,
            "ck-button-cancel",
            "cancel"
        );

        this.setTemplate({
            tag: "form",

            attributes: {
                class: ["ck", "ck-insert-image-form"],
                // Like the others plugins
                tabindex: "-1",
            },

            children: this._children,
        });
    }

    /**
     * Creates an input view with label, like Link plugin and ImageInsert plugin, to be consistent.
     * and add it to the children of the form,
     * and add it to the focusables and focusTracker.
     */
    _createUrlInput(label) {
        const labeledInput = new LabeledFieldView(
            this.locale,
            /* InputTextView */ createLabeledInputText
        );

        labeledInput.fieldView.placeholder = "https://example.com";
        labeledInput.label = label;

        this._children.add(labeledInput);
        this._focusables.add(labeledInput);
        this._focusTracker.add(labeledInput.element);

        return labeledInput;
    }

    /**
     * Creates a button view
     * and add it to the children of the form,
     * and add it to the focusables and focusTracker.
     */
    _createButton(label, icon, className, eventName) {
        const button = new ButtonView(this.locale);

        button.set({
            label,
            icon,
            tooltip: true,
        });

        // shorthand of Template.extend( view.template, definition );
        button.extendTemplate({
            attributes: {
                class: className,
            },
        });

        if (eventName) {
            button.delegate("execute").to(this, eventName);
        }

        this._children.add(button);
        this._focusables.add(button);
        this._focusTracker.add(button.element);

        return button;
    }

    /**
     * destroy() destroy this View and its children
     * and call stopListening (backbone)
     */

    /**
     * Render the form and its children.
     */
    render() {
        // Executed at the very beginning of the view's life cycle
        // The first time the toolbar button is clicking
        // console.log("render")
        super.render();

        submitHandler({
            view: this,
        });

        // Start listening for the keystrokes coming from #element.
        // for escape
        this.keystrokes.listenTo(this.element);

        // Cycling over focusable element
        let focusCycler = new FocusCycler({
            focusables: this._focusables,
            focusTracker: this._focusTracker,
            keystrokeHandler: this.keystrokes,
            actions: {
                // focusPrevious() will be called on the cycler.
                focusPrevious: "shift + tab",
                // focusNext() will be called on the cycler.
                focusNext: "tab",
            },
        });
        focusCycler.focusFirst();
    }

    /**
     * Put the right value in the form and the right label.
     */
    resetFormForInsert() {
        const t = this.locale.t;
        this.urlInputView.fieldView.element.value = "";
        this.saveButtonView.label = t("Insert");
    }

    resetFormForUpdate(defaultValue) {
        const t = this.locale.t;
        this.urlInputView.fieldView.element.value = defaultValue;
        this.saveButtonView.label = t("Update");
        this.urlInputView.label = t("Update image URL");
    }
}
