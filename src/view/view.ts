import { IView } from "../interface/view/view.interface";
import { IPresenter } from "../interface/presenter/presenter.interface";
import { Presenter } from "../presenter/presenter";

export class View implements IView {
    DOM: Document;
    presenter: IPresenter;
    constructor(DOM: Document, presenter: Presenter) {
        this.presenter = presenter;
        this.DOM = DOM;
        this.DOM
            .getElementById("ddl_type")
            .addEventListener("change", userInputed);
        this.DOM
            .getElementById("txt_scope")
            .addEventListener("input", userInputed);
        this.DOM
            .getElementById("txt_subject")
            .addEventListener("input", userInputed);
        this.DOM
            .getElementById("txa_body")
            .addEventListener("input", userInputed);
        this.DOM
            .getElementById("txa_footer")
            .addEventListener("input", userInputed);

        var self = this;

        // Event Handler
        function userInputed() {
            self.presenter.toFormat();
        }
    }

    // DOM Manipulation
    displayFormattedText(text: string): void {
        this.DOM.getElementById("p_formatted").innerHTML = text;
    }

    displayWarning(text: string): void {

    }


    // DOM Accessing
    getType(): string {
        let input: HTMLInputElement =
            <HTMLInputElement>this.DOM.getElementById("ddl_type");
        return input.value;
    }
    getScope(): string {
        let input: HTMLInputElement =
            <HTMLInputElement>this.DOM.getElementById("txt_scope");
        return input.value;
    }
    getSubject(): string {
        let input: HTMLInputElement =
            <HTMLInputElement>this.DOM.getElementById("txt_subject");
        return input.value;
    }
    getBody(): string {
        let input: HTMLInputElement =
            <HTMLInputElement>this.DOM.getElementById("txa_body");
        return input.value;
    }
    getFooter(): string {
        let input: HTMLInputElement =
            <HTMLInputElement>this.DOM.getElementById("txa_footer");
        return input.value;
    }
}