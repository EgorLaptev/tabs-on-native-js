'use strict';

export default class Tabs {

    constructor(el) {

        this.tabs = el.querySelectorAll(".tabs__tab");
        this.navigation = el.querySelectorAll(".tabs__button");

        this._control();

    }

    _control() {
        for (const [i, button] of this.navigation.entries() ) {
            button.addEventListener('click', e => {

                /* Remove active status */
                for (const navigationElement of this.navigation) navigationElement.classList.remove('tabs__button_active');
                for (const tab of this.tabs) tab.classList.remove('tabs__tab_active');

                /* Add active status */
                this.navigation[i].classList.add('tabs__button_active');
                this.tabs[i].classList.add('tabs__tab_active');

            });
        }
    }

}